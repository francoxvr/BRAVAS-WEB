// Borra las tablas afectadas por el cambio de "lista de texto" (hasMany text)
// a "lista de items editables" (array con subcampo texto). Esto le da a
// drizzle-kit una pizarra limpia y evita los prompts interactivos de
// rename-vs-create al pushear el nuevo schema.
import path from 'node:path'

const databaseUri = process.env.DATABASE_URI ?? ''
const isPostgres = databaseUri.startsWith('postgres')

// Tablas genéricas donde Payload guardaba los valores de los campos hasMany text
const textsTables = [
  'site_config_texts',
  'home_texts',
  'servicios_texts',
  'nosotros_texts',
  'contacto_texts',
]

if (isPostgres) {
  const { Pool } = await import('pg')
  const pool = new Pool({ connectionString: databaseUri })
  for (const table of textsTables) {
    await pool.query(`DROP TABLE IF EXISTS "${table}" CASCADE`)
    console.log(`Dropped (pg): ${table}`)
  }
  await pool.end()
} else {
  const { default: Database } = await import('better-sqlite3')
  const dbPath = databaseUri.replace(/^file:/, '')
  const db = new Database(path.resolve(process.cwd(), dbPath))
  for (const table of textsTables) {
    db.prepare(`DROP TABLE IF EXISTS "${table}"`).run()
    console.log(`Dropped (sqlite): ${table}`)
  }
  db.close()
}

console.log('\nDone dropping _texts tables')
