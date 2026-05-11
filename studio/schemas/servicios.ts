import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicios',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'servicios', title: '⚙️ Nuestros Servicios', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
        { name: 'items', title: 'Ítems', type: 'array', of: [{ type: 'string' }] },
      ], preview: { select: { title: 'titulo' } } }],
    }),
    defineField({
      name: 'integralImagenPrincipal', title: '🖼️ Soluciones Integrales — Imagen principal',
      description: 'Imagen grande de la sección "Gestión de Contenidos & Redes"',
      type: 'image', options: { hotspot: true },
    }),
    defineField({
      name: 'faqItems', title: '❓ Preguntas Frecuentes', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'pregunta', title: 'Pregunta', type: 'string' },
        { name: 'respuesta', title: 'Respuesta', type: 'text', rows: 3 },
      ], preview: { select: { title: 'pregunta' } } }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Servicios' }) },
})
