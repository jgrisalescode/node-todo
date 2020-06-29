const argv = require("yargs")
  .command("create", "Create a task to do", {
    description: {
      demand: true,
      alias: "d",
      description: "Description of the task to do"
    }
  })
  .command("update", "Update the satate o f task", {
    description: {
      demand: true,
      alias: "d",
      description: "Description of the task to do"
    },
    completed: {
      default: true,
      alias: "c",
      description: "Mark as completed or pending the task"
    }
  })
  .help().argv

module.exports = {
  argv
}
