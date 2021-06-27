import SEO from "components/atoms/SEO";
import React from "react";
import styles from "./Homepage.module.scss";
import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import CityInput from "components/atoms/CityInput";
import Footer from "components/organisms/Footer";

export interface IMainPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const Homepage: React.FC<IMainPageProps & ICommonPageProps> = ({
  weather,
  cityName,
  weatherInImportantCities,
}) => (
  <div className={styles.container}>
    <SEO cityName={cityName} />

    <main className={styles.main}>
      {weather ? (
        <CurrentCityWeather weather={weather} />
      ) : (
        "We cant understand were are you from. Please, select exact city from the list"
      )}
      <CityInput />
    </main>
    <Footer importantCityWeathers={weatherInImportantCities} />
  </div>
);

export default Homepage;
