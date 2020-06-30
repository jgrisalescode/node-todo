const argv = require("./config/yargs").argv
const todo = require("./todo/todo")
const colors = require("colors")
let command = argv._[0]

switch (command) {
  case "create":
    let task = todo.create(argv.description)
    console.log(task)
    break
  case "list":
    let list = todo.getList()
    list.forEach(task => {
      console.log("========TODO=========".green)
      console.log(task.description)
      console.log(`Status: ${task.completed}`)
      console.log("=====================".green)
    })
    break
  case "update":
    let updated = todo.update(argv.description, argv.completed)
    console.log(updated)
    break

  case "remove":
    let deleted = todo.remove(argv.description)
    console.log(deleted)
    break

  default:
    console.log("Command not found")
    break
}
