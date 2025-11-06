import React from "react";
import { ADD_ITEM } from "../features/mode/lightMode";
import { DARK_MODE_ADD_ITEM } from "../features/mode/darkMode";
import { ADD_ITEM_FORM } from "../utilities/constants";

const Form = ({
  formData,
  handleChange,
  handleSubmit,
  darkMode = false,
  mode,
  newFile,
}) => {
  const styles = darkMode ? DARK_MODE_ADD_ITEM : ADD_ITEM;

  return (
    <div className={styles.FORM_CONTAINER}>
      <div>
        <h2 className={styles.HEADER}>
          {mode === "edit" ? "Edit Item" : "Add Item"}
        </h2>
        <p className={styles.SUBTEXT}>
          {mode === "edit"
            ? "Update the item details below."
            : "Fill in the details below to add a new item to the store."}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div>
            <label htmlFor="code" className={styles.LABEL}>
              Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              value={formData.code}
              onChange={handleChange}
              className={`${styles.INPUT} border-2 border-gray-300`}
              required
            />
          </div>

          <div>
            <label htmlFor="type" className={styles.LABEL}>
              Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className={`${styles.SELECT} border-2 border-gray-300`}
            >
              {ADD_ITEM_FORM.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {[
            { name: "retailPrice", label: "Retail Price" },
            { name: "stickerPrice", label: "Sticker Price" },
            ...(mode === "edit"
              ? [
                  { name: "sellingPrice", label: "Selling Price" },
                  { name: "profitAmount", label: "Profit Amount" },
                  { name: "settledAmount", label: "Settled Amount" },
                  { name: "balanceAmount", label: "Balance Amount" },
                ]
              : []),
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className={styles.LABEL}>
                {field.label}
              </label>
              <input
                type="number"
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`${styles.INPUT} border-2 border-gray-300`}
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="attachment" className={styles.LABEL}>
              Attachment
            </label>

            <input
              type="file"
              name="attachment"
              id="attachment"
              accept="image/*"
              onChange={handleChange}
              className={`${styles.INPUT} border-2 border-gray-300`}
              required={mode !== "edit"}
            />

            {/* ✅ Show new selected file name */}
            {newFile && (
              <p className="mt-2 text-sm text-green-600 font-semibold">
                New File: {newFile.name}
              </p>
            )}

            {/* ✅ Show stored image preview when editing */}
            {!newFile &&
              formData?.attachment &&
              typeof formData.attachment === "string" && (
                <div className="mt-2">
                  <p className="text-sm text-blue-600 font-semibold">
                    Current File: {formData.attachment.split("/").pop()}
                  </p>

                  <img
                    src={formData.attachment}
                    alt="Existing"
                    className="mt-2 w-32 h-32 object-cover border rounded-md shadow"
                  />
                </div>
              )}
          </div>

          <div className="mt-4">
            <button type="submit" className={styles.BUTTON}>
              {mode === "edit" ? "Update Item" : "Add Item"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
