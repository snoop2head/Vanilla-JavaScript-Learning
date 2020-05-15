const weather = document.querySelector(".js-weather");

// API Key location: https://home.openweathermap.org/api_keys
const API_KEY = "";
const COORDS = "coords";

// API documentation: https://openweathermap.org/current
function getWeather(latitude, longitude) {
  // wait for fetch and then get response
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      // console.log(response.json());
      return response.json();
    })
    .then(function (json) {
      //   console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

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
  getWeather(latitude, longitude);
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
    // load saved coordnates from local storage
    const parseCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    const weatherInfo = getWeather(parseCoords.latitude, parseCoords.longitude);
    console.log(weatherInfo);
  }
}

function init() {
  loadXYCoord();
}

init();
