//Immediately Invoked function expression

(function chai() {

    //Named IIFE
    console.log("Db Connected");
})();

//When you give this ";" then the iife stops the context if you dont give it wont stop 
//leading to an error
// chai();

// ( () => {
//     console.log("DB connection two");
// })()

( (name) => {

    //Unnamed IIFE
    console.log(`DB connection two ${name}`);
})("Abhijay")
