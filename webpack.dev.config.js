var path = require('path');
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src' , 'pages', 'index', 'index.js')
  },

  output: require('./webpack-config/output.config.js'),

  module: require('./webpack-config/module.dev.config.js'),

  resolve: require('./webpack-config/resolve.config.js'),

  plugins: require('./webpack-config/plugins.dev.config.js'),

  //externals: require('./webpack-config/externals.config.js'),

  devServer: require('./webpack-config/devServer.config.js'),
};
