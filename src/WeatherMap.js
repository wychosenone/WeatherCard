import { Directions } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useContext } from "react";
import PopularCityWeather from "./PopularCityWeather";
import { WeatherCard } from "./WeatherCard";
import { WeatherContext } from "./WeatherContext";
import { WeatherSearch } from "./WeatherSearch";

export default function WeatherMap() {
    const {city} = useContext(WeatherContext)
    return (
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <WeatherSearch />
        {city? <WeatherCard /> :
        <PopularCityWeather /> }
        
        </Box>
      
    )




}