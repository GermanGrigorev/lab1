import { renderCurrentWeather } from './renderCurrentWeather/renderCurrentWeather';
import { renderSelectedCities } from './selectedCities/renderSelectedCities/renderSelectedCities';
import { addSelectedCity } from './selectedCities/addSelectedCity/addSelectedCity';
import { setIsLoading } from './loader/loader';

const handleAddNewCityFormSubmit = (e) => {
  e.preventDefault();
  if (e?.target[0]?.value) {
    addSelectedCity(e.target[0].value);
    e.target[0].value = '';
  }
};

const app = async () => {
  setIsLoading(true);
  await renderCurrentWeather();
  await renderSelectedCities();
  setIsLoading(false);
  const changeLocationButton = document.getElementById('changeLocationButton');
  changeLocationButton.addEventListener('click', renderCurrentWeather);
  const addNewCityForm = document.getElementById('addNewCityForm');
  addNewCityForm.addEventListener('submit', handleAddNewCityFormSubmit)
};

window.addEventListener('load', app);
