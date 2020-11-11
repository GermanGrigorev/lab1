import { CityTypes, getWeatherIconUrl } from '../../models/cityWeather.model';
import { getWeatherDetailsTag } from './getWeatherDetailsNode/getWeatherDetailsNode';

const Id = {
  [CityTypes.current]: 'Current',
  [CityTypes.saved]: 'SavedCity',
};

export const getCityWeatherNode = ({ weather, type = CityTypes.saved, onButtonClick }) => {
  const id = Id[type];
  const template = document.getElementById(`${id}Template`);
  const instance = document.importNode(template.content, true);
  const title = instance.querySelector(`.${id}-Title`);
  const weatherIcon = instance.querySelector(`.${id}-WeatherIcon`);
  const temperature = instance.querySelector(`.${id}-Temperature`);

  title.textContent = weather.name;
  weatherIcon.setAttribute('src', getWeatherIconUrl(weather.weather[0].icon));
  weatherIcon.setAttribute('alt', getWeatherIconUrl(weather.weather[0].main));
  temperature.textContent = `${weather.main.temp} °C`;

  const handleClick = () => {
    onButtonClick(weather.name);
  };
  const button = instance.querySelector(`.${id}-Button`);
  if (button) {
    button.addEventListener('click', handleClick);
  }

  const node = instance.querySelector(`.${id}`);
  node.append(getWeatherDetailsTag({ weather, className: CityTypes.current && 'Current-Details' }));

  return instance;
};
