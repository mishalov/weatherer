import WeatherCard from "components/molecules/WeatherCard";
import styles from "./Footer.module.scss";
import React from "react";

interface IFooterProps {
  importantCityWeathers: IWeather[];
}

const Footer: React.FC<IFooterProps> = ({ importantCityWeathers }) => {
  return (
    <footer className={styles.footer}>
      {importantCityWeathers.map((weather) => (
        <WeatherCard weather={weather} key={weather.id} />
      ))}
    </footer>
  );
};

export default Footer;
