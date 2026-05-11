import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contacto',
  title: 'Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: '📧 Email de contacto',
      type: 'string',
      initialValue: 'hola@bravas.com',
    }),
    defineField({
      name: 'whatsapp',
      title: '📱 Número de WhatsApp (con código de país, ej: 5491123456789)',
      type: 'string',
      initialValue: '5491123456789',
    }),
    defineField({
      name: 'instagram',
      title: '📸 Instagram (usuario sin @)',
      type: 'string',
      initialValue: 'bravasmarketing',
    }),
    defineField({
      name: 'linkedin',
      title: '💼 LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'direccion',
      title: '📍 Dirección (opcional)',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Datos de Contacto' }),
  },
})
