const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = (env = {}) => {
  const config = {
    entry: ['core-js/stable', 'regenerator-runtime/runtime', './src'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      mainFiles: ['index'],
      alias: {
        '^': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {minimize: true},
            },
          ],
        },
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
      }),
    ],
  };

  return config;
};
