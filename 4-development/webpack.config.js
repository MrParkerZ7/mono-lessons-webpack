const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html",
    // }),
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
};
