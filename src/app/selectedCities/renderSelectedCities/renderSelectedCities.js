import { getSelectedCitiesFromLocalStorage } from '../../../models/selectedCities.model';
import { getCityWeatherNode } from '../../getCityWeatherNode/getCityWeatherNode';
import { openWeatherApi } from '../../../api/openWeatherApi';
import { setIsLoading } from '../../loader/loader';
import { deleteSelectedCity } from '../deleteSelectedCity/deleteSelectedCity';
import { setError } from '../../error/error';

export const renderSelectedCities = async () => {
  try {
    setIsLoading(true);
    const cities = getSelectedCitiesFromLocalStorage() || [];
    const list = document.getElementById("SelectedList");
    list.querySelectorAll('.SavedCity').forEach((node) => node.remove());
    await cities.forEach(async (name) => {
      const weather = await openWeatherApi.getWeatherByCityName(name);
      list.append(getCityWeatherNode({ weather, onButtonClick: deleteSelectedCity }));
    });
    setIsLoading(false);
  } catch (e) {
    setIsLoading(false);
    setError();
  }
};
