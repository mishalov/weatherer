import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./CityInput.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

interface ICityInputProps {
  className?: string;
}

const CityInput: React.FC<ICityInputProps> = ({ className }) => {
  const [cityValue, setCityValue] = useState("Kitzbuhel");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(cityValue);
  };

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setCityValue(e.target.value);

  return (
    <form
      action={`/${cityValue}`}
      className={cn(styles.cityInput, className)}
      onSubmit={handleSubmit}
    >
      <input
        onChange={onChangeHandle}
        title="Please type city name"
        value={cityValue}
        className={styles.field}
      />
      <button type="submit" className={styles.button}>
        See weather
      </button>
    </form>
  );
};

export default CityInput;
