const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  "mode":"development",
  entry: './src/index.js',
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader'],
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    //new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  devtool:'inline-source-map',
};
