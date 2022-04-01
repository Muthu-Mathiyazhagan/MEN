const Logger = require("./logger");

var log = new Logger();

//Register a 'uniqueName' Event
log.on("uniqueName", (eventArg) => {
  console.log("uniqueName Called", eventArg);
});

log.log("Muthu Mathiyazhagan");
