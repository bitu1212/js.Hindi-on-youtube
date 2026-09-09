
// ********FUNCTIONS**********

function saymyName(){
    console.log("B");
console.log("I")
console.log("t");
console.log("u");
}

// saymyName()

// function addtwoNumbers(number1 , number2){
// console.log(number1 + number2);

// }
// addtwoNumbers()   ********** code ki execute kar dega

function addtwoNumbers(number1 , number2){
let result = (number1 + number2)
// console.log("Bittu");
return  result

// console.log("Bittu");   *** ye print nahi hoga because return ke bad hai
// value return ke bad usko kisi varriable me rakha jata hai uske bad console hota hai


}
const result = addtwoNumbers( 4 ,4)
// console.log( "result", result);

function userlogginmessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
return `${username} just loggin`

}
// console.log(userlogginmessage("Bittu"));
//  console.log(userlogginmessage());

function calculatecartprice(...num1){
return num1
}
// console.log(calculatecartprice(200 ,300 ,400 ,500));

const username={
    Name: "Bittu",
    price : 399
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.Name} and price is ${anyobject.price}`);
    
}
// handleObject(username)
handleObject({
    Name : "rohit",
    price : 255
})


const mynewArray = [200,300,400,900]
function returnsecondValue(getArray){
return getArray[0,1,2]
}
console.log(returnsecondValue(mynewArray));
