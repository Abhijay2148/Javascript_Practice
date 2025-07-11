#Projects related to DOM

##project link 
[Click](https://stackblitz.com/edit/stackblitz-starters-dj4cctvf?description=HTML/CSS/JS%20Starter&file=1-colorchanger%2Fscript.js,1-colorchanger%2Findex.html,1-colorchanger%2Fstyle.css&terminalHeight=10&title=Static%20Starter)

#solution code

##project 1

``` javascript

console.log("Abhijay");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  
  button.addEventListener('click' , function(e) {
    console.log(e);
    console.log(e.target);

    if(e.target.id === "grey")
    {
      body.style.background = e.target.id;
    }

    if(e.target.id === "yellow")
    {
      body.style.background = e.target.id;
    }

    if(e.target.id === "blue")
    {
      body.style.background = e.target.id;
    }

    if(e.target.id === "white")
    {
      body.style.background = e.target.id;
    }
  })
});


```