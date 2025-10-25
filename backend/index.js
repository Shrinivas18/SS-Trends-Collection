// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/addItem", (req, res) => {
  const item = req.body;
  console.log("Received item:", item);
  res.status(201).json({ message: "Item received!", item });
});

app.get("/itemById", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/updateItem", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/itemsList", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/deleteItem", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
