const { DllPlugin } = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    dll: [
      'jquery',
      './src/get-jquery-verion'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist/manifest.json')
    })
  ]
};