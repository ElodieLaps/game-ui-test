import { ButtonType } from ".";
import styles from "./styles.module.scss";

type ViewType = ButtonType;

const View = ({
  id,
  className,
  type = "primary",
  label,
  onClickButton,
}: ViewType) => {
  const getStyleType = () => {
    switch (type) {
      case "primary":
        return styles.button__primary;
      case "secondary":
        return styles.button__secondary;
      case "link":
        return styles.button__link;
      default:
        return styles.button__primary;
    }
  };

  return (
    <button
      id={id}
      className={`${className ? `button-${className}` : "button"} ${
        styles.button
      } ${getStyleType()}`}
      onClick={onClickButton}
    >
      {label}
    </button>
  );
};

export default View;
