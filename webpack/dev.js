"use strict";

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    public: "localhost:3000",
    historyApiFallback: true, // serve index.html for each route
    publicPath: "/"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // enable CSS Modules
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist")
  }
};
