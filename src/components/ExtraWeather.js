import React from "react";

export default function ExtraWeather({ data }) {
  return (
    <>
      {data ? (
        <div>
          <p>wind gust : {data.wind.gust}</p>
          <p>Min temperature: {data.main.temp_min} degrees</p>
          <p>Max temperature: {data.main.temp_max} degrees </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
