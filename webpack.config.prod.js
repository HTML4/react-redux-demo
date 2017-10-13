require('./npm-scripts/before-build.script');

var path = require('path')
var webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('./config')
const webpackConfigBase= require('./webpack.config.base.js')

webpackConfigBase.plugins.push(
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, './src/images'),
    to: path.resolve(__dirname, './build/images'),
    force: true,
    toType: 'dir',
    ignore: ['.*']
  },{
    from: path.resolve(__dirname, './src/dll.js'),
    to: path.resolve(__dirname, './build/dll.js'),
  }]),

  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false
    },
  })
)
webpackConfigBase.devtool = 'source-map',

module.exports = webpackConfigBase
// {
//   devtool: 'source-map',
//   //context: path.join(__dirname, './client'),
//   entry: {
//     app: './client/js/app.js'
//   },
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: '[name].[chunkhash].js',
//     publicPath: "/"
//   },
//   module: {
//     loaders: [{
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         test: /\.js$/,
//       }, {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loaders: [
//           //'file?hash=sha512&digest=hex&name=[path][name].[ext]&context=./client'
//           'url-loader?limit=8192&name=views/[name].[ext]'
//         ]
//       }, {
//         test: /\.less$/,
//         loaders: ['style-loader', 'css-loader', 'less-loader'],
//       }
//
//     ]
//   },
//   resolve: {
//     alias: {
//       Client: path.resolve(__dirname, 'client'),
//     }
//   },
//   plugins: plugins,
//
// }
