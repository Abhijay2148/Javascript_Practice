let myDate = new Date();

// console.log(myDate.toString());

// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 4, 19)

// let myCreatedDate = new Date(2025, 4, 19 ,22 , 17)

let myCreatedDate = new Date("4-19-2025")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

console.log(newDate)

console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());

newDate.toLocaleString('default', {
   weekday : "long"
})

