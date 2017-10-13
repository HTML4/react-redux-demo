var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('./config')
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
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
    rules:[{
      test: /\.(js|jsx)$/,
      include: resolveApp("src"),
      loader: require.resolve('babel-loader'),
      options: {
          plugins: [
              ['import', [{ libraryName: 'antd', style: true }]],  // import less
          ],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
      },
    },{
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                        browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
            ],
          },
        },
        {
        loader: require.resolve('less-loader'),
            options: {
              modifyVars: { "@primary-color": "#404040" },
            },
        },
      ],
    }],
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
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, 'src', 'js', 'utils')
    }
  },
  plugins: plugins,

}
