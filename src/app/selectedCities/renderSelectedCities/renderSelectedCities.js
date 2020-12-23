import { getSelectedCitiesFromLocalStorage } from '../../../models/selectedCities.model';
import { getCityWeatherNode } from '../../getCityWeatherNode/getCityWeatherNode';
import { setIsLoading } from '../../loader/loader';
import { deleteSelectedCity } from '../deleteSelectedCity/deleteSelectedCity';
import { setError } from '../../error/error';
import { serverApi } from '../../../api/serverApi';

export const renderSelectedCities = async () => {
  try {
    setIsLoading(true);
    const cities = getSelectedCitiesFromLocalStorage() || [];
    const list = document.getElementById("SelectedList");
    list.querySelectorAll('.SavedCity').forEach((node) => node.remove());
    await cities.forEach(async (name) => {
      try {
        const weather = await serverApi.getWeatherByCityName(name);
        list.append(getCityWeatherNode({ weather, onButtonClick: deleteSelectedCity }));
      } catch (e) {
        setError();
      }
    });
    setIsLoading(false);
  } catch (e) {
    setIsLoading(false);
    setError();
  }
};
