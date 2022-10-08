import Button from "@/components/atoms/button";
import { useState } from "react";
import AbilitiesAction from "./abilitiesAction";
import InventoryAction from "./inventoryAction";
import styles from "./styles.module.scss";

const Actions = () => {
  const [state, setState] = useState({
    attackIsOpen: false,
    inventoryIsOpen: false,
  });

  const abilitiesButtonRef = "abilitiesButtonRef";
  const inventoryButtonRef = "inventoryButtonRef";

  const clickOutHandler = () => {
    if (!state.attackIsOpen && !state.inventoryIsOpen) return;
    setState({
      ...state,
      attackIsOpen: false,
      inventoryIsOpen: false,
    });
  };

  return (
    <div className={`actions ${styles.actions__container}`}>
      <div className={styles.actions__main_actions}>
        <AbilitiesAction
          actionsButtonRef={abilitiesButtonRef}
          setState={setState}
          state={state}
          clickOutHandler={clickOutHandler}
        />
        <Button className="escape" label="🍃 Passer" type="secondary" />
      </div>
      <InventoryAction
        actionsButtonRef={inventoryButtonRef}
        setState={setState}
        state={state}
        clickOutHandler={clickOutHandler}
      />
      {/* <Button className="inventory" label="👜 Inventaire" type="link" /> */}
    </div>
  );
};

export default Actions;
