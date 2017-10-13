const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { ProvidePlugin, DllReferencePlugin } = webpack;

module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlPlugin({ template: './template.html' }),
    new ProvidePlugin({
      jQuery: 'jquery'
    }),
    new DllReferencePlugin({
      manifest: require('./dist/manifest.json')
    }),
  ]
};
