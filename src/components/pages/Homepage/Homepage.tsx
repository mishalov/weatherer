import React from "react";
import CurrentCityWeather from "components/molecules/CurrentCityWeather";
import BasicTemplate from "components/templates/BasicTemplate";
import CityInput from "components/molecules/CityInput";
import styles from "./Homepage.module.scss";

export interface IMainPageProps {
  weather: IWeather | null;
  cityName: string | null;
}

const Homepage: React.FC<IMainPageProps & ICommonPageProps> = (props) => (
  <BasicTemplate {...props}>
    {props.weather ? (
      <CurrentCityWeather weather={props.weather} />
    ) : (
      <div>
        We cant understand were are you from. Please, select exact city from the
        list
      </div>
    )}
    <h3 className={styles.disclaimer}>
      City obtained from your IP address, but if you want check weather in
      another - use form below :)
    </h3>
    <CityInput />
  </BasicTemplate>
);

export default Homepage;
