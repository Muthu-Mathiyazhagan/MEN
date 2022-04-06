const dbDebugger = require("debug")("app.db");
const qaDebugger = require("debug")("app.qa");

dbDebugger("Database is Connecting ...!");

qaDebugger(
  "This app dont have any bug, that may feature, Refer Client Request Before raise a bug on me.! :)"
);

// Commands are
// export DEBUG=app.db //for db Logs
// export DEBUG=app.qa // for qa logs
// export DEBUG=app.*   //For all

//in terminal only

// DEBUG=app.* node debug.js
