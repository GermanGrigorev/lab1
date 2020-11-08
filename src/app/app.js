import { openWeatherApi } from '../api/openWeatherApi';
import { DEFAULT_CITY } from '../models/app.model';
import { setIsLoading } from './loader/loader';
import { getWeatherDetailsTag } from './weatherDetails/weatherDetails';

const getCurrentWeather = async () => {
  let currentWeather;
  setIsLoading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      currentWeather = await openWeatherApi.getWeatherByCoordinates(position.coords);
      const tag = getWeatherDetailsTag(currentWeather);
      document.getElementById("current").append(tag);
    });
  } else {
    currentWeather = await openWeatherApi.getWeatherByCityName(DEFAULT_CITY);
  }
  setIsLoading(false);
  return currentWeather;
};

const app = async () => {
  await getCurrentWeather();
};

window.addEventListener('load', app);
