var bodyParser = require('body-parser')
var ToDo = require('../models/ToDo.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function todoController (app) {
app.get('/', function (req, res) {
  renderToDos(res)
})

function renderToDos (res) {
    ToDo.find({}, function (error, results){
      if (error) {
        throw new Error(error)
      }
      res.render('home', {
        toDos: results
      })
    })
}


app.post('/', urlencodedParser, function (req, res) {
ToDo({
  task: req.body.item
}).save(function (error) {
  if (error) {
    throw new Error(error)
  }

  renderToDos(res)
})
})

app.delete('/', urlencodedParser, function (req, res) {
  ToDo.find({ _id: req.body.id }).remove(function (error) {
  if (error) {
    throw new Error(error)
  }

  renderToDos(res)
})
  })


}

module.exports = todoController