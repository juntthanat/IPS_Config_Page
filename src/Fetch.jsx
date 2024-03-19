import { useState } from "react";

export const Fetch = () => {
  const [a, b] = useState();

  const post = () => {
    const formData = new FormData();
    formData.append("file", a);

    console.log(a, JSON.stringify(formData));

    fetch("http://marco.cooldev.win:8080/api/v1/files", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => b(e.target.files[0])} />
      <button
        onClick={() => {
          post();
        }}
      >
        post
      </button>
    </div>
  );
};
