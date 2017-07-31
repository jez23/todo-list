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
  },
    removeItem: function (id) {
    this._items = this._items.filter(function (item) {
      return item.id !== id
    })
  }
}


var toDos = new ToDos()

toDos.addItem('Walk the Dog')
toDos.addItem('Call Mum')
toDos.addItem('Go for Run')

module.exports = toDos