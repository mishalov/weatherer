import getMainPageInitialProps from "../src/initialProps/getMainPageInitialProps";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import withCommonProps from "utils/withCommonProps";
import WeatherCard from "components/WeatherCard";

interface IHomeProps {
  weather: IWeather;
  weatherInImportantCities: IWeather[];
}

const Home: React.FC<IHomeProps> = ({ weather }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Current Weather</h1>
        <WeatherCard weather={weather} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps = withCommonProps(getMainPageInitialProps);

export default Home;
