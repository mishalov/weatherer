import getMainPageInitialProps from "../src/initialProps/getMainPageInitialProps";
import styles from "../styles/Home.module.css";
import withCommonProps from "utils/withCommonProps";
import CurrentCityWeather from "components/CurrentCityWeather";
import Footer from "components/Footer";
import SEO from "components/SEO";

interface IByCityPageProps {
  weather: IWeather;
  city: ICity | null;
  weatherInImportantCities: IWeather[];
}

const ByCityPage: React.FC<IByCityPageProps> = ({
  weather,
  city,
  weatherInImportantCities,
}) => {
  return (
    <div className={styles.container}>
      <SEO city={city} />

      <main className={styles.main}>
        <CurrentCityWeather weather={weather} />
      </main>

      <Footer importantCityWeathers={weatherInImportantCities} />
    </div>
  );
};

export const getServerSideProps = withCommonProps(getMainPageInitialProps);

export default ByCityPage;
