const marvel_heros =["ironman", "thor", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel_heros.push(dc);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc)
// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc);

// console.log(all_heros);

// const new_marvel_heros= [...marvel_heros, ...dc]
// console.log(new_marvel_heros);

const another_array = [1,2,3,4,[4,3,8],4,7,[3,7,[2,7,9],2,5],5,8]

const real_Array = another_array.flat(Infinity);

console.log(real_Array);

console.log(Array.isArray("Abhijay"));

console.log(Array.from("Sukanya"));

console.log(Array.from({name : "Sukanya"})); //Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



