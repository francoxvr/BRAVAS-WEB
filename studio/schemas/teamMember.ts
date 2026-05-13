import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: '👤 Nombre completo',
      type: 'string',
      description: 'Ej: "Valentina Cruz"',
    }),
    defineField({
      name: 'rol',
      title: '💼 Rol o cargo',
      type: 'string',
      description: 'Ej: "Directora Creativa"',
    }),
    defineField({
      name: 'descripcion',
      title: '📝 Descripción',
      type: 'text',
      rows: 3,
      description: 'Breve descripción del integrante. Máximo 2-3 líneas.',
    }),
    defineField({
      name: 'foto',
      title: '📷 Foto',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto del integrante. Recomendado: cuadrada o vertical, 400x400px.',
    }),
    defineField({
      name: 'orden',
      title: '🔢 Orden de aparición',
      type: 'number',
      description: 'Número que define el orden. 1 aparece primero, 2 segundo, etc.',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'rol', media: 'foto' },
  },
  orderings: [{
    title: 'Orden de aparición',
    name: 'ordenAsc',
    by: [{ field: 'orden', direction: 'asc' }],
  }],
})
