import { StatisticType } from "@/components/molecules/statistics/type";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import View from "./view";

export type StatisticPropsType = Omit<StatisticType, "type">;

const Statistic = ({ label, maxValue, currentValue }: StatisticPropsType) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = styles.statistic__value__default;
    if (currentValue > maxValue) color = styles.statistic__value__buffed;
    if (currentValue < maxValue) color = styles.statistic__value__nerfed;
    setColor(color);
  }, [currentValue, maxValue]);

  return <View label={label} color={color} currentValue={currentValue} />;
};

export default Statistic;
