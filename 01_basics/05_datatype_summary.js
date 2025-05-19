
//DataTypes

//1.Primitive
//2.7 types : string, number, boolean, null, undefined, symbol, BigInt
        const id = Symbol('123');

        const anotherId = Symbol('123');

        // console.log(id === anotherId);

        const bigNumber = 49815151089511n;

        // console.log(typeof(bigNumber));


//3. Reference (Non-Primitive)

//4. Array, Object, function


const heros=["superman", "spiderman", "shaktiman"];
//  console.log(heros);
 
 let obj = {   //function without name
    name:'Abhijay',
    age : '22',
 }

let func = function(){ //function with name
    // console.log("Hello Abhijay");
}

// console.log(typeof func);

/*GOAL - Master Object and browser events to master javascript*/





/* JavaScript is not a statically typed language.
 It is a dynamically typed language, 
 meaning the type of a variable is determined at runtime 
 based on the value assigned to it. In contrast, 
 statically typed languages like TypeScript require you to 
 declare the type of a variable before using it, 
 and the compiler checks for type errors at compile time.  */


 //------------+++++++++++++++++++++++++++++++++++++---------------------------------------

//  Stack => Primitive Heap => Non-Primitive


let myName="Abhijay";

let anotherName = myName;

anotherName="AbhijayChouhan";

console.log(myName);

console.log(anotherName);

let user = {
    email: "Abhijay23",
    Id : "2103"
}

let userOne = user;

userOne.email = "abhijay%8188";

console.log(user.email);
console.log(userOne.email);