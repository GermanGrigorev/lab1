const APP_ID = '4f9daa6adb52684f45d6a42b2a313564';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

function url(path) {
  return `${BASE_URL}${path}&appid=${APP_ID}&units=metric&lang=ru`;
}

export const openWeatherApi = {
  async getWeatherByCityName(cityName) {
    const response = await fetch(url(`weather?q=${cityName}`));
    return response.json();
  },
  async getWeatherByCoordinates({ latitude, longitude }) {
    const response = await fetch(url(`weather?lat=${latitude}&lon=${longitude}`));
    return response.json();
  },
};
