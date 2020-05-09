// https://www.youtube.com/watch?v=lXxlGCRBOQU&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK&index=24

// selecting tag elements in html document, designating them as variables
const form = document.querySelector(".js-form"), // <form class = "js-form">
  input = form.querySelector("input"), // <form> <input> tag element </input> </form
  greetings = document.querySelector(".js-greetings"); // <h4 class="js-greetings">

// designating default values for local storage
const USER = "currentUser",
  SHOWING_NAME = "showing";

// saving inputted name
function saveName(text) {
  localStorage.setItem(USER, text);
}

// utilizing paintGreetings and saveName
function handleSubmit(event) {
  event.preventDefault(); // preventing default behavior to disappear inputted text
  const currentValue = input.value; // designating inputted value
  paintGreetings(currentValue);
  saveName(currentValue);
}

// submitting the form of name
function askForName() {
  form.classList.add(SHOWING_NAME);
  form.addEventListener("submit", handleSubmit);
}

// decorating function for greetings text
function paintGreetings(text) {
  form.classList.remove(SHOWING_NAME); // hiding the input form for name
  greetings.classList.add(SHOWING_NAME);
  greetings.innerText = `Hello ${text}`;
}

// Chrome Application tab: storing information as local storage to keep info even if you refresh the page
function loadName() {
  // get item from local storage
  const currentUser = localStorage.getItem(USER);
  if (currentUser === null) {
    //  when user information does not exist, get his/her name
    askForName();
  } else {
    //  when user information present
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
