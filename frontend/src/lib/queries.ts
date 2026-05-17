/**
 * queries.ts
 * Lee el contenido desde los archivos JSON de Tina
 * para que la web use lo mismo que edita el cliente en el panel.
 */

export async function getHomeData() {
  try {
    const data = await import('../../tina/content/pages/home.json')
    return data.default
  } catch { return null }
}

export async function getNosotrosData() {
  try {
    const data = await import('../../tina/content/pages/nosotros.json')
    return data.default
  } catch { return null }
}

export async function getServiciosData() {
  try {
    const data = await import('../../tina/content/pages/servicios.json')
    return data.default
  } catch { return null }
}

export async function getContactoData() {
  try {
    const data = await import('../../tina/content/pages/contacto.json')
    return data.default
  } catch { return null }
}

export async function getSiteConfig() {
  try {
    const data = await import('../../tina/content/config.json')
    return data.default
  } catch { return null }
}
