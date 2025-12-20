
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/personal-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personal-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1467, hash: '00fe7362fc2b2f9168fb252eb2034d81bb021d0ad8fd6c1b00cf1beb9bbb46b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: '78aede3fa1d15b18a32bb881df458b0530f152de1fc0a591bfc7c32c96601bfa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 72076, hash: 'cffa14a4e448f60cdc3d6a1daa9b48a79bdf47fa96729dca4496df0b9bfb89f9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6TYELC2.css': {size: 1565, hash: 'm+ckXwmULZo', text: () => import('./assets-chunks/styles-N6TYELC2_css.mjs').then(m => m.default)}
  },
};
