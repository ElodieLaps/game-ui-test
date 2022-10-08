import Gauge from "@/components/atoms/gauge";
import Statistic from "@/components/atoms/statistic";
import { StatisticsPropsType } from ".";
import styles from "./styles.module.scss";
import { isTypeGauge } from "./type";

type ViewType = StatisticsPropsType;

const View = ({ statistics }: ViewType) => {
  return (
    <ul className={`statistics ${styles.statistics}`}>
      {statistics.map((stat) => {
        const keyType = stat.type.toLocaleLowerCase();
        const gaugeType = isTypeGauge(stat.type);

        return (
          <li
            key={`statistic_${stat.type}`}
            className={`statistic_${keyType} ${styles.statistics__item}`}
          >
            {gaugeType ? (
              <Gauge
                type={stat.type}
                label={stat.label}
                maxValue={stat.maxValue}
                currentValue={stat.currentValue}
              />
            ) : (
              <Statistic
                label={stat.label}
                maxValue={stat.maxValue}
                currentValue={stat.currentValue}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default View;
