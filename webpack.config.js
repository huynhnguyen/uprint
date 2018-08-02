const path = require('path');

module.exports = {
  entry: './src/',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
    // These options are useful if the user wants to load the module with AMD
    library: 'uprint',
    umdNamedDefine: true
    // path: path.resolve(__dirname, 'dist')
  }
};