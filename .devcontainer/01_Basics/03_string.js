const name = "Bittukumar"
const repoCount = 50

// console.log(name + repoCount); **** not good

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Bituyadav')
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
const newString = gameName.substring(0 , 4);
console.log(newString);

const anotherString = gameName.slice(0 , 4);
console.log(anotherString);

const url = "http://bitu.com//%20bittu.com";

console.log(url.replace('%20' , '__'));


