import React from 'react';
import './main.scss'

function App() {
  return (
    <>
      <header className="Header">
        <h1 className="Header-Title">Погода здесь</h1>
        <button className="ChangeLocationButton">Обновить геолокацию</button>
      </header>
      <main>
        <section className="Current">
          <div>
            <h2 className="Current-Title">Saint Petersburg</h2>
            <img className="Current-WeatherIcon"/>
            <span className="Current-Temperature">8°C</span>
          </div>
          <ul className="Current-Details WeatherDetails">
            <li className="WeatherDetails-Item">
              <span className="WeatherDetails-ItemTitle">Ветер</span>
              <span className="WeatherDetails-ItemValue">Moderate breeze, 6.0 m/s, North-northwest</span>
            </li>
            <li className="WeatherDetails-Item">
              <span className="WeatherDetails-ItemTitle">Облачность</span>
              <span className="WeatherDetails-ItemValue">Broken clouds</span>
            </li>
            <li className="WeatherDetails-Item">
              <span className="WeatherDetails-ItemTitle">Давление</span>
              <span className="WeatherDetails-ItemValue">1013 hpa</span>
            </li>
            <li className="WeatherDetails-Item">
              <span className="WeatherDetails-ItemTitle">Влажность</span>
              <span className="WeatherDetails-ItemValue">52 %</span>
            </li>
            <li className="WeatherDetails-Item">
              <span className="WeatherDetails-ItemTitle">Координаты</span>
              <span className="WeatherDetails-ItemValue">[59.88, 30.42]</span>
            </li>
          </ul>
        </section>
        <section className="Selected">
          <h2 className="Selected-Title">Избранное</h2>
          <div className="AddNewCity">
            <input className="AddNewCity-Input"/>
            <button className="AddNewCity-Button"></button>
          </div>
          <ul className="Selected-List">
            <li className="CityWeather">
              <div className="CityWeather-Header">
                <h3 className="CityWeather-Title">Moscow</h3>
                <span className="CityWeather-Temperature">5°C</span>
                <img className="CityWeather-WeatherIcon"/>
                <button className="CityWeather-Delete"></button>
              </div>
              <ul className="CityWeather-Details WeatherDetails">
                <li className="WeatherDetails-Item">
                  <span className="WeatherDetails-ItemTitle">Ветер</span>
                  <span className="WeatherDetails-ItemValue">Moderate breeze, 6.0 m/s, North-northwest</span>
                </li>
                <li className="WeatherDetails-Item">
                  <span className="WeatherDetails-ItemTitle">Облачность</span>
                  <span className="WeatherDetails-ItemValue">Broken clouds</span>
                </li>
                <li className="WeatherDetails-Item">
                  <span className="WeatherDetails-ItemTitle">Давление</span>
                  <span className="WeatherDetails-ItemValue">1013 hpa</span>
                </li>
                <li className="WeatherDetails-Item">
                  <span className="WeatherDetails-ItemTitle">Влажность</span>
                  <span className="WeatherDetails-ItemValue">52 %</span>
                </li>
                <li className="WeatherDetails-Item">
                  <span className="WeatherDetails-ItemTitle">Координаты</span>
                  <span className="WeatherDetails-ItemValue">[59.88, 30.42]</span>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      </>
  );
}

export default App;
