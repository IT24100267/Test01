import { useState } from "react";
import { createItem } from "../api";

function ItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name, description, price, district });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input placeholder="District" onChange={(e) => setDistrict(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;
