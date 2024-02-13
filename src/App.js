import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import HomePage from "./components/Homepage";
import ExtraWeather from "./components/ExtraWeather";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Nairobi");
  // const location = "nyeri";
  const apikey = "2a41538804ba3403d5c7475522dce59c";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`
      );

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  const searchLocation = (receivedData) => {
    setLocation(receivedData);
    // fetchData();
  };

  return (
    <div className={styles.App}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/">
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/extra">
            {" "}
            More Details
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/extra" element={<ExtraWeather data={data} />} />
        <Route
          path="/"
          element={
            <HomePage dataReceived={data} sendLocation={searchLocation} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
