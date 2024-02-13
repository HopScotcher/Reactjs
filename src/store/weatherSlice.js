import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {

  },
  reducers:{
    displayWeather: () => {

    },

    fetchWeatherData: () => {
        
    },

  }
});


export default  weatherSlice.reducer;

export const {displayWeather, fetchWeatherData} = weatherSlice.actions;
