//iff

// const uerloggedin = true
// const tempreture = 41
// if (tempreture === 41){
//     console.log("tempreture less than 50");
    
// }else{
// console.log("temreture greater than 50");

// }
// //== , !=(not equal) , ===(comprison + type check)
// console.log("execute");

// const score = 300
// if (score > 200){            ***** FUNCTION SCOPE
//     power = "fly"
//     console.log(`man power:${power}`);
    
    
// }else{
//     console.log("dropping");
    
// }


// const score = 300
// if (score > 200){
//     let power = "fly"
//     console.log(`man power:${power}`);
    
    
// }
// console.log(`man power:${power}`);

// const balance = 1000
// if (balance > 500) console.log("test") , console.log("test2");


// if (balance < 500){
//     console.log("Balance less than 500");
    
// }else if (balance <750){
// console.log("balance less than 750");

// }else if(balance < 950){
//     console.log("balance less than 950");
    
// }else{
//     console.log("balance less than 1200");
    
// }

const userloggedin = true
const debitcard = true

const userloggedinfromGoogle = false
const userloggedinfromemail = true

if(userloggedin && debitcard){
    console.log("Allow buy course");
    
}

if(userloggedinfromGoogle || userloggedinfromemail){
    console.log("user logged in");
    
}