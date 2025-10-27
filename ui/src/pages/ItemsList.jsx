import React from "react";
import { useSelector } from "react-redux";

function ItemsList() {
  const items = useSelector((state) => state.ssTrendsCollection.itemsList);

  return (
    <div>
      <h2>Items List</h2>

      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        items.map((item) => (
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
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ItemsList;
