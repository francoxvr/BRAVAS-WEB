/**
 * queries.ts
 * Lee contenido desde Payload cuando ya esta migrado.
 * Si Payload todavia no tiene datos, conserva los JSON de Tina como fallback.
 */

async function getPayloadGlobal(slug: string): Promise<any | null> {
  if (typeof window === 'undefined') return null

  try {
    const response = await fetch(`/api/globals/${slug}`, {
      cache: 'no-store',
    })

    if (!response.ok) return null

    return await response.json()
  } catch {
    return null
  }
}

// Los campos de tipo "upload" vienen poblados como objetos { id, url, alt, ... }.
// Los componentes esperan strings simples (rutas/URLs), asi que los aplanamos aqui
// para no tener que tocar la UI.
function mediaUrl(value: any): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value.url ?? ''
}

function mediaUrls(values: any): string[] {
  if (!Array.isArray(values)) return []
  return values.map(mediaUrl).filter(Boolean)
}

// Las "listas de items" se guardan como array de { texto } para que sean
// editables fila por fila en el admin. Los componentes esperan string[].
function textItems(values: any): string[] {
  if (!Array.isArray(values)) return []
  return values.map((item: any) => (typeof item === 'string' ? item : item?.texto ?? '')).filter(Boolean)
}

function flattenHeroGroup(hero: any) {
  if (!hero) return hero
  return { ...hero, pills: textItems(hero.pills) }
}

function flattenSiteConfig(data: any) {
  return {
    ...data,
    logo: mediaUrl(data.logo),
    heroHome: flattenHeroGroup(data.heroHome),
    heroServicios: flattenHeroGroup(data.heroServicios),
    heroNosotros: flattenHeroGroup(data.heroNosotros),
    heroContacto: flattenHeroGroup(data.heroContacto),
    heroImagenes: mediaUrls(data.heroImagenes),
  }
}

function flattenHome(data: any) {
  return {
    ...data,
    propuestaItems: textItems(data.propuestaItems),
    crecimientoCards: (data.crecimientoCards ?? []).map((card: any) => ({
      ...card,
      imagenes: mediaUrls(card.imagenes),
    })),
    innovacionImagenes: mediaUrls(data.innovacionImagenes),
  }
}

function flattenServicios(data: any) {
  return {
    ...data,
    integralImagenPrincipal: mediaUrl(data.integralImagenPrincipal),
    integralCards: (data.integralCards ?? []).map((card: any) => ({
      ...card,
      imagenes: mediaUrls(card.imagenes),
    })),
    servicios: (data.servicios ?? []).map((s: any) => ({ ...s, items: textItems(s.items) })),
  }
}

function flattenNosotros(data: any) {
  return {
    ...data,
    quienesImagen: mediaUrl(data.quienesImagen),
    teamMembers: (data.teamMembers ?? []).map((member: any) => ({
      ...member,
      foto: mediaUrl(member.foto),
    })),
    porqueItems: textItems(data.porqueItems),
  }
}

function flattenContacto(data: any) {
  return {
    ...data,
    panelItems: textItems(data.panelItems),
  }
}

export async function getHomeData() {
  const payloadData = await getPayloadGlobal('home')
  if (payloadData) return flattenHome(payloadData)

  try {
    const data = await import('../../tina/content/pages/home.json')
    return data.default
  } catch { return null }
}

export async function getNosotrosData() {
  const payloadData = await getPayloadGlobal('nosotros')
  if (payloadData) return flattenNosotros(payloadData)

  try {
    const data = await import('../../tina/content/pages/nosotros.json')
    return data.default
  } catch { return null }
}

export async function getServiciosData() {
  const payloadData = await getPayloadGlobal('servicios')
  if (payloadData) return flattenServicios(payloadData)

  try {
    const data = await import('../../tina/content/pages/servicios.json')
    return data.default
  } catch { return null }
}

export async function getContactoData() {
  const payloadData = await getPayloadGlobal('contacto')
  if (payloadData) return flattenContacto(payloadData)

  try {
    const data = await import('../../tina/content/pages/contacto.json')
    return data.default
  } catch { return null }
}

export async function getSiteConfig() {
  const payloadData = await getPayloadGlobal('site-config')
  if (payloadData) return flattenSiteConfig(payloadData)

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
