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

const update = (description, completed = true) => {
  loadData()
  // Find a match in JSON File
  let index = todoList.findIndex(task => {
    return task.description === description
  })
  if (index => 0) {
    todoList[index].completed = completed
    save()
    return true
  } else {
    return false
  }
}

const remove = description => {
  loadData()
  let index = todoList.findIndex(task => {
    return task.description === description
  })
  if (index => 0) {
    todoList.splice(index - 1, 1)
    save()
    return true
  } else {
    return false
  }
}

module.exports = {
  create,
  getList,
  update,
  remove
}
