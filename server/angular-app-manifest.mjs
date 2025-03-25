
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://popeye1235.github.io/user-dashboard-demo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/user-dashboard-demo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23728, hash: 'c4e2daa390f7a744e1a5c6d760b046e5bef900c1903ea59c127212b455eb344f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17302, hash: 'ea7eeddc5ceeb6ccc44cb505c820a2b44c18dc2c10d03f352b2951b7110120f7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30441, hash: 'b1996d49558e4905668ac95eaf0bd5e661e9a12f388694179db8fc2231eb71a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
