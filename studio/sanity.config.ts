import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'bravas-studio',
  title: 'Bravas CMS',
  projectId: '2npw9qr4',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido del sitio')
          .items([
            S.listItem()
              .title('⚙️ Configuración General')
              .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
            S.divider(),
            S.listItem()
              .title('🏠 Página de Inicio')
              .child(S.document().schemaType('home').documentId('home')),
            S.listItem()
              .title('🔧 Servicios')
              .child(S.document().schemaType('servicios').documentId('servicios')),
            S.listItem()
              .title('👥 Nosotros')
              .child(S.document().schemaType('nosotros').documentId('nosotros')),
            S.listItem()
              .title('📞 Contacto')
              .child(S.document().schemaType('contacto').documentId('contacto')),
            S.divider(),
            S.listItem()
              .title('🧑‍🤝‍🧑 Equipo')
              .child(S.documentTypeList('teamMember').title('Miembros del equipo')),
          ])
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
