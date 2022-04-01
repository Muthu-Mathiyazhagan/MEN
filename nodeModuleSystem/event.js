const EventEmitter = require("events");
const emitter = new EventEmitter();
const fs = require("fs");

// Register a Message Logged Event first - Order is Important
emitter.addListener("messageLogged", (eventArg) => {
  console.log("Message Logged event Listener Called.", eventArg);
});

// Register a logging Event first
emitter.on("logging", (eventArg) => {
  console.log("Logging...", eventArg);
});

//Raise a logging Event Before Message Logged Event

emitter.emit("logging", {
  msg: "Hey The Message is Logging in",
});

//Raise an Event
emitter.emit("messageLogged", {
  id: 1,
  name: "muthu",
  roll: 1202029,
  date: new Date(),
});
