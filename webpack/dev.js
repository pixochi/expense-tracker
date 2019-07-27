"use strict";

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    disableHostCheck: true, // in case we want to use nginx to serve the app
    public: "localhost:3000",
    historyApiFallback: true, // serve index.html for each route
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
  },
};
