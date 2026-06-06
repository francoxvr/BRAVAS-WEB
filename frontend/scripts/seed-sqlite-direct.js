// Seed Payload SQLite database directly from Tina JSON files.
// Bypasses the Payload SDK to avoid @next/env v16 compatibility issues.
const Database = require('better-sqlite3')
const fs = require('fs')
const path = require('path')

const DB_PATH = path.join(__dirname, '..', 'payload.db')
const CONTENT_ROOT = path.join(__dirname, '..', 'tina', 'content')

const sources = [
  ['site_config', path.join(CONTENT_ROOT, 'config.json')],
  ['footer',      path.join(CONTENT_ROOT, 'footer.json')],
  ['home',        path.join(CONTENT_ROOT, 'pages', 'home.json')],
  ['servicios',   path.join(CONTENT_ROOT, 'pages', 'servicios.json')],
  ['nosotros',    path.join(CONTENT_ROOT, 'pages', 'nosotros.json')],
  ['contacto',    path.join(CONTENT_ROOT, 'pages', 'contacto.json')],
  ['legal',       path.join(CONTENT_ROOT, 'pages', 'legal.json')],
]

const db = new Database(DB_PATH)
const now = new Date().toISOString()

for (const [table, file] of sources) {
  const content = JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8')))
  const existing = db.prepare(`SELECT id FROM "${table}" LIMIT 1`).get()
  if (existing) {
    db.prepare(`UPDATE "${table}" SET content = ?, updated_at = ? WHERE id = ?`)
      .run(content, now, existing.id)
    console.log(`Updated ${table}`)
  } else {
    db.prepare(`INSERT INTO "${table}" (content, updated_at, created_at) VALUES (?, ?, ?)`)
      .run(content, now, now)
    console.log(`Inserted ${table}`)
  }
}

db.close()
console.log('Seed complete.')
