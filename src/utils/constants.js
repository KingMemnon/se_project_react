export const weatherTypes = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/night/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "foggy",
    url: new URL("../images/day/foggy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../images/night/foggy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../images/day/rainy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../images/night/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../images/day/snowy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL("../images/night/snowy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../images/day/stormy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL("../images/night/stormy.png", import.meta.url).href,
  },
];

export const defaultWeatherTypes = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 51.78358,
  longitude: 11.14208,
};

export const APIkey = "eb600c1f6394dae0b257daa6385dbbe7";
