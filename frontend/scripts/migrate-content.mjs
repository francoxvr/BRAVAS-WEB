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

const CONTENT_ROOT = path.join(process.cwd(), 'tina', 'content')
const mapping = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'media-mapping.json'), 'utf8'))

function mediaId(value) {
  if (!value) return null
  const id = mapping[value] ?? mapping[decodeURIComponent(value)]
  if (!id) {
    console.warn(`  ! No media mapping found for: ${value}`)
    return null
  }
  return id
}

function mediaIds(values) {
  if (!Array.isArray(values)) return []
  return values.map(mediaId).filter((id) => id !== null)
}

function readJSON(relPath) {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_ROOT, relPath), 'utf8'))
}

// ---- Per-global transforms --------------------------------------------------

function transformSiteConfig(src) {
  return {
    logo: mediaId(src.logo),
    nav: src.nav,
    heroHome: src.heroHome,
    heroServicios: src.heroServicios,
    heroNosotros: src.heroNosotros,
    heroContacto: src.heroContacto,
    heroImagenes: mediaIds(src.heroImagenes),
  }
}

function transformFooter(src) {
  return { ...src }
}

function transformHome(src) {
  return {
    ...src,
    crecimientoCards: (src.crecimientoCards ?? []).map((card) => ({
      ...card,
      imagenes: mediaIds(card.imagenes),
    })),
    innovacionImagenes: mediaIds(src.innovacionImagenes),
  }
}

function transformServicios(src) {
  return {
    ...src,
    integralImagenPrincipal: mediaId(src.integralImagenPrincipal),
  }
}

function transformNosotros(src) {
  return {
    ...src,
    quienesImagen: mediaId(src.quienesImagen),
    teamMembers: (src.teamMembers ?? []).map((member) => ({
      ...member,
      foto: mediaId(member.foto),
    })),
  }
}

function transformContacto(src) {
  return { ...src }
}

function transformLegal(src) {
  return { ...src }
}

const sources = [
  { slug: 'site-config', file: 'config.json', transform: transformSiteConfig },
  { slug: 'footer', file: 'footer.json', transform: transformFooter },
  { slug: 'home', file: 'pages/home.json', transform: transformHome },
  { slug: 'servicios', file: 'pages/servicios.json', transform: transformServicios },
  { slug: 'nosotros', file: 'pages/nosotros.json', transform: transformNosotros },
  { slug: 'contacto', file: 'pages/contacto.json', transform: transformContacto },
  { slug: 'legal', file: 'pages/legal.json', transform: transformLegal },
]

for (const { slug, file, transform } of sources) {
  console.log(`Migrating ${slug} <- ${file}`)
  const src = readJSON(file)
  const data = transform(src)
  await payload.updateGlobal({ slug, data, overrideAccess: true })
  console.log(`  done`)
}

console.log('\nCONTENT MIGRATION DONE')
await payload.destroy()
process.exit(0)
