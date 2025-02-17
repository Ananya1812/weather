const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    filename: "host.bundle.js",
  },
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        weather_widget: "weather_widget@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};
