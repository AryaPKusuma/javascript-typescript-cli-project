import readline from "readline";
import { stdin as input, stdout as output } from "node:process";
import TaskManager from "./services/task-manager";

const manager = new TaskManager("./storage/task.json");

const message = {
  taskname: (command) =>
    console.log(`INVALID, Please input task. ${command} TASKNAME`),
  success: () => console.log("SUCCESS ADD "),
};

const rl = readline.createInterface({
  input: input,
  output: output,
  prompt: "todo> ",
});

rl.prompt();
rl.on("line", (line) => {
  const [command, ...args] = line.trim().split(" ");

  switch (command) {
    case "add":
        if (args.length === 0) {
            message.taskname(command);
            rl.prompt();
            break;
        }
        manager.addTask(args.join(" "));
        rl.prompt();
        break;
    case "list":
      manager.listTask();
      rl.prompt();
      break;
    case "done":
      if (args.length === 0) {
        message.taskname(command);
        rl.prompt();
        break;
      }
      manager.listComplete();
      break;
    case "mark":
      if (args.length > 1 || args.length === 0){
        message.taskname(command);
        rl.prompt();
      }
      manager.toggleComplete(args);
      break
    case "remove":
      if (args.length === 0 || args.length > 1) {
        message.taskname(command)
        rl.prompt();
        break;
      }
      manager.removeTask(args);
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("invalid command, use add, list, remove");
  }
});

// rl.close()
