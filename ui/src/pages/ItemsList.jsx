import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ItemsList() {
  const [itemsList, setItemsList] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/itemsList");
        console.log("response::", response);
        setItemsList(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  console.log(itemsList);
  return (
    <div>
      <h2>Items List</h2>

      {itemsList.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        itemsList.map((item) => (
          <div key={item.id} style={{ marginBottom: "1rem" }}>
            <p>
              <strong>Code:</strong> {item.code}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <p>
              <strong>Retail Price:</strong> {item.retailPrice}
            </p>
            <p>
              <strong>Sticker Price:</strong> {item.stickerPrice}
            </p>
            <div>
              <button className="m-1">
                <strong>Edit</strong>
              </button>
              <button className="m-1">
                <strong>Delete</strong>
              </button>
            </div>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ItemsList;
