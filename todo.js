// refer to ./index.html for variable designation for html element
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

// list of todos as empty array
let toDos = [];

// creates html elements, saves todo list in local storage as string
function interactToDo(text) {
  // creating list element in HTML with createElement()
  const li = document.createElement("li");
  // deleting button
  const delBtn = document.createElement("button");
  // creating span element
  const span = document.createElement("span");
  // new id to save as todo object
  const newId = toDos.length + 1;
  // designate values as innerText and add event listener
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  // putting delete button and span inside of list html element
  li.appendChild(delBtn);
  li.appendChild(span);
  // designating id for each list element
  li.id = newId;
  toDoList.appendChild(li);
  // todo object structure
  const toDoObj = {
    text: text,
    id: newId,
  };
  // adding element to array as push()
  toDos.push(toDoObj);
  // saving toDos on local storage using saveToDos()
  saveToDos();
}

// saving toDos on local storage
function saveToDos() {
  // Json.stringify to make javascript object into string
  // Javascript object is like a cabinet: https://javascript.info/object
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

// loading saved todos in local storage, restore them using intereactToDo()
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    // parsing string object -> load and make it as javascript object
    const parsedToDos = JSON.parse(loadedToDos);
    // on each elements in parsed array, it performs interactToDos()
    parsedToDos.forEach(function (toDo) {
      // commence interactToDo() on toDo array's element's text
      interactToDo(toDo.text);
    });
  }
}

// deleting todos on click button
function deleteToDo(event) {
  // logging which button is clicked
  // console.dir(event)
  // console.dir(event.target)
  // console.log(event.target.parentNode);

  const btn = event.target;
  const li = btn.parentNode;
  // removing element: https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  toDoList.removeChild(li);
  // filter() goes through every items in array -> make new array with items that returns true
  const filterToDos = toDos.filter(function (toDo) {
    // id of item that does not match to id of list item that is just clicked
    // parseInt turns str -> int
    // console.log(li.id);
    return toDo.id !== parseInt(li.id);
  });
  // console.log(filterToDos);
  // overwrite toDos as filtered to dos
  toDos = filterToDos;
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  interactToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
