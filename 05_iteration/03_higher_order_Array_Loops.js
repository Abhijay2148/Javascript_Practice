//For of 

// ["", "", ""];
// [{}, {}, {}];

const arr=[1, 2, 3, 4, 5];

for(const num of arr)
{
    // console.log(num);
}


const greeting = "Hello World";

for(const index of greeting)
{
    // console.log(`Each charcter is ${index}`);
}

//Map

const map = new Map();

map.set('IN', "India");
map.set('USE', "United state of America");
map.set('FR', "FRANCE");

// console.log(map);

for(const [key, value] of map)
{
    console.log(key, ':-', value);
}

const myObject = {
     game1 : 'NFS',
     game2 : 'Spiderman'
}

// for(const [key, value] of myObject)
// {
//     console.log(key, ':-', value);
    
// }
