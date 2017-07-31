var listItems = document.querySelectorAll('li')

listItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var id = event.target.dataset.id
console.log(id)
    var request = new XMLHttpRequest()

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        location.href = '/'
      }
    }
    request.open('DELETE', '/')
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    request.send('id=' + id)
  })
})
