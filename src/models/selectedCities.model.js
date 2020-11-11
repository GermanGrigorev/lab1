export const LOCAL_STORAGE_SELECTED_CITIES_KEY = 'LOCAL_STORAGE_SELECTED_CITIES_KEY';

export const saveSelectedCitiesToLocalStorage = (cities) => {
  localStorage.setItem(LOCAL_STORAGE_SELECTED_CITIES_KEY, JSON.stringify(cities));
};
export const getSelectedCitiesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_CITIES_KEY));
};
