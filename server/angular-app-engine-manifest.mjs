
export default {
  basePath: 'https://popeye1235.github.io/user-dashboard-demo',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
