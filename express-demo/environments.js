const express = require("express");
const app = express();

console.log(process.env.NODE_ENV);
console.log(app.get("env"));

//To set environment Variables try below command in Terminal (ctrl+alt+t)
// export NODE_ENV=developement
if (app.get("env") === "development") {
  console.log(
    "Its Development Environment: Better dont try to understand my code.!  :)"
  );
}

//To set environment Variables try below command in Terminal (ctrl+alt+t)
// export NODE_ENV=production
if (app.get("env") === "production") {
  console.log(
    "Its Production Environment: You may never get Cleaner code than this.!  :)"
  );
}
