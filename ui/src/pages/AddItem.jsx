import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM_FORM } from "../utilities/constants";
import { useTheme } from "../context/useTheme";
import { ADD_ITEM } from "../features/mode/lightMode";
import { DARK_MODE_ADD_ITEM } from "../features/mode/darkMode";
import { v4 as uuid } from "uuid";

function AddItem() {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    id: uuid(),
    code: "",
    type: "SAREE",
    retailPrice: "",
    stickerPrice: "",
    sellingPrice: "",
    profitAmount: "",
    attachment: null,
    settledAmount: "",
    balanceAmount: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Define addData to handle form submission
  const addData = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Optionally, perform validation here if necessary
    if (formData.code === "" || formData.type === "") {
      alert("Please fill in all the required fields.");
      return;
    }

    // Dispatch action to save form data (example)
    dispatch({
      type: "ADD_ITEM",
      payload: formData,
    });

    // Reset form or give success message
    setFormData({
      id: uuid(),
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
    alert("Item added successfully!");
  };

  const formContainerClass = darkMode
    ? DARK_MODE_ADD_ITEM.FORM_CONTAINER
    : ADD_ITEM.FORM_CONTAINER;

  const inputClass = darkMode ? DARK_MODE_ADD_ITEM.INPUT : ADD_ITEM.INPUT;
  const selectClass = darkMode ? DARK_MODE_ADD_ITEM.SELECT : ADD_ITEM.SELECT;
  const buttonClass = darkMode ? DARK_MODE_ADD_ITEM.BUTTON : ADD_ITEM.BUTTON;
  const labelClass = darkMode ? DARK_MODE_ADD_ITEM.LABEL : ADD_ITEM.LABEL;
  const headerClass = darkMode ? DARK_MODE_ADD_ITEM.HEADER : ADD_ITEM.HEADER;
  const subtextClass = darkMode ? DARK_MODE_ADD_ITEM.SUBTEXT : ADD_ITEM.SUBTEXT;

  return (
    <div className={formContainerClass}>
      <div>
        <h2 className={headerClass}>Add Item</h2>
        <p className={subtextClass}>
          Fill in the details below to add a new item to the store.
        </p>
      </div>
      <form onSubmit={addData}>
        <div className="grid gap-6">
          <div>
            <label htmlFor="code" className={labelClass}>
              Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              value={formData.code}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="type" className={labelClass}>
              Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className={`${selectClass} border-2 border-gray-300`}
            >
              {ADD_ITEM_FORM.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="retailPrice" className={labelClass}>
              Retail Price
            </label>
            <input
              type="number"
              name="retailPrice"
              id="retailPrice"
              value={formData.retailPrice}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="stickerPrice" className={labelClass}>
              Sticker Price
            </label>
            <input
              type="number"
              name="stickerPrice"
              id="stickerPrice"
              value={formData.stickerPrice}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="sellingPrice" className={labelClass}>
              Selling Price
            </label>
            <input
              type="number"
              name="sellingPrice"
              id="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="profitAmount" className={labelClass}>
              Profit Amount
            </label>
            <input
              type="text"
              name="profitAmount"
              id="profitAmount"
              value={formData.profitAmount}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="settledAmount" className={labelClass}>
              Settled Amount
            </label>
            <input
              type="text"
              name="settledAmount"
              id="settledAmount"
              value={formData.settledAmount}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="balanceAmount" className={labelClass}>
              Balance Amount
            </label>
            <input
              type="text"
              name="balanceAmount"
              id="balanceAmount"
              value={formData.balanceAmount}
              onChange={handleChange}
              className={`${inputClass} border-2 border-gray-300`}
            />
          </div>

          <div>
            <label htmlFor="attachment" className={labelClass}>
              Attachment
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                name="attachment"
                id="attachment"
                accept="image/*"
                capture="camera"
                onChange={handleChange}
                className={`${inputClass} border-2 border-gray-300 flex-grow`}
              />
            </div>
            {formData.attachment && (
              <div
                style={{
                  marginTop: "8px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Selected File: {formData.attachment.name}
              </div>
            )}
          </div>

          <div className="mt-4">
            <button type="submit" className={buttonClass}>
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
