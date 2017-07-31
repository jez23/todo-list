var bodyParser = require('body-parser')
var toDos = require('../models/ToDos.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function todoController (app) {
  app.get('/', function (req, res) {
    
res.render('home', {
  toDos: toDos.getItems()
})  

})

app.post('/', urlencodedParser, function (req, res) {
  toDos.addItem(req.body.item)

  res.render('home', {
    toDos: toDos.getItems()
  })
})


}

module.exports = todoController