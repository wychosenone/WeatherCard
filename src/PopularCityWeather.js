import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Skeleton,Box } from "@mui/material";

export default function PopularCityWeather() {
  const { popularWeatherData, errorMessage } = useContext(WeatherContext);

  return (
    <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', 
          alignItems: 'center',
          p: 1,
          m: 3,
          bgcolor: 'background.paper',
          boxSizing: 'border-box',
        }}
      >
      {errorMessage && <p>{errorMessage}</p>}
      {popularWeatherData && (
        popularWeatherData.map((data, index) => (
          <Card key={index} sx={{ minWidth: 200, minHeight: 400, m: 2, p: 4, borderRadius: 10, backgroundColor: "whitesmoke", boxShadow: 3 }}>
            <Typography variant="h4">{data.name}</Typography>
            <CardMedia>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon" />
            </CardMedia>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Temperature:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {(data.main.temp - 273.15).toFixed(2)}°C, {((data.main.temp - 273.15) * 1.8 + 32).toFixed(2)}°F
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
        ))
      )}
    </Box>
  );
}
