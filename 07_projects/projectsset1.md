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

##Project 2 solution

```javascript
const form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value);



form.addEventListener('submit', function(e){
   e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);

   const weight = parseInt(document.querySelector('#weight').value);

   const results = document.querySelector('#results');

   if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }

  else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
 else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
}
});

```

## Project 3 solution code

```Javascript
const clock = document.getElementById('clock');

// const clock = document.querySelector('#clock')



setInterval(function () {
  let date = new Date();
// console.log(date.toLocaleDateString());

clock.innerHTML = date.toLocaleDateString()
}, 1000);
```
