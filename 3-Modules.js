// Modules

const { jhon } = require("./4-FirstModule");

//or

const names = require("./4-FirstModule");
const { sayHi } = require("./5-secondModule");
const { items, singlePerson } = require("./6-alternative-exports");

require('./7-mind-grenade');


// In node, every file is a module(by default)
// Modules- Encapsulated code (only share minimum)

console.log(jhon)

console.log(names)

console.log(names.jhon)
console.log(names.peter)


sayHi('Hema Sriivas');
sayHi('Kodati')
sayHi('Srinu')
sayHi('Nani')
sayHi('Nani Kodati')



console.log(items)
console.log(singlePerson)

