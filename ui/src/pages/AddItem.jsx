import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM_FORM } from "../utilities/constants";
function AddItem() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    code: "",
    type: "",
    retailPrice: "",
    stickerPrice: "",
    sellingPrice: "",
    profitAmount: "",
    attachment: null,
    settledAmount: "",
    balanceAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "attachment" ? files[0] : value,
      [name]: value,
    }));
  };

  console.log(formData.type);
  return (
    <div>
      <form action="">
        <input type="text" name="code" onChange={handleChange} />
        <div>
          <label htmlFor="code">Code</label>
          <input type="text" name="code" id="code" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="itemType">Type</label>
          <select
            name="type"
            value={formData.type}
            id="itemType"
            onChange={handleChange}
          >
            {ADD_ITEM_FORM.map((item, index) => {
              return (
                <option className="w-fit" key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="retailPrice">Retail Price</label>
          <input
            type="number"
            name="retailPrice"
            id="retailPrice"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="stickerPrice">Sticker Price</label>
          <input
            type="number"
            name="stickerPrice"
            id="stickerPrice"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="sellingPrice">Selling Price</label>
          <input
            type="number"
            name="sellingPrice"
            id="sellingPrice"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="profitAmount">Profit Amount</label>
          <input
            type="text"
            name="profitAmount"
            id="profitAmount"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="settledAmount">Settled Amount</label>
          <input
            type="text"
            name="settledAmountcode"
            id="settledAmount"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="balanceAmount">Balance Amount</label>
          <input
            type="text"
            name="balanceAmount"
            id="balanceAmount"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="attachment">Attachment</label>
          <input
            type="file"
            name="attachment"
            id="attachment"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AddItem;
