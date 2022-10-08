import Button from "@/components/atoms/button";
import Modal from "@/components/atoms/modal";
import Action from "@/components/molecules/action";
import { ActionPropsType } from "../types";
import styles from "./styles.module.scss";

const AbilitiesAction = ({
  actionsButtonRef,
  setState,
  state,
  clickOutHandler
}: ActionPropsType) => {
  const className = "abilities";

  const AbilitiesButton = (
    <Button
      id={actionsButtonRef}
      className={className}
      label="🗡 Attaques"
      onClickButton={() =>
        setState({
          ...state,
          attackIsOpen: !state.attackIsOpen,
          inventoryIsOpen: false,
        })
      }
    />
  );

  const AbilitiesModal = (
    <Modal
      className={className}
      excludeElementRef={actionsButtonRef}
      clickOut={clickOutHandler}
    >
      <div className={styles.abilities_action__list}>
        <p>
          <span>listes des attaques</span>
          <span
            onClick={() =>
              setState({
                ...state,
                attackIsOpen: !state.attackIsOpen,
                inventoryIsOpen: false,
              })
            }
          >
            X
          </span>
        </p>
        <ul>
          <li>attack</li>
          <li>attack</li>
          <li>attack</li>
        </ul>
      </div>
    </Modal>
  );

  return (
    <Action
    className="abilities"
      actionButton={AbilitiesButton}
      actionModal={AbilitiesModal}
      isOpen={state.attackIsOpen}
    />
  );
};

export default AbilitiesAction;
