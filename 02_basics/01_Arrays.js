

const ray = [1,5,2,6, true, "Abhijay"];

// console.log(ray[5]);

// const myArr = new Array(1,5,2,6);

const myArr = new Array(1, 5, 2, 6); // Works but less common
// console.log(ray[6]);



//ArrayMethods


// ray.push(4);
// console.log(ray);
// ray.pop();
// console.log(ray);
// ray.unshift(8);
// console.log(ray);
// ray.shift();


// console.log(ray.includes(9));
// console.log(ray.indexOf(5));

// console.log(ray);

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

//[SLICE] AND [SPLICE]

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ", myArr);


console.log("A ", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);

console.log("B ", myArr);
