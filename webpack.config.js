const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV;
const apiHost =
  env === "production" ? "'https://ayo-ride-my-way-v1.herokuapp.com'" : "'http://localhost:3110'";

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  entry: {
    filename: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: "[local]___[hash:base64:5]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      __API__: apiHost
    })
  ]
};

module.exports = config;
