const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for(const key in myObject)
{
//    console.log(`${key} shortcut is for ${myObject[key]}`);   
}

const programming = ["js", "cpp", "ruby", "swift"];

for(const key in programming)
{
    // console.log(programming[key]);
    
}

const coding = ["js", "cpp", "ruby", "swift"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index , arr) => {
//     console.log(item, index, arr);
    
// });

const myCoding = [
    {
        languageName : "java",
        languageFileName : "jvm"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})