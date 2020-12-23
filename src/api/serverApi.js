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
  async getFavourites() {
    const response = await fetch(url('favourites'));
    return response.json();
  },
  async postFavourites(cityName) {
    const response = await fetch(url('favourites'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ name: cityName })
    });
    return response.json();
  },
  async deleteFavourites(cityName) {
    return await fetch(url('favourites'), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ name: cityName })
    });
  },
};
