const BASE_URL = 'http://localhost:3000/';

function url(path) {
  return `${BASE_URL}${path}`;
}

export const serverApi = {
  async getWeatherByCityName(cityName) {
    const response = await fetch(url(`weather/city?q=${cityName}`));
    return response.json();
  },
  async getWeatherByCoordinates({ latitude, longitude }) {
    const response = await fetch(url(`weather/coordinates?lat=${latitude}&lon=${longitude}`));
    return response.json();
  },
};
