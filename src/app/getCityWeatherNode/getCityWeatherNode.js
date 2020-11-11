import { CityTypes, getWeatherIconUrl } from '../../models/app.model';
import { getWeatherDetailsTag } from './getWeatherDetailsNode/getWeatherDetailsNode';

const Id = {
  [CityTypes.current]: 'current',
  [CityTypes.saved]: 'savedCity',
};

export const getCityWeatherNode = (weather, type = CityTypes.saved) => {
  const id = Id[type];
  const template = document.getElementById(`${id}Template`);
  const instance = document.importNode(template.content, true);
  const title = instance.querySelector(`#${id}Title`);
  const weatherIcon = instance.querySelector(`#${id}WeatherIcon`);
  const temperature = instance.querySelector(`#${id}Temperature`);

  title.textContent = weather.name;
  weatherIcon.setAttribute('src', getWeatherIconUrl(weather.weather[0].icon));
  weatherIcon.setAttribute('alt', getWeatherIconUrl(weather.weather[0].main));
  temperature.textContent = `${weather.main.temp} °C`;

  const node = instance.querySelector(`#${id}`);
  node.append(getWeatherDetailsTag({ weather, className: CityTypes.current && 'Current-Details' }));

  return instance;
};
