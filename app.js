const argv = require("./config/yargs").argv
const todo = require("./todo/todo")
let command = argv._[0]

switch (command) {
  case "create":
    let task = todo.create(argv.description)
    console.log(task)
    break
  case "list":
    console.log("TODO")
    break
  case "update":
    console.log("TODO")
    break

  default:
    console.log("Command not found")
    break
}
