import { ReactNode } from "react";
import { useClickOutWithExcludedElement } from "utils/hooks/clickOutHook";
import styles from "./styles.module.scss";

type ModalPropsType = {
  className?: string;
  clickOut: () => void;
  children?: ReactNode | ReactNode[];
  excludeElementRef?: string;
};

const Modal = ({
  className,
  clickOut,
  children,
  excludeElementRef,
}: ModalPropsType) => {
  const [clickOutRef, clickOutHandler] =
    useClickOutWithExcludedElement(excludeElementRef);

  clickOutHandler(() => {
    clickOut();
  });

  return (
    <div
      className={`${className ? `modal-${className}` : "modal"} ${
        styles.modal__container
      }`}
      ref={clickOutRef}
    >
      {children}
    </div>
  );
};

export default Modal;
