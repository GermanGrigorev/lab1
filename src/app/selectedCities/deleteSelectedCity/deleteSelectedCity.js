import {
  getSelectedCitiesFromLocalStorage,
  saveSelectedCitiesToLocalStorage
} from '../../../models/selectedCities.model';

export const deleteSelectedCity = async (cityName) => {
  const cities = getSelectedCitiesFromLocalStorage() || [];
  if (cities.includes(cityName)) {
    saveSelectedCitiesToLocalStorage(cities.filter(city => city !== cityName));
    const ul = document.getElementById("SelectedList");
    const list = ul.querySelectorAll('.SavedCity');

    console.log (list.values());
    const cityNode = Object.values(list).find( (node) => {
      const title = node.querySelector('.SavedCity-Title');
      return title.textContent === cityName;
    });
    cityNode.remove();
  }
};
