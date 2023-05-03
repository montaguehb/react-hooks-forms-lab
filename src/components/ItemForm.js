import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Item from "./Item";

function ItemForm({onItemFormSubmit}) {
  const [category, setCategory] = useState("Produce")
  const [name, setName] = useState("");
  const newItem = {
    id: uuid(),
    name: name,
    category: category
  }

  const handleSubmit = event => {
    event.preventDefault()
    onItemFormSubmit(newItem)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setCategory(e.target.value)}>
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
