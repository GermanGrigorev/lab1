
export const getWeatherDetailsTag = ({ weather, className}) => {
  const id = 'WeatherDetailsTemplate';
  const template = document.getElementById(`${id}`);
  const instance = document.importNode(template.content, true);
  const wind = instance.querySelector(`.${id}-Wind`);
  const clouds = instance.querySelector(`.${id}-Clouds`);
  const pressure = instance.querySelector(`.${id}-Pressure`);
  const humidity = instance.querySelector(`.${id}-Humidity`);
  const coordinates = instance.querySelector(`.${id}-Coordinates`);

  wind.textContent = `${weather.wind.speed} m/s`;
  clouds.textContent = `${weather.clouds.all} %`;
  pressure.textContent = `${weather.main.pressure} hpa`;
  humidity.textContent = `${weather.main.humidity} %`;
  coordinates.textContent = `[${weather.coord.lat}, ${weather.coord.lon}]`;

  instance.querySelector('.WeatherDetails').classList.add(className);
  return instance;
};
