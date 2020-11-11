import { CityTypes, getWeatherIconUrl } from '../../models/app.model';
import { getWeatherDetailsTag } from './getWeatherDetailsNode/getWeatherDetailsNode';

const Id = {
  [CityTypes.current]: 'current',
  [CityTypes.saved]: 'savedCity',
};

export const getCityWeatherNode = (weather, type = CityTypes.saved) => {
  const id = Id[type];
  const template = document.getElementById(`${id}Template`);
  const title = template.content.querySelector(`#${id}Title`);
  const weatherIcon = template.content.querySelector(`#${id}WeatherIcon`);
  const temperature = template.content.querySelector(`#${id}Temperature`);

  title.textContent = weather.name;
  weatherIcon.setAttribute('src', getWeatherIconUrl(weather.weather[0].icon));
  weatherIcon.setAttribute('alt', getWeatherIconUrl(weather.weather[0].main));
  temperature.textContent = `${weather.main.temp} °C`;

  template.content.append(getWeatherDetailsTag(weather));

  return document.importNode(template.content, true);
};
