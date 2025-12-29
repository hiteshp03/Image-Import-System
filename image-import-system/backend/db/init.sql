CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  name TEXT,
  google_drive_id TEXT,
  size BIGINT,
  mime_type TEXT,
  storage_path TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
