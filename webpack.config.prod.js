var path = require("path");

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
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
};
