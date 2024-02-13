import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import MainWeather from "./Mainweather/MainWeather";
import styles from "../App.module.css";

export default function HomePage({ dataReceived, sendLocation }) {
  return (
    <>
      {dataReceived ? (
        <div>
          <div className={styles.SearchBar}>
            <SearchBar
              onDataChange={sendLocation}
              locationValue={dataReceived.name}
            />
          </div>

          <div className={styles.MainWeather}>
            <MainWeather data={dataReceived} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
