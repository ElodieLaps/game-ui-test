import { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

type ActionPropsType = {
  className?: string;
  actionButton: ReactElement;
  actionModal: ReactNode | ReactNode[];
  isOpen: boolean;
};

const Action = ({
  className,
  actionButton,
  actionModal,
  isOpen,
}: ActionPropsType) => {
  return (
    <div className={`${className ? `action-${className}` : "action"} ${styles.action__container}`}>
      <div>{actionButton}</div>
      {isOpen && <div className={styles.action__modal}>{actionModal}</div>}
    </div>
  );
};

export default Action;
