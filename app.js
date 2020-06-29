const argv = require("yargs").argv
let command = argv._[0]

switch (command) {
  case "create":
    console.log("TODO")
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
