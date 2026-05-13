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
          .title('Panel de Contenido')
          .items([

            // ── PÁGINAS ──────────────────────────────────────────
            S.listItem()
              .title('🏠 Home')
              .child(
                S.list().title('🏠 Home — Secciones').items([
                  S.listItem().title('1️⃣ Propuesta — ¿Qué hacemos?').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                  S.listItem().title('2️⃣ Enfoque — Nuestro Enfoque').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                  S.listItem().title('3️⃣ Crecimiento').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                  S.listItem().title('4️⃣ Proceso de Trabajo').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                  S.listItem().title('5️⃣ Innovación Constante').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                ])
              ),

            S.listItem()
              .title('⚙️ Servicios')
              .child(
                S.list().title('⚙️ Servicios — Secciones').items([
                  S.listItem().title('1️⃣ Nuestros Servicios').child(S.document().schemaType('servicios').documentId('servicios').views([S.view.form()])),
                  S.listItem().title('2️⃣ Soluciones Integrales').child(S.document().schemaType('servicios').documentId('servicios').views([S.view.form()])),
                  S.listItem().title('3️⃣ Preguntas Frecuentes (FAQ)').child(S.document().schemaType('servicios').documentId('servicios').views([S.view.form()])),
                ])
              ),

            S.listItem()
              .title('👥 Nosotros')
              .child(
                S.list().title('👥 Nosotros — Secciones').items([
                  S.listItem().title('1️⃣ Quiénes Somos').child(S.document().schemaType('nosotros').documentId('nosotros').views([S.view.form()])),
                  S.listItem().title('2️⃣ Misión & Visión').child(S.document().schemaType('nosotros').documentId('nosotros').views([S.view.form()])),
                  S.listItem().title('3️⃣ ¿Por qué elegirnos?').child(S.document().schemaType('nosotros').documentId('nosotros').views([S.view.form()])),
                  S.listItem().title('🧑‍🤝‍🧑 Equipo').child(S.documentTypeList('teamMember').title('Miembros del equipo')),
                ])
              ),

            S.listItem()
              .title('📞 Contacto')
              .child(S.document().schemaType('contacto').documentId('contacto').views([S.view.form()])),

            S.divider(),

            // ── HERO ─────────────────────────────────────────────
            S.listItem()
              .title('🖼️ Hero — Todas las páginas')
              .child(
                S.list().title('🖼️ Hero — Por página').items([
                  S.listItem().title('🖼️ Imágenes del carrusel (todas las páginas)').child(S.document().schemaType('home').documentId('home').views([S.view.form()])),
                  S.listItem().title('🏠 Hero — Inicio').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                  S.listItem().title('⚙️ Hero — Servicios').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                  S.listItem().title('👥 Hero — Nosotros').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                  S.listItem().title('📞 Hero — Contacto').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                ])
              ),

            // ── FOOTER ───────────────────────────────────────────
            S.listItem()
              .title('🦶 Footer')
              .child(
                S.list().title('🦶 Footer — Secciones').items([
                  S.listItem().title('🏷️ Logo & Descripción').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                  S.listItem().title('🧭 Links de navegación').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                  S.listItem().title('📱 Redes Sociales').child(S.document().schemaType('contacto').documentId('contacto').views([S.view.form()])),
                  S.listItem().title('📞 Datos de Contacto').child(S.document().schemaType('contacto').documentId('contacto').views([S.view.form()])),
                  S.listItem().title('©️ Texto del Copyright').child(S.document().schemaType('siteConfig').documentId('siteConfig').views([S.view.form()])),
                ])
              ),

          ])
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
