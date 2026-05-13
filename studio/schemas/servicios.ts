import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicios',
  title: '⚙️ Servicios',
  type: 'document',
  groups: [
    { name: 'nuestros', title: '1️⃣ Nuestros Servicios' },
    { name: 'integrales', title: '2️⃣ Soluciones Integrales' },
    { name: 'faq', title: '3️⃣ Preguntas Frecuentes (FAQ)' },
  ],
  fields: [
    // ─── 1. NUESTROS SERVICIOS ───────────────────────────────────
    defineField({
      name: 'servicios',
      title: 'Cards de servicios (4 servicios)',
      type: 'array',
      group: 'nuestros',
      of: [{
        type: 'object',
        title: 'Servicio',
        fields: [
          { name: 'titulo', title: 'Nombre del servicio', type: 'string', description: 'Ej: "Marketing Digital"' },
          { name: 'descripcion', title: 'Descripción corta', type: 'text', rows: 2 },
          { name: 'items', title: 'Ítems incluidos', type: 'array', of: [{ type: 'string' }], description: 'Los puntos que aparecen dentro de la card. Ej: "Gestión de redes sociales"' },
        ],
        preview: { select: { title: 'titulo' } },
      }],
      description: 'Las 4 cards principales de servicios.',
    }),

    // ─── 2. SOLUCIONES INTEGRALES ────────────────────────────────
    defineField({
      name: 'integralImagenPrincipal',
      title: 'Imagen principal de Soluciones Integrales',
      type: 'image',
      options: { hotspot: true },
      group: 'integrales',
      description: 'La imagen grande de la card "Gestión de Contenidos & Redes". Tamaño recomendado: 500x180px.',
    }),

    // ─── 3. FAQ ──────────────────────────────────────────────────
    defineField({
      name: 'faqItems',
      title: 'Preguntas y respuestas',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        title: 'Pregunta',
        fields: [
          { name: 'pregunta', title: 'Pregunta', type: 'string', description: 'Ej: "¿Cuánto tiempo tarda en verse resultados?"' },
          { name: 'respuesta', title: 'Respuesta', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'pregunta' } },
      }],
      description: 'Las preguntas frecuentes del accordion. Hacé click para expandir cada una en el sitio.',
    }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Servicios' }) },
})
