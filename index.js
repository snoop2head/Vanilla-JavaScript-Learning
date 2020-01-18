/*
// // 1-5 Hello World for JavaScript

alert('I am working. I am JavaScript. I will work for my girlfriend too :)');

console.log('I am working. I am JavaScript. I will work for my girlfriend too :)')

// 1-6 varible in JavaScript
// variable: not consistent or having a fixed pattern; liable to change.
// we need to put let in front of the initialization for variable (or creation of variable)
let a = 221;
let b = a - 5;
console.log(b,a)

// 1-7 const, var

// const is constant. The Value that doesn't change. 
// let is value that could change. It is variable
// just don't use var. Use either const or let. 


// Below example yields error Assignment to ...
// const a = 221;
// let b = a - 5;
// a = 4 
// console.log(b,a)


// 1-8 Data Types on JavaScript

// Use const as a default.  Use let, only when you need it. 

// String is text.
const what = "I love JavaScript"
console.log(what)

// Boolean is True or False.
const wat = true; // true is 1, false is 0 in binary world. Make sure it is in lower case. 

// Float is number with floating number
const whaat = 55.1;


// 1-9 Organizing Data with Arrays
// Before we begin, make sure to use Semicolons all the time.

// Array is how we store data in least kind of way. 

const doNotHateYourFutureSelf = 2; // start variable name with lowercase, and uppercase when space is preceding the word. 

const smt = 55.1;

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri","Sat", "Sun", 54, true, "string stuff", smt];

// Just like indexing python array...
console.log(daysOfWeek[0])

// 1-10 Organizing Data with Objects

// As we declared arrays, to declare on object, we need to use curly brackets. Objects do not behave like arrays. 
// So either you organize data with either array or object.
const youngInfo = {
  name:"young",
  age:24,
  gender:"male",
  isHandsome: true,
  countries: ['thailand', 'peru', 'korea', 'china', 'japan', 'bhutan'] , //never forget to close string
  favFood: [
    {
      name:"Kimchi", //don't forget comma
      fatty:false
      }, 
    {
      name:"Burger",
      fatty:true
      }
      ]

}

// entire information
console.log(youngInfo)
// accessing only gender as a key
console.log(youngInfo.gender);

// you cannot change object youngInfo, however, you can change data inside the object.
youngInfo.gender = "female"
console.log(youngInfo.gender)


// 2-1 Your first JS Function
console.log(); // console is an object. log() is function inside of console object. 
// a piece of code as many times as you want 


function myamIsLovely(name,age){
  console.log('hello!', name, "! I am", age, " years old");
} // inside of parenthesis is parameter


myamIsLovely("myam", 15); // inside of parenthesis is argument

function sayHi(name,age){
  return `Hello ${name} you are ${age} years old`
}; // return a value

const greetMe = sayHi("Young", 15);

console.log(greetMe)

const calculator = {
  plus: function(a, b){
    return a+b
  },
  minus: function(a,b){
    return a-b
  },
  divide: function(a,b){
    return a/b
  },
  multiply: function(a,b){
    return a*b
  },
  powerOf: function(a,b){
    return a**b
  }
};

const powerOf = calculator.powerOf(5,5)
console.log(powerOf) // plus is function

// multiply, divide, minus, power of

*/

// 2-2 JS DOM Functions

// const title = document.getElementById("title");
/*
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "white"; //changing HTML with Javascript


console.log(title);
console.dir(title);

// DOM is document object module
console.error("darn");
*/

// 2-4 Events and event handlers
// Event is anything that is happening on web. 

/*
function handleResize(event) {
  console.log(event);
};

// window.addEventListener("resize",handleResize()); // call the function immediately, no matter what
window.addEventListener("resize",handleResize); // call the function immediately, when event happens

*/

/*
function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick)

*/

/*
// 2-5 if, else, and, or
if (10===5) {
  console.log("hi");
} else if ("10" === "10") {
  console.log('yo');
} else {
  console.log("ho");
}

if (20 > 5 && "young" === "young"){ // and operator should satisfy both condition
  console.log("yes");
} else {
  console.log("no");
}

if (20 > 5 || "young" === "yeong"){ // or operator should satisfy both condition
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("How old are you?"); //prompt blocks all action, so don't use it other than this exercise
console.log(age)

if (age >= 18 && age <= 21){
  console.log('drink carefully');
} else if (age > 21){
  console.log('you can drink')
} else {
  console.log('you cannot');
}
*/

// 2-6 DOM If else function practice

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";


function handleClick() {
  const currentColor = title.style.color;
  // console.log(currentColor)
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
};

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick)
  // title.addEventListener("mouseenter", handleClick)
  // Refer to events at MDN 
}
init();

function handleOffline() {
  console.log("you got offline");
}

function handleOnline() {
  console.log("welcome back!");
}


window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);

