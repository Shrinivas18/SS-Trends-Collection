import React, { useState } from "react";
import axios from "axios";
import { useTheme } from "../context/useTheme";
import { submitData } from "../features/redux/action";
import { useDispatch } from "react-redux";
import {
  DARK_MODE_ADD_ITEM,
  DARK_MODE_MAIN_CLASS,
} from "../features/mode/darkMode";
import {
  ADD_ITEM as LIGHT_MODE_ADD_ITEM,
  MAIN_CLASS,
} from "../features/mode/lightMode";
import { ADD_ITEM } from "../utilities/constants";

function AddForm() {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    code: "",
    type: "SAREE",
    retailPrice: "",
    sticker_price: "",
    attachment: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.code === "" || formData.type === "") {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      const data = new FormData();
      // data.append("id", formData.id);
      data.append("code", formData.code);
      data.append("type", formData.type);
      data.append("retailPrice", formData.retailPrice);
      data.append("sticker_price", formData.sticker_price);
      if (formData.attachment) data.append("attachment", formData.attachment);

      const response = await axios.post("http://localhost:5000/addItem", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Item added:", response.data);
      alert("Item added successfully!");
      dispatch(submitData(ADD_ITEM, formData));
    } catch (error) {
      console.error("❌ Error adding item:", error);
      alert("Failed to add item.");
    }

    setFormData({
      code: "",
      type: "SAREE",
      retailPrice: "",
      sticker_price: "",
      attachment: "",
    });
  };

  const styles = darkMode ? DARK_MODE_ADD_ITEM : LIGHT_MODE_ADD_ITEM;
  const mainClass = darkMode ? DARK_MODE_MAIN_CLASS : MAIN_CLASS;

  return (
    <div
      className={`${mainClass} min-h-screen flex justify-center items-start pb-10`}
    >
      <div className={styles.FORM_CONTAINER}>
        <h2 className={styles.HEADER}>Add New Item</h2>
        <p className={styles.SUBTEXT}>
          Fill in the details below to add a new item to your inventory.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={styles.LABEL}>Item Code</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className={styles.INPUT}
              placeholder="Enter item code"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className={styles.LABEL}>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={styles.SELECT}
            >
              <option value="SAREE">SAREE</option>
              <option value="DRESS">DRESS</option>
              <option value="KURTI">KURTI</option>
              <option value="TOP">TOP</option>
            </select>
          </div>

          {/* Retail Price */}
          <div>
            <label className={styles.LABEL}>Retail Price (Rs)</label>
            <input
              type="number"
              name="retailPrice"
              value={formData.retailPrice}
              onChange={handleChange}
              className={styles.INPUT}
              placeholder="Enter retail price"
              required
            />
          </div>

          {/* Sticker Price */}
          <div>
            <label className={styles.LABEL}>Sticker Price (Rs)</label>
            <input
              type="number"
              name="sticker_price"
              value={formData.sticker_price}
              onChange={handleChange}
              className={styles.INPUT}
              placeholder="Enter sticker price"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className={styles.LABEL}>Attachment (Image)</label>
            <input
              type="file"
              name="attachment"
              accept="image/*"
              onChange={handleChange}
              className={`${styles.INPUT} cursor-pointer`}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.BUTTON}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
