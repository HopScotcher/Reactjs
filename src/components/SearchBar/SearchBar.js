import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onDataChange, locationValue }) {
  const [value, setValue] = useState(locationValue);

  const handleChange = (e) => {
    const enteredLocation = e.target.value;
    setValue(enteredLocation);
  };

  const submitChange = (e) => {
    e.preventDefault();
    onDataChange(value);
  };

  return (
    <form onSubmit={submitChange} className={styles.formParent}>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder="Enter a city to search "
        onChange={handleChange}
      />

      <button type="submit" className={styles.btn}>
        Search
      </button>

   </form>
  );
}
