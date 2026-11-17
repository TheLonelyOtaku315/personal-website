import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { loadPdfJs, PDFJS_STANDARD_FONTS } from '@utils/pdfjs';

export type CvLanguage = 'en' | 'fr';

export interface CvDialogData {
  lang: CvLanguage;
}

export interface CvOption {
  lang: CvLanguage;
  label: string;
  file: string;
}

export const CV_OPTIONS: CvOption[] = [
  { lang: 'en', label: 'English', file: 'Tonny-Zhao-CV-EN.pdf' },
  { lang: 'fr', label: 'Français', file: 'Tonny-Zhao-CV-FR.pdf' },
];

// Opens the CV picker, starting on the site's current language
export function openCvDialog(dialog: MatDialog, siteLang: string) {
  return dialog.open(CvDialogComponent, {
    data: { lang: siteLang === 'fr' ? 'fr' : 'en' } as CvDialogData,
    panelClass: 'cv-dialog-panel',
    width: '94vw',
    maxWidth: '980px',
    autoFocus: 'dialog',
  });
}

// Lets the visitor pick the English or French CV, previews its pages, then
// download it or open it in a new tab.
@Component({
  selector: 'app-cv-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, TranslateModule],
  templateUrl: './cv-dialog.component.html',
  styleUrl: './cv-dialog.component.css',
})
export class CvDialogComponent implements AfterViewInit, OnDestroy {
  readonly options = CV_OPTIONS;
  selected: CvOption;

  loading = false;
  failed = false;
  pageCount = 0;
  fileSize = '';

  @ViewChild('pages') pagesRef?: ElementRef<HTMLDivElement>;

  // Parsed documents, so switching back and forth doesn't refetch
  private docs = new Map<string, { doc: any; bytes: number }>();
  // Increments on every render so a slow, outdated render can bail out
  private renderId = 0;

  constructor(
    public dialogRef: MatDialogRef<CvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: CvDialogData,
  ) {
    this.selected =
      this.options.find((o) => o.lang === data?.lang) ?? this.options[0];
  }

  get fileUrl(): string {
    return `assets/doc/${this.selected.file}`;
  }

  ngAfterViewInit(): void {
    // Wait a tick so the dialog has its final width before measuring
    setTimeout(() => this.render(), 0);
  }

  ngOnDestroy(): void {
    this.renderId++;
    this.docs.forEach(({ doc }) => doc.destroy?.());
  }

  select(option: CvOption): void {
    if (option === this.selected) return;
    this.selected = option;
    this.render();
  }

  close(): void {
    this.dialogRef.close();
  }

  private async render(): Promise<void> {
    const id = ++this.renderId;
    const host = this.pagesRef?.nativeElement;
    if (!host) return;

    this.loading = true;
    this.failed = false;
    host.classList.add('is-switching');

    try {
      const { doc, bytes } = await this.load(this.selected);
      if (id !== this.renderId) return;

      this.pageCount = doc.numPages;
      this.fileSize = `${Math.max(1, Math.round(bytes / 1024))} KB`;

      // Render at the displayed width, sharp on high-DPI screens
      const width = Math.max(280, host.clientWidth);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const canvases: HTMLCanvasElement[] = [];

      for (let n = 1; n <= doc.numPages; n++) {
        const page = await doc.getPage(n);
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({
          scale: (width / base.width) * ratio,
        });
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.className = 'cv-page';
        canvas.setAttribute('role', 'img');
        canvas.setAttribute(
          'aria-label',
          `${this.selected.label} CV, page ${n} of ${doc.numPages}`,
        );
        await page.render({
          canvasContext: canvas.getContext('2d')!,
          viewport,
        }).promise;
        if (id !== this.renderId) return;
        canvases.push(canvas);
      }

      host.replaceChildren(...canvases);
      host.parentElement?.scrollTo({ top: 0 });
    } catch (error) {
      if (id !== this.renderId) return;
      console.error('CV preview failed:', error);
      this.failed = true;
      host.replaceChildren();
    } finally {
      if (id === this.renderId) {
        this.loading = false;
        host.classList.remove('is-switching');
      }
    }
  }

  private async load(option: CvOption): Promise<{ doc: any; bytes: number }> {
    const cached = this.docs.get(option.file);
    if (cached) return cached;

    const [pdfjs, response] = await Promise.all([
      loadPdfJs(),
      fetch(`assets/doc/${option.file}`),
    ]);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = new Uint8Array(await response.arrayBuffer());
    const bytes = data.byteLength;
    const doc = await pdfjs.getDocument({
      data,
      standardFontDataUrl: PDFJS_STANDARD_FONTS,
    }).promise;

    const entry = { doc, bytes };
    this.docs.set(option.file, entry);
    return entry;
  }
}
