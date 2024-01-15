import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  // State hooks for handling form inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle changes in the name input field
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle changes in the category select field
  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    props.onItemFormSubmit(newItem);
    // Reset the form fields after submission
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
