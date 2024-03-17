import "./confirm_cancel_button.css";

export default function ConfirmCancelButton(props) {
  const {setUserConfirm, switchShowModal} = props ?? {}
  const confirmClickHandler = () => {
    setUserConfirm(true)
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
