require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const queue = require("./queue");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/import/google-drive", async (req, res) => {
  const { folderUrl } = req.body;
  await queue.add("import", { folderUrl });
  res.json({ message: "Import started" });
});

app.get("/images", async (req, res) => {
  const result = await pool.query("SELECT * FROM images");
  res.json(result.rows);
});

app.listen(5000, () => console.log("API running on 5000"));
