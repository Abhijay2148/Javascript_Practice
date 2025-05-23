//const tinderUser = new Object()

const tinderUser = {}

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@abc.com",
    fullName:{
        userFullname:{
           firstName : "Abhijay",
            lastName:"Chouhan"  
        }

    }
}

// console.log(regularUser.fullName.userFullname);

const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

// const obj3 = {
//     obj1,obj2
// }

// const obj3=Object.assign({},obj1,obj2)
 // here is an empty object and all the value are going to that empty object if we dont 
//assign that empty object then all the value will go to obj1

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id:1,
        email:"abc@123.com"
    },

    {
        id:2,
        email:"def@456.com"
    },

    {
        id:3,
        email:"ghi@789.com"
    }

]

// console.log(user);
// console.log(user[1]);
// console.log(user[2].email);

//    console.log(Object.keys(tinderUser));

//    console.log(Object.values(tinderUser));

//    console.log(Object.entries(tinderUser));

//    console.log(tinderUser.hasOwnProperty('isLoggedIn'));


   
const course = {
    courseName : "js In hindi", 
    price : "999",
    courseInstructor : "Hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course 

// console.log(courseInstructor);

console.log(instructor);

// {
//    "name" : "Abhijay",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }