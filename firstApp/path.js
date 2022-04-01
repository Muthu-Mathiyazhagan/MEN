const path = require("path");
const os = require("os");

let pathObj = path.parse(__filename);
let osObj = os.platform();
console.log("Here");
console.log(path.toNamespacedPath(__filename),"7");
console.log(__filename);
console.log(osObj);
console.log(pathObj);