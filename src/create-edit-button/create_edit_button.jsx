import "./create_edit_button.css";

export default function CreateEditButton(switchShowModal, selectModalPage) {
  const createClickHandler = () => {
    switchShowModal(selectModalPage, "create");
  };

  const editClickHandler = () => {
    switchShowModal(selectModalPage, "edit");
  };
  const deleteClickHandler = () => {
    switchShowModal(selectModalPage, "delete");
  };

  return (
    <div id="create-edit-container">
      <button id="create-button" onClick={createClickHandler}>
        Create
      </button>
      <button id="edit-button" onClick={editClickHandler}>
        Edit
      </button>
      <button id="delete-button" onClick={deleteClickHandler}>
        Delete
      </button>
    </div>
  );
}
