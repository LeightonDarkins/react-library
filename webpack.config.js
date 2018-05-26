const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src/demo"),
  output: {
    path: path.join(__dirname, "demo"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(.css|.scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/demo/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    port: 3000,
    stats: "minimal"
  }
};