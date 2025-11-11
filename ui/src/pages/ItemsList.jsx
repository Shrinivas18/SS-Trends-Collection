import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import EditItem from "./EditForm";
import ConfirmDelete from "../components/ConfirmDelete";

function ItemsList() {
  const [itemsList, setItemsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/itemsList");
      setItemsList(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleEdit = async (id) => {
    console.log("id::", id);
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
      fetchItems(); // refresh list
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-semibold tracking-tight">Items List</h2>

        <div className="flex space-x-6 text-sm text-gray-600">
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

      {/* Grid of items */}
      {itemsList.length === 0 ? (
        <p className="text-gray-500 text-center">No items added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
          {itemsList.map((item) => (
            <div key={item.id} className="group flex flex-col relative">
              {/* Image */}
              {item.attachment && (
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={item.attachment}
                    alt={item.type}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* ❌ Delete button */}
                  <button
                    className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-1.5 shadow-md hover:bg-white transition cursor-pointer"
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
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-600"
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
                      className="bg-white text-sm px-3 py-1 rounded shadow hover:bg-gray-100 font-medium cursor-pointer"
                      onClick={() => handleEdit(item.serial_id)}
                    >
                      Edit
                    </button>
                    <button className="bg-black text-white text-sm px-3 py-1 rounded hover:bg-gray-800 font-medium cursor-pointer">
                      Sold
                    </button>
                  </div>
                </div>
              )}

              {/* Item Info */}
              <div className="mt-3 text-sm text-gray-800 text-center">
                <p className="uppercase tracking-wide truncate">{item.type}</p>
                <p className="font-semibold whitespace-nowrap">
                  Rs.{item.retailPrice}.00
                </p>
              </div>

              {/* Mobile buttons (visible on small screens) */}
              <div className="flex justify-center gap-3 mt-3 lg:hidden">
                <button
                  className="bg-gray-100 text-sm px-3 py-1 rounded hover:bg-gray-200 font-medium cursor-pointer"
                  onClick={() => handleEdit(item.serial_id)}
                >
                  Edit
                </button>
                <button className="bg-black text-white text-sm px-3 py-1 rounded hover:bg-gray-800 font-medium cursor-pointer">
                  Sold
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditItem
          data={selectedItem}
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>

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
