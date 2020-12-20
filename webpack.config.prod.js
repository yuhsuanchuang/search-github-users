var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: ["./src/index"],
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
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        GITHUB_API_TOKEN: JSON.stringify(
          "864b9d4a9100423494a313d8023196e0879e64ae"
        ),
      },
    }),
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
};
