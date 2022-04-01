const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log("Given Message: ", msg);
    //Emit the File
    this.emit("uniqueName", { id: 29, name: msg, date: new Date() });
  }
}

module.exports = Logger;
