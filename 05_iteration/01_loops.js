//FOR Loops

for(let i = 1; i <= 10; i++)
{
    // console.log(`outer loop ${i}`);
    
    for(let j=1; j<= 10; j++)
    {
        //console.log(`inner loop ${j}  and inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i*j);
        
    }

}

let array = ["flash", "batman" , "superman", "ironman"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
  //  console.log(element);
}

//break and continue

for (let index = 1; index <= 20; index++){
    
    if(index == 5)
    {
        console.log("Detected 5");
        //break;
        continue;
    }
    console.log(`value of i is ${index}`);
   
}