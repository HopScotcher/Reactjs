import React from "react";
import styles from "./MainWeather.module.css";

export default function MainWeather({ data }) {
  const getIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };
  return (
    <div>
      <div className={styles.imgContainer}>
        <img
          src={getIcon(data.weather[0].icon)}
          alt="weather icon"
          className={styles.icon}
        />
        <div className={styles.mainWeather}>
          <span className={styles.mainTemp}>
            {parseInt(data.main.temp)} °C{" "}
          </span>
          <span className={styles.description}>
            {data.weather[0].description}
          </span>
        </div>
      </div>

      <div className={styles.detailsParent}>
        <div className={styles.details}>
          <ul>
            <li>
              <span>{data.wind.speed} km/h</span>
              <span>Wind speed</span>
            </li>
            <li>
              <span>{data.main.pressure}</span>
              <span>Pressure</span>
            </li>
          </ul>
        </div>

        <div className={styles.details}>
          <ul>
            <li>
              <span>{data.main.humidity}</span>
              <span>Humidity</span>
            </li>

            <li>
              <span>{data.visibility} m</span>
              <span>Visibilty</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
