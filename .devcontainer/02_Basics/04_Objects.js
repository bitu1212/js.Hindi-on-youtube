// Non singalton objects

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "1234"
tinderUser.name = "Bittu"
tinderUser.city = "Delhi"
// console.log(tinderUser);

const regularuser ={
        Email: "saheb@123",
        Nameuser :{
             Nameuser2 :{
                first_name : "Rohit",
                last_name  : "yadav",
        }
    }
}
// console.log(regularuser.Nameuser.Nameuser2.first_name);
const obj1 = {"1": "a" , "2":"b"}
const obj2 = {"3": "a" , "3": "b"}
const obj4 = {"4": "a" , "5": "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2 , obj4) ****do objects .assign se add kara jata hai
const obj3 = {...obj1 , ...obj2 ,...obj4}
// 
const users= [
    {
        id: 123,
        gmail: "Bitt@"

    },
    {
        id: 123,
        gmail: "Bitt@"

    },
    {
        id: 123,
        gmail: "Bitt@"

    },
    
]
const course ={
    courseName: "js in hindi",
    price: 999,
    instructor: "Bittu" 
}

// course.instructor
const {price} = course // print ka new way
// console.log(price);
console.log(course.price);

// {
//     "name" : "Bittu",
//     "coure" : "js in hindi",   ******** this is the json method
//     "price" : 1000
// }
 
[
    {}
    {}
    
]



