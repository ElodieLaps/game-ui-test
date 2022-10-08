import { GaugePropsType } from ".";
import styles from "./styles.module.scss";

interface ViewPropsType extends GaugePropsType {
  color: string;
  currentWidth: number;
}

const View = ({
  type,
  label,
  maxValue,
  currentValue,
  color,
  currentWidth,
}: ViewPropsType) => {
  const displayValues =
    (currentValue > 0 && type === "HEALTH") ||
    type === "MANA" ||
    type === "EXPERIENCE";
  const displayDeath = currentValue === 0 && type === "HEALTH";

  return (
    <div className="gauge">
      <div className={styles.gauge__text}>
        <p className={styles.gauge__label}>{label}</p>
        {displayValues && (
          <p className={styles.gauge__values}>
            {currentValue} <span>/ {maxValue} pts</span>
          </p>
        )}
        {displayDeath && <span role="death"> 💀 Mort</span>}
      </div>
      <div className={styles.gauge__container}>
        <div
          className={`${styles.gauge__current} ${color}`}
          style={{
            width: `${currentWidth}%`,
            transition: '1s, transform 2s',
            transform: `scale()`
          }}
        ></div>
      </div>
    </div>
  );
};

export default View;
