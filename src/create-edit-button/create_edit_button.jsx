import "./create_edit_button.css";

export default function CreateEditButton(switchShowModal, selectModalPage) {
  const createClickHandler = () => {
    switchShowModal(selectModalPage)
  };

  const editClickHandler = () => {
  };

  return (
    <div id="create-edit-container">
      <button id="create-button" onClick={createClickHandler}>
        Create
      </button>
      <button id="edit-button" onClick={editClickHandler}>
        Edit
      </button>
    </div>
  );
}
