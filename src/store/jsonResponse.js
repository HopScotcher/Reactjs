const jsondata = {
  coord: { lon: 36.9476, lat: -0.4201 },
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: 287.44,
    feels_like: 287.14,
    temp_min: 287.44,
    temp_max: 287.44,
    pressure: 1021,
    humidity: 85,
    sea_level: 1021,
    grnd_level: 827,
  },
  visibility: 10000,
  wind: { speed: 1.1, deg: 291, gust: 1.58 },
  clouds: { all: 69 },
  dt: 1707163098,
  sys: { country: "KE", sunrise: 1707104532, sunset: 1707148205 },
  timezone: 10800,
  id: 182701,
  name: "Nyeri",
  cod: 200,
};

const readable = jsondata.json();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=nyeri&appid=2a41538804ba3403d5c7475522dce59c&units=metric`).then(response => response.json()).then(
  data => console.log(data.weather.icon)
)


const other = `https://api.openweathermap.org/data/2.5/weather?q=nyeri&appid=2a41538804ba3403d5c7475522dce59c&units=metric`;

