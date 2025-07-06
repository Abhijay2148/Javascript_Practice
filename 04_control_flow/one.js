//if

// const userLoggesIn = true;
// const temp=41;

// if(temp < 50)
// {
//     console.log("Temperature less than 50");
    
// }
// else{
//     console.log("Temperature greater than 50");
    
// }

//Condition = {=, <, >, <=, >=, ==, !=}
// ===  -> Strict equal, also check type of datatype

// const user=200;

// if(user > 100)
// {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// const balance = 1000;

// if(balance >= 500) console.log("Test"), console.log("Test2");

// if(balance < 500)
// {
//     console.log("less than 500");
    
// } else if (balance < 750)
// {
//     console.log("less than 750");
    
// } else if(balance < 900)
// {
//     console.log("less than 900");
// }
// else
// {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard)
{
    console.log("Allow to bye course");
}

const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("user logged in");
    
}