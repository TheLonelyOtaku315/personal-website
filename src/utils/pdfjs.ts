// Loads pdf.js from jsDelivr the first time a PDF preview is needed, so it
// adds nothing to the initial page load.
const PDFJS_VERSION = '4.10.38';
const PDFJS_BASE = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}`;

let loading: Promise<any> | null = null;

export function loadPdfJs(): Promise<any> {
  if (!loading) {
    loading = import(/* webpackIgnore: true */ `${PDFJS_BASE}/build/pdf.min.mjs`)
      .then((lib) => {
        lib.GlobalWorkerOptions.workerSrc = `${PDFJS_BASE}/build/pdf.worker.min.mjs`;
        return lib;
      })
      .catch((error) => {
        // Let a later attempt retry (e.g. after a network hiccup)
        loading = null;
        throw error;
      });
  }
  return loading;
}

export const PDFJS_STANDARD_FONTS = `${PDFJS_BASE}/standard_fonts/`;
