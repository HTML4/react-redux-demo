var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('./config')

const nodeEnv = process.env.NODE_ENV || "development"

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: Infinity,
    filename: 'common.bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, './views/index.ejs'),
    filename: "./index.html",
    production: false,
    inject: true
  })
]

  // plugins.push(
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.NoEmitOnErrorsPlugin(),
   
  // )

module.exports = {
 // devtool: 'cheap-module-source-map',
  context: path.join(__dirname, './client'),
  entry: {
    app: './js/app.js',
    common: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: "/"
  },
  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][name].[ext]&context=./public'
        ]
      }, {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  resolve: {
    alias: {
      Client: path.resolve(__dirname, 'client'),
    }
  },
  plugins: plugins,
  devServer: {
    //contentBase: path.join(__dirname, "public"),
    publicPath: '/',
    stats: { colors: true },
    proxy: {
      '/graphql': Config.ENDPOINT + '/graphql'
    },
    //historyApiFallback: true,
    port: 3000,
    //watchContentBase: true
 //  inline: true, // 可以监控js变化
  //hot: true, // 热启动
  //host: 'localhost',
  }
}