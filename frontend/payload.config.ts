import path from 'path'
import { fileURLToPath } from 'url'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig, type CollectionConfig, type Field, type GlobalConfig } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

type RequestUser = { id?: unknown; role?: string } | null | undefined

const publicRead = () => true
const loggedInOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)
const isAdmin = ({ req }: { req: { user?: RequestUser } }) => req.user?.role === 'admin'

// Los administradores pueden gestionar cualquier usuario; los editores solo
// pueden ver/actualizar su propia cuenta (para cambiar su contraseña, etc.)
const isAdminOrSelf = ({ req }: { req: { user?: RequestUser } }) => {
  if (!req.user) return false
  if (req.user.role === 'admin') return true
  return { id: { equals: req.user.id } }
}

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      label: 'Rol',
      defaultValue: 'editor',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        // Solo un administrador puede asignar o cambiar roles (evita que un
        // editor se autopromueva a administrador).
        update: isAdmin,
      },
    },
  ],
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
      label: 'Texto alternativo',
    },
  ],
}

// ---- Reusable field helpers -------------------------------------------------

const text = (name: string, label: string): Field => ({
  name,
  type: 'text',
  label,
})

const textarea = (name: string, label: string): Field => ({
  name,
  type: 'textarea',
  label,
})

const textList = (name: string, label: string): Field => ({
  name,
  type: 'array',
  label,
  fields: [text('texto', 'Texto')],
})

const image = (name: string, label: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  label,
})

const imageList = (name: string, label: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  hasMany: true,
  label,
})

const linkArray = (name: string, label: string): Field => ({
  name,
  type: 'array',
  label,
  fields: [text('label', 'Texto'), text('href', 'Enlace')],
})

const heroGroup = (name: string, label: string): Field => ({
  name,
  type: 'group',
  label,
  fields: [
    textarea('subtitulo', 'Subtitulo'),
    text('ctaTexto', 'Texto del boton'),
    textList('pills', 'Etiquetas'),
  ],
})

const bloquesGroup = (name: string, label: string): Field => ({
  name,
  type: 'group',
  label,
  fields: [
    {
      name: 'bloques',
      type: 'array',
      label: 'Bloques',
      fields: [text('titulo', 'Titulo'), textarea('contenido', 'Contenido')],
    },
  ],
})

// ---- Globals -----------------------------------------------------------------

const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Configuracion general',
  access: { read: publicRead, update: isAdmin },
  fields: [
    image('logo', 'Logo'),
    linkArray('nav', 'Menu de navegacion'),
    heroGroup('heroHome', 'Hero - Home'),
    heroGroup('heroServicios', 'Hero - Servicios'),
    heroGroup('heroNosotros', 'Hero - Nosotros'),
    heroGroup('heroContacto', 'Hero - Contacto'),
    imageList('heroImagenes', 'Imagenes del hero'),
  ],
}

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    textarea('descripcion', 'Descripcion'),
    text('copyright', 'Texto de copyright'),
    text('facebook', 'Enlace a Facebook'),
    linkArray('serviciosLinks', 'Enlaces - Servicios'),
    linkArray('empresaLinks', 'Enlaces - Empresa'),
    linkArray('legalLinksIzquierda', 'Enlaces legales (izquierda)'),
    linkArray('legalLinksDerecha', 'Enlaces legales (derecha)'),
  ],
}

const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    {
      type: 'collapsible',
      label: 'Propuesta',
      fields: [
        text('propuestaTag', 'Etiqueta'),
        text('propuestaTitulo', 'Titulo'),
        textarea('propuestaSubtitulo', 'Subtitulo'),
        textList('propuestaItems', 'Items'),
      ],
    },
    {
      type: 'collapsible',
      label: 'Enfoque',
      fields: [
        text('enfoqueHeader', 'Titulo de seccion'),
        textarea('enfoqueSubtitulo', 'Subtitulo'),
        {
          name: 'enfoqueCards',
          type: 'array',
          label: 'Tarjetas',
          fields: [text('emoji', 'Emoji'), text('titulo', 'Titulo'), textarea('descripcion', 'Descripcion')],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Crecimiento',
      fields: [
        text('crecimientoTitulo', 'Titulo'),
        textarea('crecimientoSubtitulo', 'Subtitulo'),
        {
          name: 'crecimientoCards',
          type: 'array',
          label: 'Tarjetas',
          fields: [text('titulo', 'Titulo'), textarea('descripcion', 'Descripcion'), imageList('imagenes', 'Imagenes')],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Proceso',
      fields: [
        text('procesoHeader', 'Titulo de seccion'),
        textarea('procesoSubtitulo', 'Subtitulo'),
        {
          name: 'procesoSteps',
          type: 'array',
          label: 'Pasos',
          fields: [text('titulo', 'Titulo'), textarea('descripcion', 'Descripcion')],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Innovacion',
      fields: [
        text('innovacionHeader', 'Titulo de seccion'),
        textarea('innovacionSubtitulo', 'Subtitulo'),
        {
          name: 'innovacionFeatures',
          type: 'array',
          label: 'Caracteristicas',
          fields: [text('emoji', 'Emoji'), text('titulo', 'Titulo'), textarea('descripcion', 'Descripcion')],
        },
        imageList('innovacionImagenes', 'Imagenes'),
      ],
    },
  ],
}

const Servicios: GlobalConfig = {
  slug: 'servicios',
  label: 'Servicios',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    {
      type: 'collapsible',
      label: 'Introduccion',
      fields: [
        text('introTitulo', 'Titulo'),
        textarea('introSubtitulo', 'Subtitulo'),
        textarea('introDesc', 'Descripcion'),
        text('introPorqueTitulo', 'Titulo - Por que Bravas'),
        textarea('introPorqueSubtitulo', 'Subtitulo - Por que Bravas'),
        textarea('introPorqueDesc', 'Descripcion - Por que Bravas'),
      ],
    },
    {
      type: 'collapsible',
      label: 'Nuestros servicios',
      fields: [
        text('nuestrosServiciosTitulo', 'Titulo'),
        textarea('nuestrosServiciosSubtitulo', 'Subtitulo'),
        {
          name: 'servicios',
          type: 'array',
          label: 'Servicios',
          fields: [
            text('titulo', 'Titulo'),
            textarea('descripcion', 'Descripcion'),
            textList('items', 'Items'),
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Soluciones integrales',
      fields: [
        text('integralTitulo', 'Titulo'),
        textarea('integralSubtitulo', 'Subtitulo'),
        image('integralImagenPrincipal', 'Imagen principal'),
        {
          name: 'integralCards',
          type: 'array',
          label: 'Tarjetas',
          fields: [text('titulo', 'Titulo'), textarea('descripcion', 'Descripcion')],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Herramientas',
      fields: [
        text('herramientasTitulo', 'Titulo'),
        textarea('herramientasSubtitulo', 'Subtitulo'),
        {
          name: 'herramientasCategorias',
          type: 'array',
          label: 'Categorias',
          fields: [
            text('categoria', 'Nombre de categoria'),
            text('color', 'Color (hex)'),
            {
              name: 'herramientas',
              type: 'array',
              label: 'Herramientas',
              fields: [
                text('nombre', 'Nombre'),
                text('descripcion', 'Descripcion'),
                text('emoji', 'Emoji'),
                text('bg', 'Color de fondo (hex)'),
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Preguntas frecuentes',
      fields: [
        {
          name: 'faqItems',
          type: 'array',
          label: 'Preguntas',
          fields: [text('pregunta', 'Pregunta'), textarea('respuesta', 'Respuesta')],
        },
      ],
    },
  ],
}

const Nosotros: GlobalConfig = {
  slug: 'nosotros',
  label: 'Nosotros',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    {
      type: 'collapsible',
      label: 'Quienes somos',
      fields: [
        text('quienesTag', 'Etiqueta'),
        text('quienesTitulo', 'Titulo'),
        textarea('quienesDesc1', 'Descripcion 1'),
        textarea('quienesDesc2', 'Descripcion 2'),
        image('quienesImagen', 'Imagen'),
        text('statProyectos', 'Estadistica - Proyectos'),
        text('statSatisfaccion', 'Estadistica - Satisfaccion'),
        text('statAnios', 'Estadistica - Anios'),
      ],
    },
    {
      type: 'collapsible',
      label: 'Mision y vision',
      fields: [
        text('misionTitulo', 'Titulo - Mision'),
        textarea('misionDesc', 'Descripcion - Mision'),
        text('visionTitulo', 'Titulo - Vision'),
        textarea('visionDesc', 'Descripcion - Vision'),
      ],
    },
    {
      type: 'collapsible',
      label: 'Equipo',
      fields: [
        textarea('equipoSubtitulo', 'Subtitulo'),
        {
          name: 'teamMembers',
          type: 'array',
          label: 'Miembros del equipo',
          fields: [
            text('nombre', 'Nombre'),
            text('rol', 'Rol'),
            textarea('descripcion', 'Descripcion'),
            image('foto', 'Foto'),
            text('linkedin', 'Enlace de LinkedIn'),
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Por que elegirnos',
      fields: [
        text('porqueTag', 'Etiqueta'),
        text('porqueTitulo', 'Titulo'),
        textarea('porqueSubtitulo', 'Subtitulo'),
        textList('porqueItems', 'Items'),
      ],
    },
  ],
}

const Contacto: GlobalConfig = {
  slug: 'contacto',
  label: 'Contacto',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    {
      type: 'collapsible',
      label: 'Panel de contacto',
      fields: [
        text('panelTag', 'Etiqueta'),
        text('panelTitulo', 'Titulo'),
        textarea('panelDescripcion', 'Descripcion'),
        textList('panelItems', 'Items'),
      ],
    },
    {
      type: 'collapsible',
      label: 'Datos de contacto',
      fields: [
        text('email', 'Email'),
        text('whatsapp', 'WhatsApp (numero)'),
        text('direccion', 'Direccion'),
        text('instagram', 'Usuario de Instagram'),
        text('linkedin', 'Enlace de LinkedIn'),
      ],
    },
  ],
}

const Legal: GlobalConfig = {
  slug: 'legal',
  label: 'Legal',
  access: { read: publicRead, update: loggedInOnly },
  fields: [
    bloquesGroup('privacidad', 'Politica de privacidad'),
    bloquesGroup('cookies', 'Cookies'),
    bloquesGroup('terminos', 'Terminos y condiciones'),
  ],
}

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
  globals: [SiteConfig, Footer, Home, Servicios, Nosotros, Contacto, Legal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'bravas-local-payload-secret-change-me',
  db,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
