import "./confirm_cancel_button.css";

export default function ConfirmCancelButton() {
  const confirmClickHandler = () => {
    console.log("Confirm Was Clicked");
  };

  const cancelClickHandler = () => {
    console.log("Cancel Was Clicked");
  };

  return (
    <div id="confirm-cancel-container">
      <button id="cancel-button" onClick={cancelClickHandler}>
        Cacncel
      </button>
      <button id="confirm-button" onClick={confirmClickHandler}>
        Confirm
      </button>
    </div>
  );
}
