/**
 * queries.ts
 * Lee el contenido desde los archivos JSON de Tina
 * en vez de hacer llamadas a Sanity.
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

export async function getTeamData() {
  // El equipo se agrega desde el panel de Tina — Equipo
  return []
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
