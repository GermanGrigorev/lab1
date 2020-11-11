
export const getWeatherDetailsTag = ({ weather, className}) => {
  const id = 'weatherDetailsTemplate';
  const template = document.getElementById(`${id}`);
  const instance = document.importNode(template.content, true);
  const wind = instance.querySelector(`#${id}-wind`);
  const clouds = instance.querySelector(`#${id}-clouds`);
  const pressure = instance.querySelector(`#${id}-pressure`);
  const humidity = instance.querySelector(`#${id}-humidity`);
  const coordinates = instance.querySelector(`#${id}-coordinates`);

  wind.textContent = `${weather.wind.speed} m/s`;
  clouds.textContent = `${weather.clouds.all} %`;
  pressure.textContent = `${weather.main.pressure} hpa`;
  humidity.textContent = `${weather.main.humidity} %`;
  coordinates.textContent = `[${weather.coord.lat}, ${weather.coord.lon}]`;

  instance.querySelector('#weatherDetails').classList.add(className);
  return instance;
};
