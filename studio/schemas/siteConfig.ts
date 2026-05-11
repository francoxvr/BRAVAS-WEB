import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    // LOGO
    defineField({
      name: 'logo',
      title: '🏷️ Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Logo principal del sitio (recomendado: cuadrado, PNG con fondo transparente)',
    }),

    // NAVEGACIÓN
    defineField({
      name: 'navItems',
      title: '🧭 Menú de navegación',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Texto', type: 'string' },
          { name: 'href', title: 'Enlace (ej: /servicios)', type: 'string' },
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      }],
      initialValue: [
        { label: 'Home', href: '/' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Contacto', href: '/contacto' },
      ],
    }),

    // HEROES
    defineField({
      name: 'heroHome',
      title: '🏠 Hero — Inicio',
      type: 'object',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Pills (etiquetas)', type: 'array', of: [{ type: 'string' }] },
      ],
      initialValue: {
        subtitulo: 'Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca.',
        ctaTexto: 'Impulsa tu Marca Ahora',
        pills: ['Estrategia Digital', 'Branding', 'Performance Ads'],
      },
    }),
    defineField({
      name: 'heroServicios',
      title: '⚙️ Hero — Servicios',
      type: 'object',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Pills (etiquetas)', type: 'array', of: [{ type: 'string' }] },
      ],
      initialValue: {
        subtitulo: 'Soluciones digitales completas para hacer crecer tu negocio y alcanzar tus objetivos.',
        ctaTexto: 'Conocé nuestros servicios',
        pills: ['Marketing Digital', 'Publicidad Paga', 'Branding'],
      },
    }),
    defineField({
      name: 'heroNosotros',
      title: '👥 Hero — Nosotros',
      type: 'object',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Pills (etiquetas)', type: 'array', of: [{ type: 'string' }] },
      ],
      initialValue: {
        subtitulo: 'Conocé el equipo detrás de cada estrategia y por qué somos el partner ideal para tu marca.',
        ctaTexto: 'Hablemos de tu proyecto',
        pills: ['Equipo apasionado', 'Resultados reales', 'Compromiso total'],
      },
    }),
    defineField({
      name: 'heroContacto',
      title: '📞 Hero — Contacto',
      type: 'object',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Pills (etiquetas)', type: 'array', of: [{ type: 'string' }] },
      ],
      initialValue: {
        subtitulo: '¿Listo para llevar tu marca al siguiente nivel? Contanos tu proyecto y arrancamos juntos.',
        ctaTexto: 'Escribinos ahora',
        pills: ['Respuesta en 24hs', 'Consulta sin costo', 'Sin compromiso'],
      },
    }),

    // FOOTER
    defineField({
      name: 'footerDescripcion',
      title: '🦶 Footer — Descripción',
      type: 'text',
      rows: 2,
      initialValue: 'Transformamos tu presencia digital con estrategias innovadoras que hacen brillar tu marca en el mundo online.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Configuración del Sitio' }) },
})
