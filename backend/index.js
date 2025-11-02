// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
    key: (req, file, cb) =>
      cb(null, Date.now().toString() + "-" + file.originalname),
  }),
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/addItem", upload.single("attachment"), async (req, res) => {
  try {
    let { id, code, type, retailPrice, stickerPrice } = req.body;
    code = Number(code);
    retailPrice = Number(retailPrice);
    stickerPrice = Number(stickerPrice);

    const imageUrl = req.file?.location || null;

    const result = await pool.query(
      `INSERT INTO public.items_data ("id", "code", "type", "retailPrice", "stickerPrice", "attachment") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [id, code, type, retailPrice, stickerPrice, imageUrl]
    );

    res.status(201).json({ message: "Item added!", item: result.rows[0] });
  } catch (err) {
    console.error("❌ Upload or DB error:", err);
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
