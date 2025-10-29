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

app.post("/addItem", async (req, res) => {
  try {
    const { id, code, type, retailPric, stickerPrice } = req.body;

    const result = await pool.query(
      "INSERT INTO items_data (id, code, type, retailPric, stickerPrice) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id, code, type, retailPric, stickerPrice]
    );

    res.status(201).json({ message: "Item added!", item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database insert failed" });
  }
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
