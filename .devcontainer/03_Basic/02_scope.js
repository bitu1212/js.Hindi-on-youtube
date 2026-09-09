// *********SCOPE*********

// let b = 5       ** THIS IS THE GLOBAL SCOPE

// if (true){        ***THIS IS BLOCK SCOPE
// const a =10
// let b = 20
// var c = 40

// }

let a = 300
 if (true){       
const a =10
let b = 20
var c = 40
// console.log("Bittu:" ,a);


}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Bittu"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
}

one()

if (true){
    const username = "Rohit"
    if(username === "Rohit"){
        const website = ("youtube")
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//+++++++++++++++++++interesting+++++++++++++++++++
console.log(addone(5));
 
function addone(num){
    return num+1
}

const addtwo = function(num){
    return num+2
}
 console.log(addtwo(7));
  