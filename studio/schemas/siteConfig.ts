import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: '⚙️ Configuración General',
  type: 'document',
  groups: [
    { name: 'logo', title: '🏷️ Logo & Navegación' },
    { name: 'heroHome', title: '🏠 Hero — Inicio' },
    { name: 'heroServicios', title: '⚙️ Hero — Servicios' },
    { name: 'heroNosotros', title: '👥 Hero — Nosotros' },
    { name: 'heroContacto', title: '📞 Hero — Contacto' },
    { name: 'footer', title: '🦶 Footer' },
  ],
  fields: [
    // ─── LOGO & NAVEGACIÓN ───────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Logo del sitio',
      type: 'image',
      options: { hotspot: true },
      group: 'logo',
      description: '🏷️ El logo que aparece en el header y footer. Recomendado: cuadrado, PNG con fondo transparente.',
    }),
    defineField({
      name: 'navItems',
      title: 'Menú de navegación',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Texto del menú', type: 'string', description: 'Ej: "Home", "Servicios"' },
          { name: 'href', title: 'Enlace', type: 'string', description: 'Ej: "/", "/servicios", "/nosotros"' },
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      }],
      group: 'logo',
      description: 'Los links del menú superior. El orden acá es el orden que aparece en el sitio.',
    }),

    // ─── HERO HOME ───────────────────────────────────────────────
    defineField({
      name: 'heroHome',
      title: 'Textos del Hero — Inicio',
      type: 'object',
      group: 'heroHome',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2, description: 'El texto que aparece debajo de "BRAVAS MARKETING".' },
        { name: 'ctaTexto', title: 'Texto del botón principal', type: 'string', description: 'Ej: "Impulsa tu Marca Ahora"' },
        { name: 'pills', title: 'Etiquetas (pills)', type: 'array', of: [{ type: 'string' }], description: 'Las 3 etiquetas debajo del botón. Ej: "Estrategia Digital"' },
      ],
    }),

    // ─── HERO SERVICIOS ──────────────────────────────────────────
    defineField({
      name: 'heroServicios',
      title: 'Textos del Hero — Servicios',
      type: 'object',
      group: 'heroServicios',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Etiquetas (pills)', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // ─── HERO NOSOTROS ───────────────────────────────────────────
    defineField({
      name: 'heroNosotros',
      title: 'Textos del Hero — Nosotros',
      type: 'object',
      group: 'heroNosotros',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Etiquetas (pills)', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // ─── HERO CONTACTO ───────────────────────────────────────────
    defineField({
      name: 'heroContacto',
      title: 'Textos del Hero — Contacto',
      type: 'object',
      group: 'heroContacto',
      fields: [
        { name: 'subtitulo', title: 'Subtítulo', type: 'text', rows: 2 },
        { name: 'ctaTexto', title: 'Texto del botón', type: 'string' },
        { name: 'pills', title: 'Etiquetas (pills)', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // ─── FOOTER ──────────────────────────────────────────────────
    defineField({
      name: 'footerDescripcion',
      title: 'Descripción del footer',
      type: 'text',
      rows: 2,
      group: 'footer',
      description: 'El texto que aparece debajo del logo en el footer.',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright — Texto del pie de página',
      type: 'string',
      group: 'footer',
      description: 'Ej: "BRAVAS MARKETING • Innovación Digital • Resultados Reales"',
    }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Configuración General' }) },
})
