import {
  getSelectedCitiesFromLocalStorage,
  saveSelectedCitiesToLocalStorage
} from '../../../models/selectedCities.model';
import { getCityWeatherNode } from '../../getCityWeatherNode/getCityWeatherNode';
import { deleteSelectedCity } from '../deleteSelectedCity/deleteSelectedCity';
import { setError } from '../../error/error';
import { setIsLoading } from '../../loader/loader';
import { serverApi } from '../../../api/serverApi';

export const addSelectedCity = async (cityName) => {
  const cities = getSelectedCitiesFromLocalStorage() || [];
  if (!cities.includes(cityName)) {
    try {
      setIsLoading(true);
      const weather = await serverApi.getWeatherByCityName(cityName);
      if (!weather.error && weather.name && !cities.includes(weather.name)) {
        saveSelectedCitiesToLocalStorage([...cities, weather.name]);
        const list = document.getElementById("SelectedList");
        list.append(getCityWeatherNode({ weather, onButtonClick: deleteSelectedCity }));
      } else {
        setError(weather.name ? "Город с таким именем уже есть" : "Город не найден");
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError()
    }
  } else {
    setError("Город с таким именем уже есть");
  }
};