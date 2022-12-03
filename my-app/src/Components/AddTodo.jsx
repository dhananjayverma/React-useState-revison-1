import React from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    // whatever user types in input box; that should be "text" state;
    setText(e.target.value);
  };

  // any function that handles your events --> click event handler

  return (
    <div>
      <h1>TODO ADD HERE</h1>
      <input placeholder="ADD TODO" value={text} onChange={handleChange} />
      <button onClick={() => handleAddTodo(text)}>ADD </button>
    </div>
  );
};



export default AddTodo;