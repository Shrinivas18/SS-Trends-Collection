import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../context/useTheme";
import Form from "../components/Form";
import { v4 as uuid } from "uuid";
import { ADD_ITEM } from "../utilities/constants";
import { submitData } from "../features/redux/action";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.code === "" || formData.type === "") {
      alert("Please fill in all the required fields.");
      return;
    }

    dispatch(submitData(ADD_ITEM, formData));

    setFormData({
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

    alert("Item added successfully!");
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      darkMode={darkMode}
      mode="edit"
    />
  );
}

export default AddItem;
