export const CityTypes = {
  current: 'current',
  saved: 'saved',
};

export function getWeatherIconUrl(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}
