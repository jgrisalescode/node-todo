const description = {
  demand: true,
  alias: "d",
  description: "Description of the task to do"
}

const completed = {
  default: true,
  alias: "c",
  description: "Mark as completed or pending the task"
}

const argv = require("yargs")
  .command("create", "Create a task to do", {
    description
  })
  .command("update", "Update the satate o f task", {
    description, 
    completed})
  .command("remove", "Remove a thast the satate o f task", {
    description})
  .help().argv

module.exports = {
  argv
}
