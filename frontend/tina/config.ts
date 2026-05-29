import { defineConfig } from 'tinacms'

export default defineConfig({
  clientId: '9d19bec7-8aea-435a-8adb-a081ce91aab9',
  branch: 'main',
  token: '08fbd239f779ff6891919cd419136a398a0debbf',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'uploads', publicFolder: 'public' } },

  schema: {
    collections: [

      // ─── CONFIGURACIÓN GENERAL (Header + Footer + Hero) ──────────
      {
        name: 'config',
        label: '⚙️ Configuración General',
        path: 'tina/content',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'config' },
        fields: [
          {
            type: 'image',
            name: 'logo',
            label: 'Logo del sitio',
            description: 'Aparece en el header y footer. PNG con fondo transparente.',
          },
          {
            type: 'object',
            name: 'nav',
            label: '🧭 Menú de navegación',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Texto del link' },
              { type: 'string', name: 'href', label: 'Destino (ej: /servicios)' },
            ],
          },
          { type: 'string', name: 'footerDescripcion', label: '🦶 Descripción del footer', ui: { component: 'textarea' } },
          { type: 'string', name: 'footerCopyright', label: '©️ Texto del copyright' },
          {
            type: 'object', name: 'heroHome', label: '🏠 Hero — Inicio',
            fields: [
              { type: 'string', name: 'subtitulo', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaTexto', label: 'Texto del botón' },
              { type: 'string', name: 'pills', label: 'Etiquetas', list: true },
            ],
          },
          {
            type: 'object', name: 'heroServicios', label: '⚙️ Hero — Servicios',
            fields: [
              { type: 'string', name: 'subtitulo', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaTexto', label: 'Texto del botón' },
              { type: 'string', name: 'pills', label: 'Etiquetas', list: true },
            ],
          },
          {
            type: 'object', name: 'heroNosotros', label: '👥 Hero — Nosotros',
            fields: [
              { type: 'string', name: 'subtitulo', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaTexto', label: 'Texto del botón' },
              { type: 'string', name: 'pills', label: 'Etiquetas', list: true },
            ],
          },
          {
            type: 'object', name: 'heroContacto', label: '📞 Hero — Contacto',
            fields: [
              { type: 'string', name: 'subtitulo', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaTexto', label: 'Texto del botón' },
              { type: 'string', name: 'pills', label: 'Etiquetas', list: true },
            ],
          },
          {
            type: 'image', name: 'heroImagenes', label: '🖼️ Imágenes del carrusel hero', list: true,
            description: 'Las fotos que rotan en el hero de todas las páginas.',
          },
        ],
      },

      // ─── HOME ────────────────────────────────────────────────────
      {
        name: 'home',
        label: '🏠 Home',
        path: 'tina/content/pages',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'home' },
        fields: [
          // Propuesta
          { type: 'string', name: 'propuestaTitulo', label: '1️⃣ Título principal' },
          { type: 'string', name: 'propuestaSubtitulo', label: '1️⃣ Subtítulo', ui: { component: 'textarea' } },
          { type: 'string', name: 'propuestaItems', label: '1️⃣ Lista de servicios', list: true },
          // Enfoque
          { type: 'string', name: 'enfoqueSubtitulo', label: '2️⃣ Subtítulo del enfoque', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'enfoqueCards', label: '2️⃣ Cards de enfoque', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'emoji', label: 'Emoji' },
              { type: 'string', name: 'titulo', label: 'Título' },
              { type: 'string', name: 'descripcion', label: 'Descripción', ui: { component: 'textarea' } },
            ],
          },
          // Crecimiento
          { type: 'string', name: 'crecimientoTitulo', label: '3️⃣ Título crecimiento' },
          { type: 'string', name: 'crecimientoSubtitulo', label: '3️⃣ Subtítulo crecimiento', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'crecimientoCards', label: '3️⃣ Cards de crecimiento', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'titulo', label: 'Título' },
              { type: 'string', name: 'descripcion', label: 'Descripción', ui: { component: 'textarea' } },
              { type: 'image', name: 'imagenes', label: 'Imágenes (máx 2)', list: true },
            ],
          },
          // Proceso
          { type: 'string', name: 'procesoSubtitulo', label: '4️⃣ Subtítulo del proceso' },
          {
            type: 'object', name: 'procesoSteps', label: '4️⃣ Pasos del proceso', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'titulo', label: 'Nombre del paso' },
              { type: 'string', name: 'descripcion', label: 'Descripción', ui: { component: 'textarea' } },
            ],
          },
          // Innovación
          { type: 'string', name: 'innovacionSubtitulo', label: '5️⃣ Subtítulo innovación', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'innovacionFeatures', label: '5️⃣ Cards de innovación', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'emoji', label: 'Emoji' },
              { type: 'string', name: 'titulo', label: 'Título' },
              { type: 'string', name: 'descripcion', label: 'Descripción', ui: { component: 'textarea' } },
            ],
          },
          { type: 'image', name: 'innovacionImagenes', label: '5️⃣ Imágenes innovación', list: true },
        ],
      },

      // ─── SERVICIOS ───────────────────────────────────────────────
      {
        name: 'servicios',
        label: '⚙️ Servicios',
        path: 'tina/content/pages',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'servicios' },
        fields: [
          {
            type: 'object', name: 'servicios', label: '1️⃣ Nuestros Servicios', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'titulo', label: 'Nombre del servicio' },
              { type: 'string', name: 'descripcion', label: 'Descripción corta', ui: { component: 'textarea' } },
              { type: 'string', name: 'items', label: 'Ítems incluidos', list: true },
            ],
          },
          { type: 'image', name: 'integralImagenPrincipal', label: '2️⃣ Imagen Soluciones Integrales' },
          {
            type: 'object', name: 'faqItems', label: '3️⃣ Preguntas Frecuentes', list: true,
            ui: { itemProps: (item) => ({ label: item?.pregunta }) },
            fields: [
              { type: 'string', name: 'pregunta', label: 'Pregunta' },
              { type: 'string', name: 'respuesta', label: 'Respuesta', ui: { component: 'textarea' } },
            ],
          },
        ],
      },

      // ─── NOSOTROS ────────────────────────────────────────────────
      {
        name: 'nosotros',
        label: '👥 Nosotros',
        path: 'tina/content/pages',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'nosotros' },
        fields: [
          { type: 'string', name: 'quienesTitulo', label: '1️⃣ Título principal' },
          { type: 'string', name: 'quienesDesc1', label: '1️⃣ Párrafo 1', ui: { component: 'textarea' } },
          { type: 'string', name: 'quienesDesc2', label: '1️⃣ Párrafo 2', ui: { component: 'textarea' } },
          { type: 'image', name: 'quienesImagen', label: '1️⃣ Foto de la sección' },
          { type: 'string', name: 'statProyectos', label: '1️⃣ Estadística — Proyectos (ej: +150)' },
          { type: 'string', name: 'statSatisfaccion', label: '1️⃣ Estadística — Satisfacción (ej: 92%)' },
          { type: 'string', name: 'statAnios', label: '1️⃣ Estadística — Años (ej: 5+)' },
          { type: 'string', name: 'misionTitulo', label: '2️⃣ Título de la Misión' },
          { type: 'string', name: 'misionDesc', label: '2️⃣ Descripción de la Misión', ui: { component: 'textarea' } },
          { type: 'string', name: 'visionTitulo', label: '2️⃣ Título de la Visión' },
          { type: 'string', name: 'visionDesc', label: '2️⃣ Descripción de la Visión', ui: { component: 'textarea' } },
          { type: 'string', name: 'porqueItems', label: '3️⃣ Razones para elegirnos', list: true },
          {
            type: 'object', name: 'teamMembers', label: '4️⃣ Equipo', list: true,
            ui: { itemProps: (item) => ({ label: item?.nombre }) },
            fields: [
              { type: 'string', name: 'nombre', label: 'Nombre completo' },
              { type: 'string', name: 'rol', label: 'Rol o cargo' },
              { type: 'string', name: 'descripcion', label: 'Descripción', ui: { component: 'textarea' } },
              { type: 'image', name: 'foto', label: 'Foto' },
              { type: 'string', name: 'linkedin', label: 'URL de LinkedIn (ej: https://linkedin.com/in/usuario)' },
            ],
          },
        ],
      },

      // ─── CONTACTO ────────────────────────────────────────────────
      {
        name: 'contacto',
        label: '📞 Contacto',
        path: 'tina/content/pages',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'contacto' },
        fields: [
          { type: 'string', name: 'email', label: '📧 Email de contacto' },
          { type: 'string', name: 'whatsapp', label: '📱 Número de WhatsApp (con código de país, ej: 5493511234567)' },
          { type: 'string', name: 'direccion', label: '📍 Dirección o ciudad' },
          { type: 'string', name: 'instagram', label: '📸 Usuario de Instagram (sin @)' },
          { type: 'string', name: 'linkedin', label: '💼 URL de LinkedIn' },
        ],
      },

    ],
  },
})
