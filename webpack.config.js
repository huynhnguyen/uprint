const path = require('path');

module.exports = {
  entry: './src/',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'uprint.js',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this' //OMG: fix windown is not define
  }
};