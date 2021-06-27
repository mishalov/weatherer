import SEO from "components/atoms/SEO";
import React from "react";
import styles from "./BasicTemplate.module.scss";
import Footer from "components/organisms/Footer";

interface ICommonProps {
  cityName: string | null;
  weatherInImportantCities: IWeather[];
}

const BasicTemplate: React.FC<ICommonProps> = ({
  cityName,
  weatherInImportantCities,
  children,
}) => (
  <div className={styles.container}>
    <SEO cityName={cityName} />

    <main className={styles.main}>{children}</main>

    <Footer importantCityWeathers={weatherInImportantCities} />
  </div>
);

export default BasicTemplate;
