var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval-cheap-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
