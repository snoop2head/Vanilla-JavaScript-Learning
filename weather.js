const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleSuccess(position) {
  console.log(position);
  //   making coordniate object
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude,
    // longitude: longitude,
    latitude,
    longitude,
  };
  //   saving coordinate object
  saveCoords(coordsObj);
}

function handleError() {
  console.log("Can't acess geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function loadXYCoord() {
  // saving on local storage
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //   get weather
  }
}

function init() {
  loadXYCoord();
}

init();
