-- D1 (SQLite) Schema for Board (Posts)

-- 1. Create 'posts' table
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME DEFAULT NULL
);

-- 2. Create Indexes for search performance optimization
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts (created_at);
CREATE INDEX IF NOT EXISTS idx_posts_deleted_at ON posts (deleted_at);
