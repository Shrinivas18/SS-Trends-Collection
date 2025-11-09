// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

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
    const now = new Date();
    const isoString = now.toISOString();
    const [date, timeWithMs] = isoString.split("T");
    const time = timeWithMs.split(".")[0];

    const imageUrl = req.file?.location || null;

    const result = await pool.query(
      `INSERT INTO public.items_data ("id", "code", "type", "retailPrice", "stickerPrice", "attachment", "date", "time") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [id, code, type, retailPrice, stickerPrice, imageUrl, date, time]
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

app.get("/getItemById/:serial_id", async (req, res) => {
  try {
    const { serial_id } = req.params;
    const result = await pool.query(
      "SELECT * FROM public.items_data WHERE serial_id = $1",
      [serial_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.put(
  "/updateItem/:serial_id",
  upload.single("attachment"),
  async (req, res) => {
    try {
      const { serial_id } = req.params;
      let { code, type, retailPrice, stickerPrice, sellingPrice } = req.body;

      retailPrice = Number(retailPrice);
      stickerPrice = Number(stickerPrice);

      let imageUrl = oldAttachment;

      // ✅ If no new file, get the original attachment
      if (!req.file) {
        const dbItem = await pool.query(
          `SELECT attachment FROM public.items_data WHERE serial_id = $1`,
          [serial_id]
        );
        imageUrl = dbItem.rows[0].attachment; // ✅ preserve old
      }

      // ✅ If new file uploaded — delete old
      if (req.file) {
        const oldKey = oldAttachment?.split("/").pop();

        if (oldKey) {
          await s3.send(
            new DeleteObjectCommand({
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: oldKey,
            })
          );
        }

        imageUrl = req.file.location;
      }

      const updatedItem = await pool.query(
        `UPDATE public.items_data 
       SET "code" = $1, "type" = $2, "retailPrice" = $3, "stickerPrice" = $4, "attachment" = $5
       WHERE "serial_id" = $10
       RETURNING *`,
        [
          code,
          type,
          retailPrice,
          stickerPrice,
          sellingPrice,
          profitAmount,
          settledAmount,
          balanceAmount,
          imageUrl,
          serial_id,
        ]
      );

      res.json({
        message: "✅ Item updated successfully",
        item: updatedItem.rows[0],
      });
    } catch (err) {
      console.error("❌ updateItem error:", err);
      res.status(500).json({ error: "Update failed" });
    }
  }
);

app.get("/deleteItem", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
