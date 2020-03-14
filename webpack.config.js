const nicepack = require('@nicepack/core');
const config = nicepack(
  require('@nicepack/react'),
  require('@nicepack/typescript'),
  config => config.babel.plugins.push('babel-plugin-styled-components'),
);

config.devServer.historyApiFallback = true;
config.devServer.overlay = true;

module.exports = config;
