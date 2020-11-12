import { DEFAULT_CITY } from '../../models/currentCity.model';
import { getCityWeatherNode } from '../getCityWeatherNode/getCityWeatherNode';
import { setIsLoading } from '../loader/loader';
import { openWeatherApi } from '../../api/openWeatherApi';
import { CityTypes } from '../../models/cityWeather.model';
import { setError } from '../error/error';

const renderDefaultCurrentWeather = async () => {
  const currentWeather = await openWeatherApi.getWeatherByCityName(DEFAULT_CITY);
  const tag = getCityWeatherNode({ weather: currentWeather, type: CityTypes.current });
  const container = document.getElementById('container');
  const current = container.querySelector('.Current');
  if (current) current.remove();
  container.prepend(tag);
};

export const renderCurrentWeather = async () => {
  try {
    setIsLoading(true);
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const currentWeather = await openWeatherApi.getWeatherByCoordinates(position.coords);
          const tag = getCityWeatherNode({ weather: currentWeather, type: CityTypes.current });
          const container = document.getElementById('container');
          const current = container.querySelector('.Current');
          if (current) {
            current.remove();
          }
          container.prepend(tag);
        } catch (e) {
          setError();
        }
      }, renderDefaultCurrentWeather);
    } else {
      await renderDefaultCurrentWeather();
    }
    setTimeout(() => setIsLoading(false), 1000);
  } catch (e) {
    setIsLoading(false);
    setError();
  }
};
