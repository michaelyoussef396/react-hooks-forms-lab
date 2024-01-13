import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    const filterBySearch = item.name.toLowerCase().includes(inputValue.toLowerCase());
    const filterByCategory = selectedCategory === "All" || item.category === selectedCategory;

    return filterBySearch && filterByCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={inputValue} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;