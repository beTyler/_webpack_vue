const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    print: './src/print.js',
    index: './src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
     static: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出"
    })
  ],
  module: {
    rules: []
  }
};
