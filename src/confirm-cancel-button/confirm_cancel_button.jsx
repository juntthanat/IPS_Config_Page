import { RerenderContext } from "../App";
import "./confirm_cancel_button.css";
import { useContext } from "react";
export default function ConfirmCancelButton(props) {
  const { setUserConfirm, switchShowModal } = props ?? {};

  const { rerender } = useContext(RerenderContext);

  const confirmClickHandler = () => {
    setUserConfirm(true);
    rerender();
    console.log("Confirm Was Clicked");
  };

  const cancelClickHandler = () => {
    switchShowModal();
    console.log("Cancel Was Clicked");
  };

  return (
    <div id="confirm-cancel-container">
      <button id="confirm-button" onClick={confirmClickHandler}>
        Confirm
      </button>
      <button id="cancel-button" onClick={cancelClickHandler}>
        Cancel
      </button>
    </div>
  );
}
