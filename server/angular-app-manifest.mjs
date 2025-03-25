
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23680, hash: '7adddbf33c22785d335cd55f416f571cfc461cea3d12e39353c66c0d295420c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17254, hash: 'fa6337081ccb29e3243a6af884a986906abf3e4724ee1bd9f5c83975f5c3f16c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30393, hash: 'e69cbfe406653792160b96dc67a80f3bf151a32172a9610e0e56a6e723303a0f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
