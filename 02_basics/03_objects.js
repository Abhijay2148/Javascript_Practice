//Singleton
//Object.create
//object literals

const mySym = Symbol("key1")

const jsUser = {
    "name" : "Abhijay",
    "age" : 21,
    [mySym] : "myKey1",
     mail:"gif@32",
     "isLoggedIn":false,
     "logindays" :["Monday","Friday"]
}

// console.log(jsUser.mail);
// console.log(jsUser.age);
// console.log(jsUser.name);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.mail = "abc@chatgpt";

// Object.freeze(jsUser)

jsUser.mail = "def@deepseek"

// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
    
}
console.log(jsUser.greeting());

jsUser.greeting = function() {
    console.log(`Hello js User, ${this.name}`);
    
}


console.log(jsUser.greeting());
