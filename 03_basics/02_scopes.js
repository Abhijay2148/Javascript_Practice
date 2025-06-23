let a=100;     //Global scope
const b=20;
var c=300;

if (true) {       //Blocked scope
    let a=10;
    const b=200;
    
    // console.log("Inner Scope: " + a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


//Neted function

function one(){
    const username = "Abhijay";

    function two()
    {
        const website = "Youtube";
        // console.log(username);
        
    }

    // console.log(website);

    two()
    
}

// one()

if(true)
{
    const username="Abhijay";

    if(true)
    {
        const website = "Youtube";

        console.log(username + website);
        
    }

    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++++++++++  INTRESTING ++++++++++++++++++++++++++++++


function addOne(num)
{
    return num+1;
}

addOne(5);

const addTwo = function (num){
    return num+2;
}

addTwo(5);