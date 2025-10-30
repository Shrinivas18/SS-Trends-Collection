// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

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
    let { id, code, type, retailPrice, stickerPrice } = req.body;
    code = Number(code);
    retailPrice = Number(retailPrice);
    stickerPrice = Number(stickerPrice);

    const result = await pool.query(
      `INSERT INTO public.items_data ("id", "code", "type", "retailPrice", "stickerPrice") VALUES ($1, $2, $3, $4, $5)`,
      [id, code, type, retailPrice, stickerPrice]
    );

    res.status(201).json({ message: "Item added!", item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database insert failed" });
  }
});
app.get("/itemsList", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM public.items_data`);
    res.status(201).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fetch from Database failed" });
  }
});

app.get("/deleteItem", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
