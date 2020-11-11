import {
  getSelectedCitiesFromLocalStorage,
  saveSelectedCitiesToLocalStorage
} from '../../../models/selectedCities.model';
import { openWeatherApi } from '../../../api/openWeatherApi';
import { getCityWeatherNode } from '../../getCityWeatherNode/getCityWeatherNode';
import { deleteSelectedCity } from '../deleteSelectedCity/deleteSelectedCity';

export const addSelectedCity = async (cityName) => {
  const cities = getSelectedCitiesFromLocalStorage() || [];
  if (!cities.includes(cityName)) {
    const weather = await openWeatherApi.getWeatherByCityName(cityName);
    if (weather.name && !cities.includes(weather.name)) {
      saveSelectedCitiesToLocalStorage([...cities, weather.name]);
      const list = document.getElementById("SelectedList");
      list.append(getCityWeatherNode({ weather, onButtonClick: deleteSelectedCity }));
    }
  }
};
