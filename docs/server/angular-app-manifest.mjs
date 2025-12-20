
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
    'index.csr.html': {size: 1467, hash: '93e21ad546eac38c48733c992696bfb1b6eb0fa30005de5e97d6666b04598bf6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1198, hash: '7fc50c4fe8bf2297f0d2b97c2c8c9c84ee4f7b63789961957e1db7242bf148cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73588, hash: 'f5366fddaf07c2de1efb56a58f93ace03d6ba5b840d27f2a67f713c055a30446', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6TYELC2.css': {size: 1565, hash: 'm+ckXwmULZo', text: () => import('./assets-chunks/styles-N6TYELC2_css.mjs').then(m => m.default)}
  },
};
