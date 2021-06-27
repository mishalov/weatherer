import React from "react";

import styles from "../styles/Home.module.css";
import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import NotFound from "components/atoms/NotFound";
import Footer from "components/organisms/Footer";
import SEO from "components/atoms/SEO";

export interface IByCityPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const ByCity: React.FC<IByCityPageProps & ICommonPageProps> = ({
  weather,
  cityName,
  weatherInImportantCities,
}) => {
  return (
    <div className={styles.container}>
      <SEO cityName={cityName} />

      <main className={styles.main}>
        {weather ? <CurrentCityWeather weather={weather} /> : <NotFound />}
      </main>

      <Footer importantCityWeathers={weatherInImportantCities} />
    </div>
  );
};

export default ByCity;
