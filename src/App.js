import "./index.css";
import WeatherProvider from "./WeatherContext";
import WeatherMap from "./WeatherMap";


export default function App() {


  return (
    <WeatherProvider>
    <div className="App">
      <WeatherMap
    
      />
    </div>
    </WeatherProvider>
  );
}
