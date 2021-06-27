import getMainPageInitialProps from "../src/initialProps/getMainPageInitialProps";
import styles from "../styles/Home.module.css";
import withCommonProps from "initialProps/utils/withCommonProps";
import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import Footer from "components/organisms/Footer";
import SEO from "components/atoms/SEO";
import CityInput from "components/atoms/CityInput";

export interface IMainPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const MainPage: React.FC<IMainPageProps & ICommonPageProps> = ({
  weather,
  cityName,
  weatherInImportantCities,
}) => {
  return (
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
};

export const getServerSideProps = withCommonProps(getMainPageInitialProps);

export default MainPage;
