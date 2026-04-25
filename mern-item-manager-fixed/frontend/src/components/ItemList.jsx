import { useEffect, useState } from "react";
import { getItems } from "../api";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(res => setItems(res.data));
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: LKR {item.price}</p>
          <p>{item.district}</p>

        </div>
      ))}
    </div>
  );
}

export default ItemList;
