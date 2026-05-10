import { sanityClient } from './sanity'

export async function getHomeData() {
  return sanityClient.fetch(`*[_type == "home"][0]{
    propuestaTitulo, propuestaSubtitulo, propuestaItems,
    enfoqueSubtitulo, enfoqueCards,
    crecimientoTitulo, crecimientoSubtitulo,
    crecimientoCards[]{ titulo, descripcion, "imagenes": imagenes[].asset->url },
    procesoSubtitulo, procesoSteps,
    innovacionSubtitulo, innovacionFeatures,
    "innovacionImagenes": innovacionImagenes[].asset->url,
    "heroImagenes": heroImagenes[].asset->url
  }`)
}

export async function getNosotrosData() {
  return sanityClient.fetch(`*[_type == "nosotros"][0]{
    quienesTitulo, quienesDesc1, quienesDesc2,
    statProyectos, statSatisfaccion, statAnios,
    "quienesImagen": quienesImagen.asset->url,
    misionTitulo, misionDesc, visionTitulo, visionDesc, porqueItems
  }`)
}

export async function getTeamData() {
  return sanityClient.fetch(`*[_type == "teamMember"] | order(orden asc){
    nombre, rol, descripcion, "foto": foto.asset->url
  }`)
}

export async function getServiciosData() {
  return sanityClient.fetch(`*[_type == "servicios"][0]{
    servicios, faqItems,
    "integralImagenPrincipal": integralImagenPrincipal.asset->url
  }`)
}

export async function getContactoData() {
  return sanityClient.fetch(`*[_type == "contacto"][0]{
    email, whatsapp, instagram, linkedin, direccion
  }`)
}

export async function getSiteConfig() {
  return sanityClient.fetch(`*[_type == "siteConfig"][0]{
    "logo": logo.asset->url,
    navItems,
    heroHome, heroServicios, heroNosotros, heroContacto,
    footerDescripcion
  }`)
}
