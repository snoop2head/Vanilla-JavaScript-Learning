const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.png`;
  // refer to index.css for background image
  image.classList.add("backgroundImage");
  body.prepend(image);
}

function genRandom() {
  // Math class, number between 0 and 2
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
