import { pathToFileURL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

delete process.env.NODE_ENV

const payloadDist = path.join(process.cwd(), 'node_modules', 'payload', 'dist')
const { findConfig } = await import(pathToFileURL(path.join(payloadDist, 'config', 'find.js')).toString())
const payloadModule = await import(pathToFileURL(path.join(payloadDist, 'index.js')).toString())
const payload = payloadModule.default

const configPath = findConfig()
let config = await import(pathToFileURL(configPath).toString())
if (config.default) config = await config.default

await payload.init({ config, disableOnInit: true })

const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
const files = fs.readdirSync(uploadsDir).filter((name) => {
  const full = path.join(uploadsDir, name)
  return fs.statSync(full).isFile()
})

const mapping = {}

for (const filename of files) {
  const oldPath = `/uploads/${filename}`
  const fullPath = path.join(uploadsDir, filename)

  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  })

  let doc
  if (existing.docs.length) {
    doc = existing.docs[0]
    console.log(`Exists: ${filename} -> ${doc.id}`)
  } else {
    doc = await payload.create({
      collection: 'media',
      data: { alt: path.parse(filename).name },
      filePath: fullPath,
      overrideAccess: true,
      overwriteExistingFiles: true,
    })
    console.log(`Created: ${filename} -> ${doc.id}`)
  }

  mapping[oldPath] = doc.id
  // Also map URL-encoded variants seen in content JSON (e.g. %20 instead of spaces)
  mapping[`/uploads/${encodeURIComponent(filename).replace(/%2F/g, '/')}`] = doc.id
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'media-mapping.json'),
  JSON.stringify(mapping, null, 2),
)
console.log(`\nWrote mapping for ${Object.keys(mapping).length} entries to scripts/media-mapping.json`)

await payload.destroy()
process.exit(0)
