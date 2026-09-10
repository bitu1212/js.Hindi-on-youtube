const user ={
    username: "Bittu yadav",
    price: 9999,
    welcomemessage: function (){
        // console.log(`${this.username} ,welcome to website` );
        // console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "Rohit"
// user.welcomemessage()
// console.log(this);

// this current context ko reffer karta hai

// function chai(){
//     username = "Bittu"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//      username = "Bittu"
//      console.log(this.username);
// }
// chai()


// const chai = () => {
//      username = "Bittu"
//      console.log(this.username);
// }
// chai()

// () => {}    this is aero function

// const addtwo =(num1 , num2) => {    ****** curly braces{} me 'return ka' use karna padta hai
//     return num1+num2
// }

// const addtwo = (num1 , num2) => num1 + num2

// const addtwo = (num1 , num2) => (num1 + num2)    **** () me "return" ka use mhi hota hai

 const addtwo = (num1 , num2) => ({Name: "bittu"})

console.log(addtwo( 3 ,5));
