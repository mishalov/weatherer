import getMainPageInitialProps from "../src/initialProps/getMainPageInitialProps";
import styles from "../styles/Home.module.css";
import withCommonProps from "initialProps/utils/withCommonProps";
import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import NotFound from "components/atoms/NotFound";
import Footer from "components/organisms/Footer";
import SEO from "components/atoms/SEO";
import getByCityInitialProps from "initialProps/getByCityInitialProps";

export interface IByCityPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const ByCityPage: React.FC<IByCityPageProps & ICommonPageProps> = ({
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

export const getServerSideProps = withCommonProps(getByCityInitialProps);

export default ByCityPage;
