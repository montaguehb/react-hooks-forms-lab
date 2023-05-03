import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [displayItems, setDisplayItems] = useState(items)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }
  const itemsToDisplay = displayItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item => {
    return !search?true:item.name.includes(search)
  });

  
  const onItemFormSubmit = (item) => {
    setDisplayItems([...displayItems, item])
    
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
