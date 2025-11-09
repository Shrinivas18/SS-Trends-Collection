import React, { useEffect, useState } from "react";
import { useTheme } from "../context/useTheme";
import Form from "../components/Form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UPDATE_ITEM } from "../utilities/constants";
import { updateData } from "../features/redux/action";

function EditItem({ data, closeModal }) {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState(data);
  const [newFile, setNewFile] = useState(null);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setNewFile(files[0]);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      if (newFile) {
        payload.append("attachment", newFile);
        payload.append("oldAttachment", data.attachment); // 👈 to delete old
      }

      await axios.put(
        `http://localhost:5000/updateItem/${formData.serial_id}`,
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // dispatch(updateData(UPDATE_ITEM, payload));
      alert("✅ Item updated successfully!");
      closeModal();
    } catch (err) {
      console.error("❌ Update failed:", err);
      alert("Update failed!");
    }
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      darkMode={darkMode}
      mode="edit"
      newFile={newFile}
    />
  );
}

export default EditItem;
