import React from "react";

import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import NotFound from "components/atoms/NotFound";
import BasicTemplate from "components/templates/BasicTemplate";
import Link from "next/link";
import styles from "./ByCity.module.scss";

export interface IByCityPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const ByCity: React.FC<IByCityPageProps & ICommonPageProps> = (props) => (
  <BasicTemplate {...props}>
    {props.weather ? (
      <CurrentCityWeather weather={props.weather} />
    ) : (
      <NotFound />
    )}
    <div className={styles.back}>
      <Link href="/">
        <a>← Back to mainpage</a>
      </Link>
    </div>
  </BasicTemplate>
);

export default ByCity;
