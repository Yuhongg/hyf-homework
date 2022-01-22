// Voice asistant
let nameList = [];
let toDoList = [];
let nameOfSpeaker = "";

function getReply(command) {
  //Hello my name is Benjamin
  if (command.includes("Hello my name is")) {
    let n = command.split(" ");
    nameList.push(n[n.length - 1]);
    //console.log(nameList); for testing if string is saved
    return console.log("Nice to meet you " + n[n.length - 1]);
  }

  //What is my name
  if (command.includes("What is my name?")) {
    return console.log("Your name is: " + nameList[nameList.length - 1]);
  }

  //Add fishing to my todo
  if (command.includes("Add" && "to my todo")) {
    let n = command.split(" ");
    let splicedCommand = n.splice(1, n.length - 4);
    toDoList.push(splicedCommand);
    return console.log(splicedCommand + " added to your todo");
  }
  //Remove fishing from my todo
  if (command.includes("remove" && "from my todo")) {
    let n = command.split(" ");
    let splicedCommand = n.splice(1, n.length - 4);
    removeFromArray(toDoList, splicedCommand);
    return console.log(splicedCommand + " removed from your todo");
  }

  //What is on my todo?
  if (command.includes("What is on my todo?")) {
    let string = "" + toDoList[0];

    for (let i = 1; i < toDoList.length; i++) {
      string + "and " + toDoList[i];
    }

    return console.log(string);
  }
}

function removeFromArray(array, value) {
  return array.filter(function (e) {
    return e != value;
  });
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add shopping to my todo")); // "fishing added to your todo"
console.log(getReply("Add shopping for shoes to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
