import { getCityWeatherNode } from '../../getCityWeatherNode/getCityWeatherNode';
import { deleteSelectedCity } from '../deleteSelectedCity/deleteSelectedCity';
import { setError } from '../../error/error';
import { setIsLoading } from '../../loader/loader';
import { serverApi } from '../../../api/serverApi';

export const addSelectedCity = async (cityName) => {
  setIsLoading(true);
  const cities = await serverApi.getFavourites();

  if (!cities.find(({name}) => name === cityName)) {
    try {
      const weather = await serverApi.getWeatherByCityName(cityName);
      if (!weather.error && weather.name && !cities.find(({name}) => name === weather.name)) {
        await serverApi.postFavourites(weather.name);
        const list = document.getElementById("SelectedList");
        list.append(getCityWeatherNode({ weather, onButtonClick: deleteSelectedCity }));
      } else {
        setError(weather.name ? "Город с таким именем уже есть" : "Город не найден");
      }
    } catch (e) {
      setError()
    }
  } else {
    setError("Город с таким именем уже есть");
  }
  setIsLoading(false);
};
