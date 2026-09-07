// ********Arrays********** array is always in sqare bracket[]

const myArr = [0,1,2,3,4,5]
const myHero = ['Acharya prashant' ,'Kabir saheb']
// const myArr2 = (1,2,3,4,5)   yaha js automatic [] laga diya hai
console.log(myHero[0]);

// Arrays method

// myArr.push(6)
// myArr.push(7) 
// myArr.pop() ******* last value ko remove kar deta hai

// myArr.unshift(8) ******** it adds value in start
// myArr.shift()
// .includes() ***** it checks value and gives result Boolean
// .indexof()  ***** it checks value ,not found give result -1

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6)); 

// slice and splice
// slice original value ko nhi remove karta hai
// splice original value ko remove kar deta hai

console.log("A" ,myArr);

const myn1 = myArr.slice(1 ,3)
console.log(myn1);

const myn2 = myArr.splice(1 ,3)
console.log("c" ,myArr);

console.log(myn2);






