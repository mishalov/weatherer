import React from "react";
import styles from "./WeatherCard.module.scss";
import Image from "next/image";
import buildWeatherIconUrl from "utils/buildWeatherIconUrl";
import TemperatureLabel from "components/atoms/TemperatureLabel";
import Link from "next/link";

interface IWeatherCardProps {
  weather: IWeather;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ weather }) => {
  const { weather: weatherInfo } = weather;
  return (
    <Link href={`/${weather.name}`}>
      <a>
        <article className={styles.card}>
          <div>
            <div className={styles.summary}>
              {weatherInfo.summary.description}
            </div>
            <TemperatureLabel
              value={weatherInfo.temperature.actual}
              sign="°C"
              className={styles.temperature}
            />
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
      </a>
    </Link>
  );
};

export default WeatherCard;
