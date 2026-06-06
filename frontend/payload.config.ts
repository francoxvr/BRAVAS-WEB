import path from 'path'
import { fileURLToPath } from 'url'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig, type CollectionConfig, type GlobalConfig } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const publicRead = () => true
const loggedInOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: loggedInOnly,
    create: loggedInOnly,
    update: loggedInOnly,
    delete: loggedInOnly,
  },
  fields: [],
}

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(dirname, 'public/uploads'),
  },
  access: {
    read: publicRead,
    create: loggedInOnly,
    update: loggedInOnly,
    delete: loggedInOnly,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt text',
    },
  ],
}

const tinaGlobal = (slug: string, label: string): GlobalConfig => ({
  slug,
  label,
  access: {
    read: publicRead,
    update: loggedInOnly,
  },
  fields: [
    {
      name: 'content',
      type: 'json',
      label: 'Contenido',
      required: true,
    },
  ],
})

const databaseUri = process.env.DATABASE_URI ?? ''
const db = databaseUri.startsWith('postgres')
  ? postgresAdapter({ pool: { connectionString: databaseUri } })
  : sqliteAdapter({ client: { url: databaseUri || 'file:./payload.db' } })

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  routes: {
    admin: '/payload-admin',
  },
  collections: [Users, Media],
  globals: [
    tinaGlobal('site-config', 'Configuracion general'),
    tinaGlobal('footer', 'Footer'),
    tinaGlobal('home', 'Home'),
    tinaGlobal('servicios', 'Servicios'),
    tinaGlobal('nosotros', 'Nosotros'),
    tinaGlobal('contacto', 'Contacto'),
    tinaGlobal('legal', 'Legal'),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'bravas-local-payload-secret-change-me',
  db,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
