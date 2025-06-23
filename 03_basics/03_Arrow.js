const user = {
    userName:"Abhijay",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.userName} , Welcome to Website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage() 

// console.log(this);


// function three() {
//     // console.log(this);

//     let userName = "Abhijay";
//     console.log(this.userName);
    
    
// }

// three();


//+++++++   ---   ARROW FUNCTION --- +++++++//
// const three = () => {
//         let userName = "Abhijay";
//         console.log(this.userName);
// }

// three();


// BASIC SYNTAX

  // () => {}


    //EXPLICIT RETURN

//     const addTwo = (num1, num2) => {
//         return num1+num2;
//     }

// console.log(addTwo(3, 4)) ;


//Arrow function is also used as implicit return 
// const addTwo = (num1, num2) =>  (num1+num2);

const addTwo = (num1, num2) =>  ({username:"Abhijay"});

console.log(addTwo(3, 4)) ;