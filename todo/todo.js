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

const loadData = () => {
  try {
    todoList = require("../db/data.json")
  } catch (error) {
    todoList = []
  }
}

const getList = () => {
  loadData()
  return todoList
}

const create = description => {
  loadData()
  let todo = {
    description: description,
    completed: false
  }
  todoList.push(todo)
  save()
  return todoList
}

module.exports = {
  create,
  getList
}
