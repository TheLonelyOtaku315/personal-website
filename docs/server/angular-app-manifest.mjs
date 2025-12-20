
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
    'index.csr.html': {size: 1467, hash: '22bb9e53e75de74feea190c29d342230edfb6937f012c83094678b07dddedefb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: 'cda6b1bf4b0e297344a0129785d6a86ef96abfb210b44847daab891078ef6d1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71405, hash: 'fa31d917f9fb9fc419b2a21da13e185db99c72cb9ec6500b1050713479bb9410', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6TYELC2.css': {size: 1565, hash: 'm+ckXwmULZo', text: () => import('./assets-chunks/styles-N6TYELC2_css.mjs').then(m => m.default)}
  },
};
