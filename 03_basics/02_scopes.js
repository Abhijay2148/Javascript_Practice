let a=100;     //Global scope
const b=20;
var c=300;

if (true) {       //Blocked scope
    let a=10;
    const b=200;
    
    console.log("Inner Scope: " + a);
    
}


console.log(a);
// console.log(b);
// console.log(c);
