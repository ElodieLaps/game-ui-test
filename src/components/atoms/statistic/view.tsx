import { StatisticPropsType } from ".";
import styles from "./styles.module.scss";

interface ViewProps extends StatisticPropsType {
  color: string;
  currentValue: number;
}
type ViewPropsType = Omit<ViewProps, "maxValue">;

const View = ({ label, color, currentValue }: ViewPropsType) => {
  return (
    <div className="statistic">
      <div className={styles.statistic__text}>
        <p className={styles.statistic__label}>
          {label} :
          <span className={`${styles.statistic__value} ${color}`}>
            {" "}
            {currentValue}
          </span>
          <span className={styles.statistic__unit}> pts</span>
        </p>
      </div>
    </div>
  );
};

export default View;
