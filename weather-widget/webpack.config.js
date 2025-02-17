const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: 'weather-widget.bundle.js',
  },
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'weather_widget',
      filename: 'remoteEntry.js',
      exposes: {
        './WeatherWidget': './src/WeatherWidget',
      },
    }),
  ],
};
