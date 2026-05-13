import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contacto',
  title: '📞 Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: '📧 Email de contacto',
      type: 'string',
      description: 'El email que aparece en la página de contacto y footer. Ej: "hola@bravas.com"',
    }),
    defineField({
      name: 'whatsapp',
      title: '📱 Número de WhatsApp',
      type: 'string',
      description: 'Con código de país, sin espacios ni símbolos. Ej: "5493511234567" (Argentina +54, Córdoba 351)',
    }),
    defineField({
      name: 'instagram',
      title: '📸 Usuario de Instagram',
      type: 'string',
      description: 'Solo el usuario, sin el @. Ej: "bravasmarketing"',
    }),
    defineField({
      name: 'linkedin',
      title: '💼 URL de LinkedIn',
      type: 'url',
      description: 'La URL completa. Ej: "https://www.linkedin.com/company/bravas-marketing"',
    }),
    defineField({
      name: 'direccion',
      title: '📍 Dirección o ciudad',
      type: 'string',
      description: 'Ej: "Córdoba, Argentina"',
    }),
  ],
  preview: { prepare: () => ({ title: '📞 Contacto' }) },
})
