
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
    'index.csr.html': {size: 1467, hash: '2919e736896e0a331a56c71819de944a21c74aaf78495d8a92aabbd16e867598', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: 'de4dbe0720b95f00d520f96d51a84d0f55a3c7d2299a826b43970484562a3e6a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73318, hash: 'e4220413d36c69da21644563ea8849b5e990cf01855eb876520f779444ebfa69', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6TYELC2.css': {size: 1565, hash: 'm+ckXwmULZo', text: () => import('./assets-chunks/styles-N6TYELC2_css.mjs').then(m => m.default)}
  },
};
