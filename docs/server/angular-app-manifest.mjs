
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
    'index.csr.html': {size: 578, hash: 'a454b98aed0a498325962778f2c72febd8a0d5ee25cd325fa66daef3229b1eca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1118, hash: 'e88fd75ba4668007a0ba730359b291fbae9466b3a7c24e6d94fcf1cd8dbde7fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82491, hash: '94386a61a2ac91cb8039390c9e1dfb159aa3506fef0d6df514382cf6adc60aab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
