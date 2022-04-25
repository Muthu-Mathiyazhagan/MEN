const isCharging = require("is-charging");

isCharging().then((result) => {
  console.log(result);
  //=> true
});
