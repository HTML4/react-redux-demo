const express = require('express')
const compression = require('compression')
const path = require('path')
const APP_PORT = 3000
var app = express()
app.set('views', path.join(__dirname, 'build'))
app.set('view engine', 'ejs')
app.use(compression())
// Serve static resources
app.use(express.static(path.resolve(__dirname, 'build')))

app.use("/", function(req, res, next) {
  res.render('index', {})
})
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`)
})