const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // options...
              }
            }
          ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    // host:'0.0.0.0',
    // port:8080,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    })
  ]
};