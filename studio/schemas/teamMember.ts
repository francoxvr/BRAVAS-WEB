import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'rol',
      title: 'Rol / Cargo',
      type: 'string',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'rol', media: 'foto' },
  },
  orderings: [
    {
      title: 'Orden',
      name: 'ordenAsc',
      by: [{ field: 'orden', direction: 'asc' }],
    },
  ],
})
