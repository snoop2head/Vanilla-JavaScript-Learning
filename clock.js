// selecting class in html document
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

// accessing javascript built-in object Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //  time formatting as 12:12 is okay, but 12:9 is not okay -> setup to 12:09
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// just like python init
function init() {
  // run the clock function
  getTime();
  // run the clock function every 1000 microseconds
  setInterval(getTime, 1000);
}

init();
