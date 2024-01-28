import "./create_edit_button.css";

export default function CreateEditButton(switchShowModal) {
  const createClickHandler = () => {
    switchShowModal()
    console.log("Create Was Clicked");
  };

  const editClickHandler = () => {
    console.log("Edit Was Clicked");
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
