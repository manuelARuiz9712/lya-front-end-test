const CracoLessPlugin = require('craco-less');
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  style:{
    css: {
        loaderOptions: { /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */ },
        loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#211E3B' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  typescript: {
    include: ["src/**/*", "tests/**/*"],
    baseUrl:"src"
},
};