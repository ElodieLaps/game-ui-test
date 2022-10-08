import Button from "@/components/atoms/button";
import Modal from "@/components/atoms/modal";
import Action from "@/components/molecules/action";
import { ActionPropsType } from "../types";
import styles from "./styles.module.scss";

const InventoryAction = ({
  actionsButtonRef,
  setState,
  state,
  clickOutHandler,
}: ActionPropsType) => {
  const className = "inventory";

  const InventoryButton = (
    <Button
      type="link"
      id={actionsButtonRef}
      className={className}
      label="👜 Inventaire"
      onClickButton={() =>
        setState({
          ...state,
          inventoryIsOpen: !state.inventoryIsOpen,
          attackIsOpen: false,
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
          <span>listes des items</span>
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
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </Modal>
  );

  return (
    <Action
      className="abilities"
      actionButton={InventoryButton}
      actionModal={AbilitiesModal}
      isOpen={state.attackIsOpen}
    />
  );
};

export default InventoryAction;
