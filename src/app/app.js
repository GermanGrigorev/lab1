import { renderCurrentWeather } from './renderCurrentWeather/renderCurrentWeather';

const app = async () => {
  await renderCurrentWeather();
};

window.addEventListener('load', app);
