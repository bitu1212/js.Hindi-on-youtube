const myfevoriteHero = ["krishna ji" , "Kabir sahen" ,"budddh"]
const dcHero = ["Acharya ji" ,"sukrat" ,"pleto"]
// myfevoriteHero.push(dcHero)

// console.log(myfevoriteHero);
// const allHeros= myfevoriteHero.concat(dcHero)
// console.log(allHeros.toString());

// .toconcat()+.push() **** do array ko jodne ke liy use hota
// 


 const allHeros2 = [...myfevoriteHero, ...dcHero]
 console.log(allHeros2);

 const new_Array = [1,2,3,[2,3,4],2 ,2[4,5[8,8]]]
 const real_another_array = new_Array.flat(Infinity) 
console.log(real_another_array);

// const name = ("Bittu")
// console.log(Array.isArray(name));
// console.log(Array.from(name));
// const name2 = ["Rohit"]
// console.log(Array.isArray(name2));

let score = 100
let score2  = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score , score2 , score3 , score4));




