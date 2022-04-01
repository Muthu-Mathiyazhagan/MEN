function double(params) {
        console.log(parseInt((params) *2));
}
console.log("Module: \n",module);

function logger(message) {
        console.log("Hi..",message);
}

module.exports =logger;
module.exports.double = double;
