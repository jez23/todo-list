var bodyParser = require('body-parser')
var toDos = require('../models/ToDos.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function todoController (app) {
  app.get('/', function (req, res) {

    ToDo.find({}, function (error, results){
      if (error) {
        throw new Error(error)
      }
      res.render('home', {
        toDos: results
      })
    })
    
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

app.delete('/', urlencodedParser, function (req, res) {
  console.log("Hello")
  console.log(req.body.id)
    toDos.removeItem(req.body.id)
console.log(toDos.getItems())
    res.render('home', {
      toDos: toDos.getItems()
    })
  })


}

module.exports = todoController