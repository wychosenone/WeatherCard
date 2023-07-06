import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


export const WeatherSearch = () => {
  const {
    fetchWeather,
    data,
    city,
    handleInputChange,
    handleKeyPress,
    errorMessage,
  } = useContext(WeatherContext);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Location"
        inputProps={{ "aria-label": "search location" }}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => fetchWeather(city)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
