import React from "react";
import styles from "./CurrentCityWeather.module.scss";
import Image from "next/image";
import buildWeatherIconUrl from "utils/buildWeatherIconUrl";
import TemperatureLabel from "components/atoms/TemperatureLabel";
import cn from "classnames";

interface ICurrentCityWeatherProps {
  weather: IWeather;
}

const CurrentCityWeather: React.FC<ICurrentCityWeatherProps> = ({
  weather,
}) => {
  const { weather: weatherInfo } = weather;
  return (
    <article className={styles.currentWeather}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{weather.name}: </h1>
        <h2 className={styles.description}>
          {weatherInfo.summary.description}
        </h2>
      </div>

      <div className={cn(styles.temperature, styles.temperature_actual)}>
        <div className={styles.temperature_label}>actual</div>
        <TemperatureLabel value={weatherInfo.temperature.actual} sign="°C" />
      </div>

      <div className={cn(styles.temperature, styles.temperature_feelsLike)}>
        <div className={styles.temperature_label}>feels like</div>
        <TemperatureLabel value={weatherInfo.temperature.feelsLike} sign="°C" />
      </div>

      <div className={styles.icon_container}>
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

export default CurrentCityWeather;
