/**
 * queries.ts
 * Lee contenido desde Payload cuando ya esta migrado.
 * Si Payload todavia no tiene datos, conserva los JSON de Tina como fallback.
 */

type PayloadGlobalResponse = {
  content?: unknown
}

async function getPayloadGlobal(slug: string): Promise<any | null> {
  if (typeof window === 'undefined') return null

  try {
    const response = await fetch(`/api/globals/${slug}`, {
      cache: 'no-store',
    })

    if (!response.ok) return null

    const data = (await response.json()) as PayloadGlobalResponse
    return data.content ?? null
  } catch {
    return null
  }
}

export async function getHomeData() {
  const payloadData = await getPayloadGlobal('home')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/pages/home.json')
    return data.default
  } catch { return null }
}

export async function getNosotrosData() {
  const payloadData = await getPayloadGlobal('nosotros')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/pages/nosotros.json')
    return data.default
  } catch { return null }
}

export async function getServiciosData() {
  const payloadData = await getPayloadGlobal('servicios')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/pages/servicios.json')
    return data.default
  } catch { return null }
}

export async function getContactoData() {
  const payloadData = await getPayloadGlobal('contacto')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/pages/contacto.json')
    return data.default
  } catch { return null }
}

export async function getSiteConfig() {
  const payloadData = await getPayloadGlobal('site-config')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/config.json')
    return data.default
  } catch { return null }
}

export async function getFooterData() {
  const payloadData = await getPayloadGlobal('footer')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/footer.json')
    return data.default
  } catch { return null }
}

export async function getLegalData() {
  const payloadData = await getPayloadGlobal('legal')
  if (payloadData) return payloadData

  try {
    const data = await import('../../tina/content/pages/legal.json')
    return data.default
  } catch { return null }
}
