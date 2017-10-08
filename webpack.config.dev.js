var path = require('path')
var webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('./config')
const webpackConfigBase= require('./webpack.config.base.js')

// const plugins = [
//
//   new webpack.DefinePlugin({
//     'process.env': { NODE_ENV: JSON.stringify("development") }
//   }),
//   new HtmlWebpackPlugin({
//     template: path.join(__dirname, './views/index.ejs'),
//     filename: "./index.html",
//     production: false,
//     inject: true
//   }),
//   new webpack.DllReferencePlugin({
//     context: path.join(__dirname), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
//     manifest: require('./manifest.json'), // 指定manifest.json
//     name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
//   })
// ]

  // plugins.push(
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.NoEmitOnErrorsPlugin(),

  // )
webpackConfigBase.plugins.push(
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify("development") }
  })
)
webpackConfigBase.devServer = {
  contentBase: path.join(__dirname, "src"),
  publicPath: '/',
  stats: { colors: true },
  proxy: {

    '/341-1': {
      target: 'http://route.showapi.com',
      secure: false,
    }
  },
  historyApiFallback: true,
  port: 3000,
  watchContentBase: true
  //inline: true, // 可以监控js变化
  //hot: true, // 热启动
  //host: 'localhost',
}

module.exports = webpackConfigBase
// {
//  // devtool: 'cheap-module-source-map',
//   //context: path.join(__dirname, './client'),
//   entry: {
//     app: './client/js/app.js'
//   },
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: '[name].js',
//     publicPath: "/"
//   },
//   module: {
//     loaders: [{
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         test: /\.js$/,
//       }, {
//       test: /\.(png|jpe?g|gif|svg)$/,
//       loader: 'url',
//       query: {
//         limit: 10240, // 10KB 以下使用 base64
//         name: 'images/[name]-[hash:6].[ext]'
//       }
//     }, {
//         test: /\.less$/,
//         loaders: ['style-loader', 'css-loader', 'less-loader'],
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       Client: path.resolve(__dirname, 'client')
//     },
//   },
//   plugins: plugins,
//   devServer: {
//     contentBase: path.join(__dirname, "client"),
//     publicPath: '/',
//     stats: { colors: true },
//     proxy: {
//
//       '/341-1': {
//         target: 'http://route.showapi.com',
//         secure: false,
//       }
//     },
//     //historyApiFallback: true,
//     port: 3000,
//     //watchContentBase: true
//  //  inline: true, // 可以监控js变化
//     hot: true, // 热启动
//     host: 'localhost',
//   }
// }
