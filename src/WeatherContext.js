import { createContext,useEffect,useState,useRef } from "react";



export const WeatherContext = createContext();
const apiKey = "600e7373b9dadfffca1aa7f3a1b36ccd"

export default function WeatherProvider({children}) {
    const popularCities = ["London", "New York", "Paris", "Tokyo", "Beijing", "Xi'An"];

    const [data, setData] = useState(null);
    const [city, setCity] = useState("");
    const timerRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [popularWeatherData, setPopularWeatherData] = useState([]);
  
    const fetchWeather = async (city) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setErrorMessage(null);
      } else {
        if (response.status === 404) {
          setErrorMessage("Invalid city.");
        } else if (response.status >= 500) {
          setErrorMessage("Server error.");
        }
        setData(null);
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          const requests = popularCities.map((city) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            )
          );
    
          try {
            const responses = await Promise.all(requests);
            const data = await Promise.all(responses.map((response) => response.json()));
            setPopularWeatherData(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);


  
    useEffect(() => {
      console.log(data);
      console.log(city);
      console.log(popularWeatherData)
    }, [data, city, popularWeatherData]);
  
    const handleInputChange = (e) => {
      const newCity = e.target.value;
      setCity(newCity);
  
  
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
  
      timerRef.current = setTimeout(() => {
        fetchWeather(newCity);
      }, 1000);
    };
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        fetchWeather(city);
      }
    };





    return (
        <WeatherContext.Provider
            value={{
                 fetchWeather,
                 data,
                 city,
                 handleInputChange,
                 handleKeyPress,
                 errorMessage,
                 popularWeatherData,

            }}>{children}</WeatherContext.Provider>




    )
}