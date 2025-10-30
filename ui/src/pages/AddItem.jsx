import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../context/useTheme";
import Form from "../components/Form";
import { v4 as uuid } from "uuid";
import { ADD_ITEM } from "../utilities/constants";
import { submitData } from "../features/redux/action";
import axios from "axios";
function EditForm() {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    id: uuid(),
    code: "",
    type: "SAREE",
    retailPrice: "",
    stickerPrice: "",
    attachment: null,
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
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/addItem",
        formData
      );
      console.log("✅ Item added:", response.data);
      alert("Item added successfully!");
    } catch (error) {
      console.error("❌ Error adding item:", error);
      alert("Failed to add item.");
    }

    dispatch(submitData(ADD_ITEM, formData));

    setFormData({
      id: uuid(),
      code: "",
      type: "SAREE",
      retailPrice: "",
      stickerPrice: "",
      attachment: null,
    });
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      darkMode={darkMode}
      mode="add"
    />
  );
}

export default EditForm;
