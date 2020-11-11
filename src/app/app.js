import { renderCurrentWeather } from './renderCurrentWeather/renderCurrentWeather';

const app = async () => {
  await renderCurrentWeather();
  const button = document.getElementById('changeLocationButton');
  button.addEventListener('click', renderCurrentWeather);
};

window.addEventListener('load', app);
