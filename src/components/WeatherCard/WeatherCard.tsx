import React from "react";
import styles from "./WeatherCard.module.scss";
import Image from "next/image";
import buildWeatherIconUrl from "utils/buildWeatherIconUrl";

interface IWeatherCardProps {
  weather: IWeather;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ weather }) => {
  const { weather: weatherInfo } = weather;
  return (
    <article className={styles.card}>
      <div>
        <div className={styles.summary}>{weatherInfo.summary.description}</div>
        <div className={styles.temperature}>
          <div className={styles.temperature_value}>
            {Math.trunc(weatherInfo.temperature.actual)}
          </div>
          <div className={styles.temperature_postfix}>°C</div>
        </div>
        <div className={styles.location}>
          <h2>
            {weather.name}, {weather.country}
          </h2>
        </div>
      </div>
      <div className={styles.illustration}>
        <Image
          src={buildWeatherIconUrl(weatherInfo.summary.icon)}
          width="64px"
          height="64px"
          alt={weatherInfo.summary.title}
        />
      </div>
    </article>
  );
};

export default WeatherCard;
