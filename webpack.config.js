const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    open: true,
    proxy: [
      {
        context: ['/api', '/login', '/user'],
        target: 'http://localhost:3000',
      },
    ],
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.scss' ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    }),
  ]
}
