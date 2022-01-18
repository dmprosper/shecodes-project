///import "./styles.css";
//Feature 1
//display the current date and time using JavaScript: Tuesday 16:00
let currentTime = new Date();
function todaysDate(date) {
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDay = days[currentTime.getDay()];
  let currentDate = currentTime.getDate();
  let currentMonth = months[currentTime.getMonth()];
  let writeDate = `${currentDay}, ${currentDate} ${currentMonth}`;
  let updateDate = document.querySelector("#current-date");
  updateDate.innerHTML = writeDate;
}
todaysDate(currentTime);

function showTime(date) {
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let writeTime = `${currentHour}:${currentMinute}`;

  let updateTime = document.querySelector("#current-time");
  updateTime.innerHTML = writeTime;
}
showTime(currentTime);

function searchCity(event) {
  event.preventDefault();

  let input = document.querySelector("#city-search");
  let pickedCity = document.querySelector("#picked-city");
  let currentCity = document.querySelector("#current-city");
  pickedCity.innerHTML = input.value;
  currentCity.innerHTML = input.value;
  console.log(input.value);
  console.log(pickedCity, currentCity);
  let apikey = "91c95f27db0c846ef3538ff41d1b2cd7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`;

  function displayTemperature(response) {
    document.querySelector("#picked-city").innerHTML = response.data.name;
    document.querySelector("#current-temp").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  axios.get(apiUrl).then(displayTemperature);
}

let formCity = document.querySelector("#form-city");
formCity.addEventListener("submit", searchCity);
