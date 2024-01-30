import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    props.onAdd(text);
    setText({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
