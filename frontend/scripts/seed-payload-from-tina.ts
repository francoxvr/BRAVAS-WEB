import fs from 'fs/promises'
import path from 'path'
import { getPayload } from 'payload'
import config from '../payload.config'

const root = process.cwd()

const sources = [
  ['site-config', 'tina/content/config.json'],
  ['footer', 'tina/content/footer.json'],
  ['home', 'tina/content/pages/home.json'],
  ['servicios', 'tina/content/pages/servicios.json'],
  ['nosotros', 'tina/content/pages/nosotros.json'],
  ['contacto', 'tina/content/pages/contacto.json'],
  ['legal', 'tina/content/pages/legal.json'],
] as const

async function readJson(relativePath: string) {
  const file = path.join(root, relativePath)
  const raw = await fs.readFile(file, 'utf8')
  return JSON.parse(raw)
}

async function main() {
  const payload = await getPayload({ config })

  for (const [slug, file] of sources) {
    const content = await readJson(file)
    await payload.updateGlobal({
      slug,
      data: { content },
      overrideAccess: true,
    })
    payload.logger.info(`Seeded ${slug} from ${file}`)
  }

  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
