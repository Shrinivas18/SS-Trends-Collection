import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import EditItem from "./EditForm";
import ConfirmDelete from "../components/ConfirmDelete";
import { useTheme } from "../context/useTheme";

function ItemsList() {
  const { darkMode } = useTheme();
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/itemsList");
      setItemsList(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getItemById/${id}`
      );
      setSelectedItem(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching item:", error);
      alert("No Element Found with this id");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/deleteItem/${itemToDelete.serial_id}`
      );
      setConfirmDeleteModal(false);
      setItemToDelete(null);
      fetchItems();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div
      className={`px-4 sm:px-6 lg:px-10 py-10 min-h-screen transition-all duration-300 
        ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h2
          className={`text-2xl font-semibold tracking-tight ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Items List
        </h2>

        <div
          className={`flex space-x-6 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <button className="flex items-center space-x-1 hover:underline cursor-pointer">
            <span>SORT BY</span>
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="flex items-center space-x-1 hover:underline cursor-pointer">
            <span>FILTER</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h18M6 12h12m-9 8h6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Items Grid */}
      {loading ? (
        <p className="text-gray-400 text-center">Loading items...</p>
      ) : itemsList.length === 0 ? (
        <p className="text-gray-500 text-center dark:text-gray-400">
          No items added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
          {itemsList.map((item) => (
            <div
              key={item.serial_id}
              className={`group flex flex-col relative rounded-lg overflow-hidden shadow-md transition-all duration-300
                ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {/* Image */}
              {item.attachment && (
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={item.attachment}
                    alt={item.type}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Delete Button */}
                  <button
                    className={`absolute top-2 right-2 rounded-full p-2 sm:p-1.5 shadow-md backdrop-blur-sm transition cursor-pointer
                      ${
                        darkMode
                          ? "bg-gray-700/80 hover:bg-gray-600"
                          : "bg-white/80 hover:bg-white"
                      }`}
                    title="Delete item"
                    onClick={() => {
                      setItemToDelete(item);
                      setConfirmDeleteModal(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke={darkMode ? "white" : "black"}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Desktop hover buttons */}
                  <div className="hidden lg:flex absolute bottom-3 left-1/2 -translate-x-1/2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className={`text-sm px-3 py-1 rounded shadow font-medium transition cursor-pointer
                        ${
                          darkMode
                            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            : "bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                      onClick={() => handleEdit(item.serial_id)}
                    >
                      Edit
                    </button>
                    <button
                      className={`text-sm px-3 py-1 rounded font-medium transition cursor-pointer
                        ${
                          darkMode
                            ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                    >
                      Sold
                    </button>
                  </div>
                </div>
              )}

              {/* Item Info */}
              <div className="mt-3 text-sm text-center p-3">
                <p
                  className={`uppercase tracking-wide truncate ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {item.type}
                </p>
                <p
                  className={`font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Rs.{item.retailPrice}.00
                </p>
              </div>

              {/* Mobile Buttons */}
              <div className="flex justify-center gap-3 mt-3 mb-3 lg:hidden">
                <button
                  className={`text-sm px-3 py-1 rounded font-medium transition cursor-pointer
                    ${
                      darkMode
                        ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  onClick={() => handleEdit(item.serial_id)}
                >
                  Edit
                </button>
                <button
                  className={`text-sm px-3 py-1 rounded font-medium transition cursor-pointer
                    ${
                      darkMode
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  Sold
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditItem
          data={selectedItem}
          closeModal={() => setIsModalOpen(false)}
          refreshItems={fetchItems}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={confirmDeleteModal}
        onClose={() => setConfirmDeleteModal(false)}
      >
        {itemToDelete && (
          <ConfirmDelete
            itemName={itemToDelete.type}
            onConfirm={handleDelete}
            onCancel={() => setConfirmDeleteModal(false)}
          />
        )}
      </Modal>
    </div>
  );
}

export default ItemsList;
