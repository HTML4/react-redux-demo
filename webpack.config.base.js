var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('./config')

const plugins = [

  new HtmlWebpackPlugin({
    template: path.join(__dirname, './views/index.ejs'),
    filename: "./index.html",
    //production: false,
    inject: true
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
    manifest: require('./manifest.json'), // 指定manifest.json
    name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  })
]

module.exports = {
  //devtool: 'source-map',
  //context: path.join(__dirname, './client'),
  entry: {
    app: './src/js/app.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: "/"
  },
  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
      //  {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     //'file?hash=sha512&digest=hex&name=[path][name].[ext]&context=./client'
      //     'url-loader?limit=8192&name=views/[name].[ext]'
      //   ]
      // },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }


    ]
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
    }
  },
  plugins: plugins,

}
