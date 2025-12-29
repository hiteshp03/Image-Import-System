require("dotenv").config();
const { Worker } = require("bullmq");
const fetchImages = require("./googleDrive");
const upload = require("./storage");
const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

new Worker("image-import", async job => {
  const images = await fetchImages(job.data.folderUrl);

  for (const img of images) {
    const path = await upload(img);

    await pool.query(
      `INSERT INTO images (name, google_drive_id, size, mime_type, storage_path)
       VALUES ($1,$2,$3,$4,$5)`,
      [img.name, img.id, img.size, img.mimeType, path]
    );
  }
});
