import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    defineField({ name: 'propuestaTitulo', title: '📌 Propuesta — Título', type: 'string', initialValue: 'Estrategias digitales que generan resultados.' }),
    defineField({ name: 'propuestaSubtitulo', title: '📌 Propuesta — Subtítulo', type: 'text', rows: 2 }),
    defineField({ name: 'propuestaItems', title: '📌 Propuesta — Lista de ítems', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'enfoqueSubtitulo', title: '🎯 Enfoque — Subtítulo', type: 'text', rows: 2 }),
    defineField({
      name: 'enfoqueCards', title: '🎯 Enfoque — Cards', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
      ], preview: { select: { title: 'titulo' } } }],
    }),
    defineField({ name: 'crecimientoTitulo', title: '📈 Crecimiento — Título', type: 'string' }),
    defineField({ name: 'crecimientoSubtitulo', title: '📈 Crecimiento — Subtítulo', type: 'text', rows: 2 }),
    defineField({
      name: 'crecimientoCards', title: '📈 Crecimiento — Cards (3)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
        { name: 'imagenes', title: 'Imágenes (máx 2)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
      ], preview: { select: { title: 'titulo' } } }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({ name: 'procesoSubtitulo', title: '⚙️ Proceso — Subtítulo', type: 'string' }),
    defineField({
      name: 'procesoSteps', title: '⚙️ Proceso — Pasos (4)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
      ], preview: { select: { title: 'titulo' } } }],
    }),
    defineField({ name: 'innovacionSubtitulo', title: '💡 Innovación — Subtítulo', type: 'text', rows: 2 }),
    defineField({
      name: 'innovacionFeatures', title: '💡 Innovación — Features (4 cards)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'titulo', title: 'Título', type: 'string' },
        { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
      ], preview: { select: { title: 'titulo' } } }],
    }),
    defineField({
      name: 'innovacionImagenes', title: '💡 Innovación — Imágenes (3)',
      description: 'Subí exactamente 3 imágenes para la grilla de innovación',
      type: 'array', of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'heroImagenes', title: '🖼️ Hero — Imágenes del carrusel principal',
      description: 'Imágenes que rotan en el hero de todas las páginas. Recomendado: mínimo 5 imágenes.',
      type: 'array', of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Página de Inicio' }) },
})
