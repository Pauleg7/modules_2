const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ]
};
