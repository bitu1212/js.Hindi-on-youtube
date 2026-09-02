// premitive type
// string, number, boolean , null, undefined, Bigint, symbol

const score = 34
const overvalue= 100.2
const loggedIn = false
const outsideTem= null
let userEmail;

// console.log(loggedIn);

const Id = Symbol('123');

const myrId = Symbol('123');
// console.log(Id===myrId);

const bigNumber = 12233445543455n

// Refference (non premitive)

// Array , object, Function
const hero = ["Kabir Sahed" ,"Acharya prashant"]

let myobj ={
name: "Bittu",
age : 29,
}

const myfunction =function(){
console.log("Hello world");
}

console.log(typeof myfunction);