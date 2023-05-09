import React, { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, SetNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    SetNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form ">
      <div className="form-row">
        <label htmlFor="item">NewItem</label>
        <input
          value={newItem}
          onChange={(e) => SetNewItem(e.target.value)}
          type="text"
          id="item"
        ></input>
        <button className="btn">Add</button>
      </div>
    </form>
  );
};

export default NewTodoForm;
