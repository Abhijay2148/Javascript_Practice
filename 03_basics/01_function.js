// function sayName() {
//     console.log("A");
//     console.log("B");
//     console.log("H");
//     console.log("I");
//     console.log("J");
//     console.log("A");
//     console.log("Y");
    
// }

// sayName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
//     return number1+number2;
// }

// addTwoNumber(4, 5);
// const result = addTwoNumber(3,"5");

// console.log("Result : " + result);


// function loginUserName(username) {

//     if(username === undefined)
//     {
//         console.log("Please enter a Value");
//         return;
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserName("Abhijay"));


function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}



// console.log(calculateCartPrice(200, 500, 2000));

const user={
    userName : "Abhijay",
    id:67
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.userName} and id is ${anyObject.id}` );
    
}
  
handleObject(user);

const myNewArray=[200, 600, 500];

function returnMyArray(getArray) {
    return getArray[1];
}

console.log(returnMyArray(myNewArray));
