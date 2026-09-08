//Objects******* singalton object
// objects me jo varriable declear kara jata wo hidden string me hota hai


const userName ={
    name: "Bittu",
    "full Name": "Bittu yadav",
    age: 28,
    Location: "Delhi",
    Email:    "kumar@123",
    isLogged:  false,
    lastoggin: "Monday"


}

// console.log(userName.Email);
// console.log(userName["Email"]);
// console.log(userName["full Name"]);


userName.Email = "yadav@12.com"
// Object.freeze(userName)
userName.Email = "kumar@123gmai.com"
// console.log(userName);

JsUser.greeting =function(){
    console.log("Hello world");
    
}



console.log(JsUser.greeting());
