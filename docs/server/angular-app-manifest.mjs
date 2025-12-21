
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
    'index.csr.html': {size: 1467, hash: '23ba56d1b7f37f8ab85dc69471efd56a1b39f5b4d10f7418fb887571a0ff3352', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: 'f8eea603562ea3d3352b9655dcfa54a04ff4b4e61b23c07072679ebf8d6e9b89', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67434, hash: '8fee88d4297f08e5404c081d782e2e8d31714a2ab4fa00de817702b60f8a89ae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6TYELC2.css': {size: 1565, hash: 'm+ckXwmULZo', text: () => import('./assets-chunks/styles-N6TYELC2_css.mjs').then(m => m.default)}
  },
};
