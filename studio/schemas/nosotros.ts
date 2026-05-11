import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'nosotros',
  title: 'Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'quienesTitulo',
      title: '👥 Quiénes somos — Título',
      type: 'string',
      initialValue: 'Somos Bravas. Y lo damos todo.',
    }),
    defineField({
      name: 'quienesDesc1',
      title: '👥 Quiénes somos — Párrafo 1',
      type: 'text',
      rows: 3,
      initialValue: 'Una agencia digital nacida con la misión de transformar marcas a través de estrategias creativas, datos y tecnología. Creemos que el marketing debe ser claro, medible y sobre todo, efectivo.',
    }),
    defineField({
      name: 'quienesDesc2',
      title: '👥 Quiénes somos — Párrafo 2',
      type: 'text',
      rows: 3,
      initialValue: 'Trabajamos junto a cada cliente como si el negocio fuera nuestro. Con compromiso total y orientación a resultados desde el primer día.',
    }),
    defineField({
      name: 'statProyectos',
      title: '📊 Estadística — Proyectos (ej: +150)',
      type: 'string',
      initialValue: '+150',
    }),
    defineField({
      name: 'statSatisfaccion',
      title: '📊 Estadística — Satisfacción (ej: 92%)',
      type: 'string',
      initialValue: '92%',
    }),
    defineField({
      name: 'statAnios',
      title: '📊 Estadística — Años (ej: 5+)',
      type: 'string',
      initialValue: '5+',
    }),
    defineField({
      name: 'quienesImagen',
      title: '👥 Quiénes somos — Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'misionTitulo',
      title: '🎯 Misión — Título',
      type: 'string',
      initialValue: 'Potenciar marcas que dejan huella.',
    }),
    defineField({
      name: 'misionDesc',
      title: '🎯 Misión — Descripción',
      type: 'text',
      rows: 3,
      initialValue: 'Diseñamos estrategias digitales claras, creativas y medibles que generan resultados reales y sostenibles para cada negocio que acompaña a Bravas.',
    }),
    defineField({
      name: 'visionTitulo',
      title: '🔭 Visión — Título',
      type: 'string',
      initialValue: 'Ser el partner que toda marca necesita.',
    }),
    defineField({
      name: 'visionDesc',
      title: '🔭 Visión — Descripción',
      type: 'text',
      rows: 3,
      initialValue: 'Convertirnos en el referente estratégico de PyMEs y emprendedores en Latinoamérica que buscan transformar su presencia digital con resultados reales.',
    }),
    defineField({
      name: 'porqueItems',
      title: '✅ ¿Por qué elegirnos? — Lista',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Resultados medibles desde la primera semana',
        'Transparencia total en cada reporte',
        'Estrategia personalizada, no genérica',
        'Equipo ágil sin burocracia',
        'Comunicación directa y constante',
        'Foco en el largo plazo de tu negocio',
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Nosotros' }),
  },
})
