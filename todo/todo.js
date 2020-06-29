const fs = require("fs")

let todoList = []

const save = () => {
  let data = JSON.stringify(todoList)
  fs.writeFile("db/data.json", data, err => {
    if (err) {
      throw new Error("Filte does not saved", err)
    }
  })
}

const create = description => {
  let todo = {
    description: description,
    completed: false
  }
  todoList.push(todo)
  save()
  return todoList
}

module.exports = {
  create
}
