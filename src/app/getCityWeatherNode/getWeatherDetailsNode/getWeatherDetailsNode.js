
export const getWeatherDetailsTag = (weather) => {
  const template = document.getElementById('weatherDetailsTemplate');
  const wind = template.content.querySelector('#weatherDetailsTemplate-wind');
  const clouds = template.content.querySelector('#weatherDetailsTemplate-clouds');
  const pressure = template.content.querySelector('#weatherDetailsTemplate-pressure');
  const humidity = template.content.querySelector('#weatherDetailsTemplate-humidity');
  const coordinates = template.content.querySelector('#weatherDetailsTemplate-coordinates');

  wind.textContent = `${weather.wind.speed} m/s`;
  clouds.textContent = `${weather.clouds.all} %`;
  pressure.textContent = `${weather.main.pressure} hpa`;
  humidity.textContent = `${weather.main.humidity} %`;
  coordinates.textContent = `[${weather.coord.lat}, ${weather.coord.lon}]`;

  return document.importNode(template.content, true);
};
