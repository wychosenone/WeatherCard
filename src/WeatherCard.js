import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import * as React from 'react';
import { Card, CardAction, CardContent, CardMedia, Typography, Skeleton } from "@mui/material";

export const WeatherCard = () => {
  const {
    fetchWeather,
    data,
    city,
    handleInputChange,
    handleKeyPress,
    errorMessage,
  } = useContext(WeatherContext);

  return (
    <div className="container">
      {errorMessage && <p>{errorMessage}</p>}
      {!data ? (
        <Card sx={{ minWidth: 200, minHeight: 400, m: 2, p: 4, borderRadius: 10 }}>
          <Skeleton variant="rectangular" sx={{ width: "100%", height: 200 }} />
          <CardContent>
            <Skeleton variant="text" sx={{ width: "50%", marginBottom: 2 }} />
            <Skeleton variant="text" sx={{ width: "70%", marginBottom: 1 }} />
            <Skeleton variant="text" sx={{ width: "60%", marginBottom: 1 }} />
            <Skeleton variant="text" sx={{ width: "40%" }} />
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ minWidth: 200, minHeight: 400, m: 2, p: 4, borderRadius: 10, backgroundColor: "whitesmoke", boxShadow:3 }}>
          <Typography variant="h4">{city}</Typography>
          <CardMedia>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt="weather icon"
            />
          </CardMedia>
          <CardContent>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Temperature:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {(data.main.temp - 273.15).toFixed(2)}°C,{" "}
              {((data.main.temp - 273.15) * 1.8 + 32).toFixed(2)}°F
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Humidity:
            </Typography>
            <Typography variant="body1">{data.main.humidity}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Description:
            </Typography>
            <Typography variant="body1">{data.weather[0].description}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
