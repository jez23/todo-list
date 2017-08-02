require('dotenv').config()
var mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true
})

var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))
app.set('view engine', '.hbs')
app.use(express.static('public'))

require('./controllers/toDoController.js')(app)

app.listen(3000)