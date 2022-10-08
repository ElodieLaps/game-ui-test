import { StatisticType } from "@/components/molecules/statistics/type";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import View from "./view";

export type GaugePropsType = StatisticType;

const Gauge = ({ type, label, maxValue, currentValue }: GaugePropsType) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    setCurrentWidth((currentValue * 100) / maxValue);
  }, [currentValue, maxValue]);

  useEffect(() => {
    let color =
      type === "HEALTH"
        ? styles.gauge__current__green
        : styles.gauge__current__blue;
    if (type === "EXPERIENCE") color = styles.gauge__current__purple;
    if (type === "HEALTH") {
      if (currentWidth <= 50 && currentWidth >= 15)
        color = styles.gauge__current__orange;
      if (currentWidth <= 15) color = styles.gauge__current__red;
    }
    setColor(color);
  }, [currentWidth, type]);

  return (
    <View
      type={type}
      label={label}
      maxValue={maxValue}
      currentValue={currentValue}
      color={color}
      currentWidth={currentWidth}
    />
  );
};

export default Gauge;
