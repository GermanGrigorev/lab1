import { CityTypes, DEFAULT_CITY } from '../../models/app.model';
import { getCityWeatherNode } from '../getCityWeatherNode/getCityWeatherNode';
import { setIsLoading } from '../loader/loader';
import { openWeatherApi } from '../../api/openWeatherApi';

const renderDefaultCurrentWeather = async () => {
  const currentWeather = await openWeatherApi.getWeatherByCityName(DEFAULT_CITY);
  const tag = getCityWeatherNode(currentWeather, CityTypes.current);
  const current = document.getElementById("current");
  if (current) current.remove();
  document.getElementById("container").prepend(tag);
};

export const renderCurrentWeather = async () => {
  setIsLoading(true);
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(async (position) => {
      const currentWeather = await openWeatherApi.getWeatherByCoordinates(position.coords);
      const tag = getCityWeatherNode(currentWeather, CityTypes.current);
      const current = document.getElementById("current");
      if (current) current.remove();
      document.getElementById("container").prepend(tag);
    }, renderDefaultCurrentWeather);
  } else {
    await renderDefaultCurrentWeather();
  }
  setTimeout(() => setIsLoading(false), 1000);
};
