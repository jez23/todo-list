var randomID = require('random-id')

function ToDos () {
  this._items = []
}

ToDos.prototype = {
  getItems: function () {
    return this._items
  },
  addItem: function (task) {
    this._items.push({
      id: randomID(),
      task: task
    })
  }
}


var toDos = new ToDos()

toDos.addItem('Walk the Dog')
toDos.addItem('Call Mum')
toDos.addItem('Go for Run')

module.exports = toDos