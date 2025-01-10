export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const processWeatherData = (data) => {
  const result = {
    city: data.name,
    temp: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
    type: getWeatherType(data.main.temp),
    condition: data.weather[0].main.toLowerCase(),
    isDay: isDay(data.sys, Date.now()),
  };
  // console.log("processWeatherData", result);
  // const result = {};
  // result.city = data.name;
  // result.temp = { F: data.main.temp };
  // result.type = getWeatherType(result.temp.F);
  // result.condition = data.weather[0].main.toLowerCase();
  // result.isDay = isDay(data.sys, Date.now());
  // const weatherData = {
  //   temperature: {
  //     F: Math.round(data.main.temp),
  //     C: Math.round(((data.main.temp - 32) * 5) / 9),
  //   },
  // };
  return result;
};

const isDay = ({ sunrise, sunset }, currentTime) => {
  return sunrise * 1000 < currentTime && currentTime < sunset * 1000;
};

const getWeatherType = (temp) => {
  if (temp > 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);
