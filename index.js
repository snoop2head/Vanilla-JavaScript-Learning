// // 1-5 Hello World for JavaScript

alert('I am working. I am JavaScript. I will work for my girlfriend too :)');

console.log('I am working. I am JavaScript. I will work for my girlfriend too :)')

// // 1-6 varible in JavaScript
// // variable: not consistent or having a fixed pattern; liable to change.
// we need to put let in front of the initialization for variable (or creation of variable)
let a = 221;
let b = a - 5;
console.log(b,a)

// 1-7 const, var

// const is constant. The Value that doesn't change. 
// let is value that could change. It is variable
// just don't use var. Use either const or let. 


/*
Below example yields error Assignment to ...
const a = 221;
let b = a - 5;
a = 4 
console.log(b,a)
*/


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

