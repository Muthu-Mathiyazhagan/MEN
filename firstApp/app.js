const double = require('./multiply');
function sayHello(name) {
    console.log("Hello",name);
    // console.error(window);
    console.log("log below");
    // console.log(window);
}
double.double(135);
double("Muthu New");

sayHello("Pearl");
console.log("Module: \n",module);

console.log(__filename);
// console.log(sayHello("Muthu Mathi"));