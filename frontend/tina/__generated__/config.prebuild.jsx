// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: "9d19bec7-8aea-435a-8adb-a081ce91aab9",
  branch: "main",
  token: "08fbd239f779ff6891919cd419136a398a0debbf",
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      // ─── CONFIGURACIÓN GENERAL (Header + Hero) ───────────────────
      {
        name: "config",
        label: "\u2699\uFE0F Configuraci\xF3n General",
        path: "tina/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "config" },
        fields: [
          {
            type: "image",
            name: "logo",
            label: "Logo del sitio",
            description: "Aparece en el header y footer. PNG con fondo transparente."
          },
          {
            type: "object",
            name: "nav",
            label: "\u{1F9ED} Men\xFA de navegaci\xF3n",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Texto del link" },
              { type: "string", name: "href", label: "Destino (ej: /servicios)" }
            ]
          },
          {
            type: "object",
            name: "heroHome",
            label: "\u{1F3E0} Hero \u2014 Inicio",
            fields: [
              { type: "string", name: "subtitulo", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "ctaTexto", label: "Texto del bot\xF3n" },
              { type: "string", name: "pills", label: "Etiquetas", list: true }
            ]
          },
          {
            type: "object",
            name: "heroServicios",
            label: "\u2699\uFE0F Hero \u2014 Servicios",
            fields: [
              { type: "string", name: "subtitulo", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "ctaTexto", label: "Texto del bot\xF3n" },
              { type: "string", name: "pills", label: "Etiquetas", list: true }
            ]
          },
          {
            type: "object",
            name: "heroNosotros",
            label: "\u{1F465} Hero \u2014 Nosotros",
            fields: [
              { type: "string", name: "subtitulo", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "ctaTexto", label: "Texto del bot\xF3n" },
              { type: "string", name: "pills", label: "Etiquetas", list: true }
            ]
          },
          {
            type: "object",
            name: "heroContacto",
            label: "\u{1F4DE} Hero \u2014 Contacto",
            fields: [
              { type: "string", name: "subtitulo", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "ctaTexto", label: "Texto del bot\xF3n" },
              { type: "string", name: "pills", label: "Etiquetas", list: true }
            ]
          },
          {
            type: "image",
            name: "heroImagenes",
            label: "\u{1F5BC}\uFE0F Im\xE1genes del carrusel hero",
            list: true,
            description: "Las fotos que rotan en el hero de todas las p\xE1ginas."
          }
        ]
      },
      // ─── FOOTER ─────────────────────────────────────────────────
      {
        name: "footer",
        label: "Footer",
        path: "tina/content",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "footer" },
        fields: [
          { type: "string", name: "descripcion", label: "Descripcion", ui: { component: "textarea" } },
          { type: "string", name: "copyright", label: "Texto del copyright" },
          { type: "string", name: "facebook", label: "URL de Facebook" },
          {
            type: "object",
            name: "serviciosLinks",
            label: "Links de Servicios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Texto del link" },
              { type: "string", name: "href", label: "Destino" }
            ]
          },
          {
            type: "object",
            name: "empresaLinks",
            label: "Links de Empresa",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Texto del link" },
              { type: "string", name: "href", label: "Destino" }
            ]
          },
          {
            type: "object",
            name: "legalLinksIzquierda",
            label: "Links legales izquierdos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Texto del link" },
              { type: "string", name: "href", label: "Destino" }
            ]
          },
          {
            type: "object",
            name: "legalLinksDerecha",
            label: "Links legales derechos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Texto del link" },
              { type: "string", name: "href", label: "Destino" }
            ]
          }
        ]
      },
      // ─── HOME ────────────────────────────────────────────────────
      {
        name: "home",
        label: "\u{1F3E0} Home",
        path: "tina/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "home" },
        fields: [
          // Propuesta
          { type: "string", name: "propuestaTag", label: "1\uFE0F\u20E3 Etiqueta secci\xF3n (ej: \xBFQu\xE9 hacemos?)" },
          { type: "string", name: "propuestaTitulo", label: "1\uFE0F\u20E3 T\xEDtulo principal" },
          { type: "string", name: "propuestaSubtitulo", label: "1\uFE0F\u20E3 Subt\xEDtulo", ui: { component: "textarea" } },
          { type: "string", name: "propuestaItems", label: "1\uFE0F\u20E3 Lista de servicios", list: true },
          // Enfoque
          { type: "string", name: "enfoqueHeader", label: "2\uFE0F\u20E3 T\xEDtulo secci\xF3n enfoque" },
          { type: "string", name: "enfoqueSubtitulo", label: "2\uFE0F\u20E3 Subt\xEDtulo del enfoque", ui: { component: "textarea" } },
          {
            type: "object",
            name: "enfoqueCards",
            label: "2\uFE0F\u20E3 Cards de enfoque",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } }
            ]
          },
          // Crecimiento
          { type: "string", name: "crecimientoTitulo", label: "3\uFE0F\u20E3 T\xEDtulo crecimiento" },
          { type: "string", name: "crecimientoSubtitulo", label: "3\uFE0F\u20E3 Subt\xEDtulo crecimiento", ui: { component: "textarea" } },
          {
            type: "object",
            name: "crecimientoCards",
            label: "3\uFE0F\u20E3 Cards de crecimiento",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } },
              { type: "image", name: "imagenes", label: "Im\xE1genes (m\xE1x 2)", list: true }
            ]
          },
          // Proceso
          { type: "string", name: "procesoHeader", label: "4\uFE0F\u20E3 T\xEDtulo secci\xF3n proceso" },
          { type: "string", name: "procesoSubtitulo", label: "4\uFE0F\u20E3 Subt\xEDtulo del proceso" },
          {
            type: "object",
            name: "procesoSteps",
            label: "4\uFE0F\u20E3 Pasos del proceso",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "titulo", label: "Nombre del paso" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } }
            ]
          },
          // Innovación
          { type: "string", name: "innovacionHeader", label: "5\uFE0F\u20E3 T\xEDtulo secci\xF3n innovaci\xF3n" },
          { type: "string", name: "innovacionSubtitulo", label: "5\uFE0F\u20E3 Subt\xEDtulo innovaci\xF3n", ui: { component: "textarea" } },
          {
            type: "object",
            name: "innovacionFeatures",
            label: "5\uFE0F\u20E3 Cards de innovaci\xF3n",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } }
            ]
          },
          { type: "image", name: "innovacionImagenes", label: "5\uFE0F\u20E3 Im\xE1genes innovaci\xF3n", list: true }
        ]
      },
      // ─── SERVICIOS ───────────────────────────────────────────────
      {
        name: "servicios",
        label: "\u2699\uFE0F Servicios",
        path: "tina/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "servicios" },
        fields: [
          { type: "string", name: "introTitulo", label: '0\uFE0F\u20E3 Intro \u2014 T\xEDtulo "Lo que hacemos"' },
          { type: "string", name: "introSubtitulo", label: "0\uFE0F\u20E3 Intro \u2014 Subt\xEDtulo", ui: { component: "textarea" } },
          { type: "string", name: "introDesc", label: "0\uFE0F\u20E3 Intro \u2014 Descripci\xF3n", ui: { component: "textarea" } },
          { type: "string", name: "introPorqueTitulo", label: '0\uFE0F\u20E3 Intro \u2014 "Por qu\xE9 Bravas" t\xEDtulo' },
          { type: "string", name: "introPorqueSubtitulo", label: '0\uFE0F\u20E3 Intro \u2014 "Por qu\xE9 Bravas" subt\xEDtulo', ui: { component: "textarea" } },
          { type: "string", name: "introPorqueDesc", label: '0\uFE0F\u20E3 Intro \u2014 "Por qu\xE9 Bravas" descripci\xF3n', ui: { component: "textarea" } },
          { type: "string", name: "nuestrosServiciosTitulo", label: '1\uFE0F\u20E3 T\xEDtulo "Nuestros Servicios"' },
          { type: "string", name: "nuestrosServiciosSubtitulo", label: '1\uFE0F\u20E3 Subt\xEDtulo "Nuestros Servicios"', ui: { component: "textarea" } },
          {
            type: "object",
            name: "servicios",
            label: "1\uFE0F\u20E3 Nuestros Servicios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "titulo", label: "Nombre del servicio" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n corta", ui: { component: "textarea" } },
              { type: "string", name: "items", label: "\xCDtems incluidos", list: true }
            ]
          },
          { type: "string", name: "integralTitulo", label: "2\uFE0F\u20E3 T\xEDtulo Soluciones Integrales" },
          { type: "string", name: "integralSubtitulo", label: "2\uFE0F\u20E3 Subt\xEDtulo Soluciones Integrales", ui: { component: "textarea" } },
          { type: "image", name: "integralImagenPrincipal", label: "2\uFE0F\u20E3 Imagen card principal" },
          {
            type: "object",
            name: "integralCards",
            label: "2\uFE0F\u20E3 Cards Soluciones Integrales",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo }) },
            fields: [
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "herramientasTitulo", label: "3\uFE0F\u20E3 T\xEDtulo Herramientas" },
          { type: "string", name: "herramientasSubtitulo", label: "3\uFE0F\u20E3 Subt\xEDtulo Herramientas", ui: { component: "textarea" } },
          {
            type: "object",
            name: "herramientasCategorias",
            label: "3\uFE0F\u20E3 Categor\xEDas de Herramientas",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.categoria }) },
            fields: [
              { type: "string", name: "categoria", label: "Nombre de la categor\xEDa" },
              { type: "string", name: "color", label: "Color del punto (ej: #4ade80)" },
              {
                type: "object",
                name: "herramientas",
                label: "Herramientas",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.nombre }) },
                fields: [
                  { type: "string", name: "nombre", label: "Nombre" },
                  { type: "string", name: "descripcion", label: "Descripci\xF3n" },
                  { type: "string", name: "emoji", label: "Emoji del \xEDcono (ej: \u{1F3AF})" },
                  { type: "string", name: "bg", label: "Color de fondo (ej: #e8f0fe)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqItems",
            label: "3\uFE0F\u20E3 Preguntas Frecuentes",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.pregunta }) },
            fields: [
              { type: "string", name: "pregunta", label: "Pregunta" },
              { type: "string", name: "respuesta", label: "Respuesta", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      // ─── NOSOTROS ────────────────────────────────────────────────
      {
        name: "nosotros",
        label: "\u{1F465} Nosotros",
        path: "tina/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "nosotros" },
        fields: [
          { type: "string", name: "quienesTag", label: "1\uFE0F\u20E3 Etiqueta secci\xF3n (ej: Qui\xE9nes somos)" },
          { type: "string", name: "quienesTitulo", label: "1\uFE0F\u20E3 T\xEDtulo principal" },
          { type: "string", name: "quienesDesc1", label: "1\uFE0F\u20E3 P\xE1rrafo 1", ui: { component: "textarea" } },
          { type: "string", name: "quienesDesc2", label: "1\uFE0F\u20E3 P\xE1rrafo 2", ui: { component: "textarea" } },
          { type: "image", name: "quienesImagen", label: "1\uFE0F\u20E3 Foto de la secci\xF3n" },
          { type: "string", name: "statProyectos", label: "1\uFE0F\u20E3 Estad\xEDstica \u2014 Proyectos (ej: +150)" },
          { type: "string", name: "statSatisfaccion", label: "1\uFE0F\u20E3 Estad\xEDstica \u2014 Satisfacci\xF3n (ej: 92%)" },
          { type: "string", name: "statAnios", label: "1\uFE0F\u20E3 Estad\xEDstica \u2014 A\xF1os (ej: 5+)" },
          { type: "string", name: "misionTitulo", label: "2\uFE0F\u20E3 T\xEDtulo de la Misi\xF3n" },
          { type: "string", name: "misionDesc", label: "2\uFE0F\u20E3 Descripci\xF3n de la Misi\xF3n", ui: { component: "textarea" } },
          { type: "string", name: "visionTitulo", label: "2\uFE0F\u20E3 T\xEDtulo de la Visi\xF3n" },
          { type: "string", name: "visionDesc", label: "2\uFE0F\u20E3 Descripci\xF3n de la Visi\xF3n", ui: { component: "textarea" } },
          { type: "string", name: "equipoSubtitulo", label: "4\uFE0F\u20E3 Subt\xEDtulo secci\xF3n Equipo" },
          { type: "string", name: "porqueTag", label: "3\uFE0F\u20E3 Etiqueta secci\xF3n (ej: \xBFPor qu\xE9 elegirnos?)" },
          { type: "string", name: "porqueTitulo", label: "3\uFE0F\u20E3 T\xEDtulo secci\xF3n" },
          { type: "string", name: "porqueSubtitulo", label: "3\uFE0F\u20E3 Subt\xEDtulo secci\xF3n", ui: { component: "textarea" } },
          { type: "string", name: "porqueItems", label: "3\uFE0F\u20E3 Razones para elegirnos", list: true },
          {
            type: "object",
            name: "teamMembers",
            label: "4\uFE0F\u20E3 Equipo",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.nombre }) },
            fields: [
              { type: "string", name: "nombre", label: "Nombre completo" },
              { type: "string", name: "rol", label: "Rol o cargo" },
              { type: "string", name: "descripcion", label: "Descripci\xF3n", ui: { component: "textarea" } },
              { type: "image", name: "foto", label: "Foto" },
              { type: "string", name: "linkedin", label: "URL de LinkedIn (ej: https://linkedin.com/in/usuario)" }
            ]
          }
        ]
      },
      // ─── LEGAL ───────────────────────────────────────────────────
      {
        name: "legal",
        label: "\u{1F4CB} Legal",
        path: "tina/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "legal" },
        fields: [
          {
            type: "object",
            name: "privacidad",
            label: "\u{1F512} Pol\xEDtica de Privacidad",
            fields: [{
              type: "object",
              name: "bloques",
              label: "Bloques",
              list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: "string", name: "titulo", label: "T\xEDtulo del bloque" },
                { type: "string", name: "contenido", label: "Contenido", ui: { component: "textarea" } }
              ]
            }]
          },
          {
            type: "object",
            name: "cookies",
            label: "\u{1F36A} Pol\xEDtica de Cookies",
            fields: [{
              type: "object",
              name: "bloques",
              label: "Bloques",
              list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: "string", name: "titulo", label: "T\xEDtulo del bloque" },
                { type: "string", name: "contenido", label: "Contenido", ui: { component: "textarea" } }
              ]
            }]
          },
          {
            type: "object",
            name: "terminos",
            label: "\u{1F4C4} T\xE9rminos y Condiciones",
            fields: [{
              type: "object",
              name: "bloques",
              label: "Bloques",
              list: true,
              ui: { itemProps: (item) => ({ label: item?.titulo }) },
              fields: [
                { type: "string", name: "titulo", label: "T\xEDtulo del bloque" },
                { type: "string", name: "contenido", label: "Contenido", ui: { component: "textarea" } }
              ]
            }]
          }
        ]
      },
      // ─── CONTACTO ────────────────────────────────────────────────
      {
        name: "contacto",
        label: "\u{1F4DE} Contacto",
        path: "tina/content/pages",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "contacto" },
        fields: [
          { type: "string", name: "panelTag", label: "\u{1F3F7}\uFE0F Etiqueta panel izquierdo (ej: Hablemos)" },
          { type: "string", name: "panelTitulo", label: "\u{1F4DD} T\xEDtulo panel izquierdo" },
          { type: "string", name: "panelDescripcion", label: "\u{1F4DD} Descripci\xF3n panel izquierdo", ui: { component: "textarea" } },
          { type: "string", name: "panelItems", label: "\u2705 Puntos destacados", list: true },
          { type: "string", name: "email", label: "\u{1F4E7} Email de contacto" },
          { type: "string", name: "whatsapp", label: "\u{1F4F1} N\xFAmero de WhatsApp (con c\xF3digo de pa\xEDs, ej: 5493511234567)" },
          { type: "string", name: "direccion", label: "\u{1F4CD} Direcci\xF3n o ciudad" },
          { type: "string", name: "instagram", label: "\u{1F4F8} Usuario de Instagram (sin @)" },
          { type: "string", name: "linkedin", label: "\u{1F4BC} URL de LinkedIn" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
