require('./npm-scripts/before-build.script');

var path = require('path')
var webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Config = require('./config')
const webpackConfigBase= require('./webpack.config.base.js')

const plugins = [


  new HtmlWebpackPlugin({
    template: path.join(__dirname, './views/index.ejs'),
    filename: "./index.html",
    production: true,
    inject: true
  }),
  new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, './client/images'),
    to: path.resolve(__dirname, './build/images'),
    force: true,
    toType: 'dir',
    ignore: ['.*']
  },{
    from: path.resolve(__dirname, './client/dll.js'),
    to: path.resolve(__dirname, './build/dll.js'),
  }
]),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
    manifest: require('./manifest.json'), // 指定manifest.json
    name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  }),
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
]

webpackConfigBase.plugins.push(
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, './client/images'),
    to: path.resolve(__dirname, './build/images'),
    force: true,
    toType: 'dir',
    ignore: ['.*']
  },{
    from: path.resolve(__dirname, './client/dll.js'),
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
