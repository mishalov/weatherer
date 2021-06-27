import React from "react";
import styles from "./CurrentCityWeather.module.scss";
import Image from "next/image";
import buildWeatherIconUrl from "utils/buildWeatherIconUrl";
import TemperatureLabel from "components/TemperatureLabel";

interface ICurrentCityWeatherProps {
  weather: IWeather;
}

const CurrentCityWeather: React.FC<ICurrentCityWeatherProps> = ({
  weather,
}) => {
  const { weather: weatherInfo } = weather;
  return (
    <article className={styles.currentWeather}>
      <h1 className={styles.title}>{weather.name}: </h1>
      <h2 className={styles.description}>{weatherInfo.summary.description}</h2>
      <div className={styles.icon_container}>
        <Image
          src={buildWeatherIconUrl(weatherInfo.summary.icon)}
          width="64px"
          height="64px"
          alt={weatherInfo.summary.title}
        />
      </div>
      <TemperatureLabel
        value={weatherInfo.temperature.actual}
        sign="°C"
        className={styles.temperature}
      />
    </article>
  );
};

export default CurrentCityWeather;
