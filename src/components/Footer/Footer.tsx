import WeatherCard from "components/WeatherCard";
import React from "react";

interface IFooterProps {
  importantCityWeathers: IWeather[];
}

const Footer: React.FC<IFooterProps> = ({ importantCityWeathers }) => {
  return (
    <footer>
      {importantCityWeathers.map((weather) => (
        <WeatherCard weather={weather} key={weather.id} />
      ))}
    </footer>
  );
};

export default Footer;
