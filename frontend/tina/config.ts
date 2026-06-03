import { defineConfig } from 'tinacms'

// Schema version: 2
export default defineConfig({
  clientId: '9d19bec7-8aea-435a-8adb-a081ce91aab9',
  branch: 'main',
  token: '08fbd239f779ff6891919cd419136a398a0debbf',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'uploads', publicFolder: 'public' } },

  schema: {
    collections: [

      // ─── CONFIGURACIÓN GENERAL (Header + Hero) ───────────────────
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

      // ─── FOOTER ─────────────────────────────────────────────────
      {
        name: 'footer',
        label: 'Footer',
        path: 'tina/content',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'footer' },
        fields: [
          { type: 'string', name: 'descripcion', label: 'Descripcion', ui: { component: 'textarea' } },
          { type: 'string', name: 'copyright', label: 'Texto del copyright' },
          { type: 'string', name: 'facebook', label: 'URL de Facebook' },
          {
            type: 'object', name: 'serviciosLinks', label: 'Links de Servicios', list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Texto del link' },
              { type: 'string', name: 'href', label: 'Destino' },
            ],
          },
          {
            type: 'object', name: 'empresaLinks', label: 'Links de Empresa', list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Texto del link' },
              { type: 'string', name: 'href', label: 'Destino' },
            ],
          },
          {
            type: 'object', name: 'legalLinksIzquierda', label: 'Links legales izquierdos', list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Texto del link' },
              { type: 'string', name: 'href', label: 'Destino' },
            ],
          },
          {
            type: 'object', name: 'legalLinksDerecha', label: 'Links legales derechos', list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: 'string', name: 'label', label: 'Texto del link' },
              { type: 'string', name: 'href', label: 'Destino' },
            ],
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
          { type: 'string', name: 'propuestaTag', label: '1️⃣ Etiqueta sección (ej: ¿Qué hacemos?)' },
          { type: 'string', name: 'propuestaTitulo', label: '1️⃣ Título principal' },
          { type: 'string', name: 'propuestaSubtitulo', label: '1️⃣ Subtítulo', ui: { component: 'textarea' } },
          { type: 'string', name: 'propuestaItems', label: '1️⃣ Lista de servicios', list: true },
          // Enfoque
          { type: 'string', name: 'enfoqueHeader', label: '2️⃣ Título sección enfoque' },
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
          { type: 'string', name: 'procesoHeader', label: '4️⃣ Título sección proceso' },
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
          { type: 'string', name: 'innovacionHeader', label: '5️⃣ Título sección innovación' },
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
          { type: 'string', name: 'introTitulo', label: '0️⃣ Intro — Título "Lo que hacemos"' },
          { type: 'string', name: 'introSubtitulo', label: '0️⃣ Intro — Subtítulo', ui: { component: 'textarea' } },
          { type: 'string', name: 'introDesc', label: '0️⃣ Intro — Descripción', ui: { component: 'textarea' } },
          { type: 'string', name: 'introPorqueTitulo', label: '0️⃣ Intro — "Por qué Bravas" título' },
          { type: 'string', name: 'introPorqueSubtitulo', label: '0️⃣ Intro — "Por qué Bravas" subtítulo', ui: { component: 'textarea' } },
          { type: 'string', name: 'introPorqueDesc', label: '0️⃣ Intro — "Por qué Bravas" descripción', ui: { component: 'textarea' } },
          { type: 'string', name: 'nuestrosServiciosTitulo', label: '1️⃣ Título "Nuestros Servicios"' },
          { type: 'string', name: 'nuestrosServiciosSubtitulo', label: '1️⃣ Subtítulo "Nuestros Servicios"', ui: { component: 'textarea' } },
          {
            type: 'object', name: 'servicios', label: '1️⃣ Nuestros Servicios', list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: 'string', name: 'titulo', label: 'Nombre del servicio' },
              { type: 'string', name: 'descripcion', label: 'Descripción corta', ui: { component: 'textarea' } },
              { type: 'string', name: 'items', label: 'Ítems incluidos', list: true },
            ],
          },
          { type: 'string', name: 'integralTitulo', label: '2️⃣ Título Soluciones Integrales' },
          { type: 'string', name: 'integralSubtitulo', label: '2️⃣ Subtítulo Soluciones Integrales', ui: { component: 'textarea' } },
          { type: 'image', name: 'integralImagenPrincipal', label: '2️⃣ Imagen card principal' },
          { type: 'string', name: 'herramientasTitulo', label: '3️⃣ Título Herramientas' },
          { type: 'string', name: 'herramientasSubtitulo', label: '3️⃣ Subtítulo Herramientas', ui: { component: 'textarea' } },
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
          { type: 'string', name: 'quienesTag', label: '1️⃣ Etiqueta sección (ej: Quiénes somos)' },
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
          { type: 'string', name: 'equipoSubtitulo', label: '4️⃣ Subtítulo sección Equipo' },
          { type: 'string', name: 'porqueTag', label: '3️⃣ Etiqueta sección (ej: ¿Por qué elegirnos?)' },
          { type: 'string', name: 'porqueTitulo', label: '3️⃣ Título sección' },
          { type: 'string', name: 'porqueSubtitulo', label: '3️⃣ Subtítulo sección', ui: { component: 'textarea' } },
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

      // ─── LEGAL ───────────────────────────────────────────────────
      {
        name: 'legal',
        label: '📋 Legal',
        path: 'tina/content/pages',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: 'legal' },
        fields: [
          {
            type: 'object', name: 'privacidad', label: '🔒 Política de Privacidad',
            fields: [{
              type: 'object', name: 'bloques', label: 'Bloques', list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: 'string', name: 'titulo', label: 'Título del bloque' },
                { type: 'string', name: 'contenido', label: 'Contenido', ui: { component: 'textarea' } },
              ],
            }],
          },
          {
            type: 'object', name: 'cookies', label: '🍪 Política de Cookies',
            fields: [{
              type: 'object', name: 'bloques', label: 'Bloques', list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: 'string', name: 'titulo', label: 'Título del bloque' },
                { type: 'string', name: 'contenido', label: 'Contenido', ui: { component: 'textarea' } },
              ],
            }],
          },
          {
            type: 'object', name: 'terminos', label: '📄 Términos y Condiciones',
            fields: [{
              type: 'object', name: 'bloques', label: 'Bloques', list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: 'string', name: 'titulo', label: 'Título del bloque' },
                { type: 'string', name: 'contenido', label: 'Contenido', ui: { component: 'textarea' } },
              ],
            }],
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
          { type: 'string', name: 'panelTag', label: '🏷️ Etiqueta panel izquierdo (ej: Hablemos)' },
          { type: 'string', name: 'panelTitulo', label: '📝 Título panel izquierdo' },
          { type: 'string', name: 'panelDescripcion', label: '📝 Descripción panel izquierdo', ui: { component: 'textarea' } },
          { type: 'string', name: 'panelItems', label: '✅ Puntos destacados', list: true },
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
