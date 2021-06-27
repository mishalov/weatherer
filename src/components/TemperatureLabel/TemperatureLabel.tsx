import React from "react";
import styles from "./TemperatureLabel.module.scss";
import cn from "classnames";

interface ITemperatureLabelProps {
  value: number;
  sign: "°C" | "°F";
  className?: string;
}

const TemperatureLabel = ({
  value,
  sign,
  className,
}: ITemperatureLabelProps) => (
  <div className={cn(styles.temperature, className)}>
    <div className={styles.temperature_value}>{Math.trunc(value)}</div>
    <div className={styles.temperature_postfix}>°C</div>
  </div>
);

export default TemperatureLabel;
