import React, { ChangeEvent, useState } from "react";
import styles from "./CityInput.module.scss";
import cn from "classnames";

interface ICityInputProps {
  className?: string;
}

const CityInput: React.FC<ICityInputProps> = ({ className }) => {
  const [cityValue, setCityValue] = useState("Miami");

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setCityValue(e.target.value);

  return (
    <form action={`/${cityValue}`} className={cn(className, styles.cityInput)}>
      <input
        onChange={onChangeHandle}
        title="Please type city name"
        value={cityValue}
      />
      <button type="submit">See weather</button>
    </form>
  );
};

export default CityInput;
