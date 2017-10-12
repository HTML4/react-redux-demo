const express = require('express')
const compression = require('compression')
const proxy = require('express-http-proxy')
const path = require('path')
const Config = require('./config')
const APP_PORT = 3000
var app = express()
app.set('views', path.join(__dirname, 'build'))
app.set('view engine', 'ejs')
app.use(compression())
// Serve static resources
app.use(express.static(path.resolve(__dirname, 'build')))

app.use('/341-1', proxy(Config.ENDPOINT, {
 forwardPath: function(req, res) {
   return require('url').parse(req.originalUrl).path;
 }
}));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
app.use("/", function(req, res, next) {
  res.render('index',{})
})
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})