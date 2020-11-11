import { CityTypes, DEFAULT_CITY } from '../../models/app.model';
import { getCityWeatherNode } from '../getCityWeatherNode/getCityWeatherNode';
import { setIsLoading } from '../loader/loader';
import { openWeatherApi } from '../../api/openWeatherApi';

const renderDefaultCurrentWeather = async () => {
  const currentWeather = await openWeatherApi.getWeatherByCityName(DEFAULT_CITY);
  const tag = getCityWeatherNode(currentWeather, CityTypes.current);
  document.getElementById("container").prepend(tag);
};

export const renderCurrentWeather = async () => {
  let currentWeather;
  setIsLoading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      currentWeather = await openWeatherApi.getWeatherByCoordinates(position.coords);
      const tag = getCityWeatherNode(currentWeather, CityTypes.current);
      document.getElementById("container").prepend(tag);
    }, renderDefaultCurrentWeather);
  } else {
    await renderDefaultCurrentWeather();
  }
  setIsLoading(false);
};
