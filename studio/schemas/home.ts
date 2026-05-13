import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'home',
  title: '🏠 Home',
  type: 'document',
  groups: [
    { name: 'propuesta', title: '1️⃣ Propuesta — ¿Qué hacemos?' },
    { name: 'enfoque', title: '2️⃣ Enfoque — Nuestro Enfoque' },
    { name: 'crecimiento', title: '3️⃣ Crecimiento' },
    { name: 'proceso', title: '4️⃣ Proceso de Trabajo' },
    { name: 'innovacion', title: '5️⃣ Innovación Constante' },
  ],
  fields: [
    // ─── 1. PROPUESTA ────────────────────────────────────────────
    defineField({
      name: 'propuestaTitulo',
      title: 'Título principal',
      type: 'string',
      group: 'propuesta',
      description: 'El título grande que aparece en esta sección. Ej: "Estrategias digitales que generan resultados."',
    }),
    defineField({
      name: 'propuestaSubtitulo',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      group: 'propuesta',
      description: 'Texto descriptivo debajo del título. Máximo 2 líneas.',
    }),
    defineField({
      name: 'propuestaItems',
      title: 'Lista de servicios (6 ítems)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'propuesta',
      description: 'Los 6 ítems de la grilla. Hacé click en "Add item" para agregar o editar.',
    }),

    // ─── 2. ENFOQUE ──────────────────────────────────────────────
    defineField({
      name: 'enfoqueSubtitulo',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      group: 'enfoque',
      description: 'Texto que aparece debajo del título "Nuestro Enfoque".',
    }),
    defineField({
      name: 'enfoqueCards',
      title: 'Cards de servicios (6 cards)',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Card',
        fields: [
          { name: 'emoji', title: 'Emoji (ej: 🎯)', type: 'string', description: 'Un emoji que represente el servicio.' },
          { name: 'titulo', title: 'Título de la card', type: 'string' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'titulo', subtitle: 'descripcion' } },
      }],
      group: 'enfoque',
      description: 'Las 6 cards de servicios. Podés cambiar el emoji, título y descripción de cada una.',
    }),

    // ─── 3. CRECIMIENTO ──────────────────────────────────────────
    defineField({
      name: 'crecimientoTitulo',
      title: 'Título de la sección',
      type: 'string',
      group: 'crecimiento',
      description: 'Ej: "Impulsamos el crecimiento de tu negocio"',
    }),
    defineField({
      name: 'crecimientoSubtitulo',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      group: 'crecimiento',
    }),
    defineField({
      name: 'crecimientoCards',
      title: 'Cards con imágenes (máx 3)',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Card',
        fields: [
          { name: 'titulo', title: 'Título', type: 'string' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
          {
            name: 'imagenes',
            title: 'Imágenes (máx 2 — se alternan cada 5 segundos)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
          },
        ],
        preview: { select: { title: 'titulo' } },
      }],
      group: 'crecimiento',
      description: 'Cada card tiene un título, descripción y hasta 2 imágenes que rotan.',
      validation: (Rule) => Rule.max(3),
    }),

    // ─── 4. PROCESO ──────────────────────────────────────────────
    defineField({
      name: 'procesoSubtitulo',
      title: 'Subtítulo',
      type: 'string',
      group: 'proceso',
      description: 'Ej: "Metodología probada en 4 fases para maximizar resultados."',
    }),
    defineField({
      name: 'procesoSteps',
      title: 'Pasos (4 pasos)',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Paso',
        fields: [
          { name: 'titulo', title: 'Nombre del paso', type: 'string', description: 'Ej: "Análisis & Estrategia"' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'titulo' } },
      }],
      group: 'proceso',
      description: 'Los 4 pasos del proceso. El número se genera automáticamente.',
    }),

    // ─── 5. INNOVACIÓN ───────────────────────────────────────────
    defineField({
      name: 'innovacionSubtitulo',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      group: 'innovacion',
      description: 'Texto debajo de "Innovación Constante".',
    }),
    defineField({
      name: 'innovacionFeatures',
      title: 'Cards de características (4 cards)',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Característica',
        fields: [
          { name: 'emoji', title: 'Emoji (ej: 🚀)', type: 'string' },
          { name: 'titulo', title: 'Título', type: 'string' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'titulo' } },
      }],
      group: 'innovacion',
      description: 'Las 4 filas largas de esta sección.',
    }),
    defineField({
      name: 'innovacionImagenes',
      title: 'Imágenes de la grilla (exactamente 3)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'innovacion',
      description: 'Las 3 fotos a la derecha de las cards. Subí exactamente 3 imágenes horizontales.',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'heroImagenes',
      title: 'Imágenes del carrusel Hero (todas las páginas)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'innovacion',
      description: 'Las fotos que rotan en el hero de TODAS las páginas. Mínimo 5 imágenes horizontales (1536x1024px).',
    }),
  ],
  preview: { prepare: () => ({ title: '🏠 Página de Inicio' }) },
})
