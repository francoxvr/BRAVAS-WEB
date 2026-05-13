import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'nosotros',
  title: '👥 Nosotros',
  type: 'document',
  groups: [
    { name: 'quienes', title: '1️⃣ Quiénes Somos' },
    { name: 'mision', title: '2️⃣ Misión & Visión' },
    { name: 'porque', title: '3️⃣ ¿Por qué elegirnos?' },
  ],
  fields: [
    // ─── 1. QUIÉNES SOMOS ────────────────────────────────────────
    defineField({
      name: 'quienesTitulo',
      title: 'Título principal',
      type: 'string',
      group: 'quienes',
      description: 'Ej: "Somos Bravas. Y lo damos todo." — Podés usar \\n para saltar de línea.',
    }),
    defineField({
      name: 'quienesDesc1',
      title: 'Párrafo 1',
      type: 'text',
      rows: 3,
      group: 'quienes',
      description: 'Primer párrafo descriptivo de la agencia.',
    }),
    defineField({
      name: 'quienesDesc2',
      title: 'Párrafo 2',
      type: 'text',
      rows: 3,
      group: 'quienes',
      description: 'Segundo párrafo descriptivo.',
    }),
    defineField({
      name: 'quienesImagen',
      title: 'Foto de la sección',
      type: 'image',
      options: { hotspot: true },
      group: 'quienes',
      description: 'La imagen que aparece a la derecha del texto. Tamaño recomendado: 600x500px.',
    }),
    defineField({
      name: 'statProyectos',
      title: 'Estadística — Proyectos',
      type: 'string',
      group: 'quienes',
      description: 'Ej: "+150" — el número que aparece sobre la palabra "proyectos".',
    }),
    defineField({
      name: 'statSatisfaccion',
      title: 'Estadística — Satisfacción',
      type: 'string',
      group: 'quienes',
      description: 'Ej: "92%" — el porcentaje de satisfacción.',
    }),
    defineField({
      name: 'statAnios',
      title: 'Estadística — Años',
      type: 'string',
      group: 'quienes',
      description: 'Ej: "5+" — los años de experiencia.',
    }),

    // ─── 2. MISIÓN & VISIÓN ──────────────────────────────────────
    defineField({
      name: 'misionTitulo',
      title: 'Título de la Misión',
      type: 'string',
      group: 'mision',
      description: 'Ej: "Potenciar marcas que dejan huella."',
    }),
    defineField({
      name: 'misionDesc',
      title: 'Descripción de la Misión',
      type: 'text',
      rows: 3,
      group: 'mision',
    }),
    defineField({
      name: 'visionTitulo',
      title: 'Título de la Visión',
      type: 'string',
      group: 'mision',
      description: 'Ej: "Ser el partner que toda marca necesita."',
    }),
    defineField({
      name: 'visionDesc',
      title: 'Descripción de la Visión',
      type: 'text',
      rows: 3,
      group: 'mision',
    }),

    // ─── 3. POR QUÉ ELEGIRNOS ────────────────────────────────────
    defineField({
      name: 'porqueItems',
      title: 'Razones para elegirnos (6 ítems)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'porque',
      description: 'Los 6 puntos de la sección "¿Por qué elegirnos?". Hacé click en "Add item" para editar.',
    }),
  ],
  preview: { prepare: () => ({ title: '👥 Nosotros' }) },
})
