const mongoose = require("mongoose");
const objectId = new mongoose.Types.ObjectId().toString();
console.log(objectId.toString());
console.log(new mongoose.Types.ObjectId().getTimestamp().toLocaleString());
console.log(new mongoose.Types.ObjectId().getTimestamp().toDateString());

console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().toString().length);
console.log(new mongoose.Types.ObjectId().valueOf());
console.log(new mongoose.Types.ObjectId().valueOf());

const ObjectId = mongoose.Types.ObjectId;
console.log(ObjectId.isValid(objectId));
// Timestamp(4)  //MachineId (3)  ProcessId (2) Increment (3)
// 627a051e      0ac5d3            232b          882002
// 627a04e0      70fe65            2bc2          dcc8ee
