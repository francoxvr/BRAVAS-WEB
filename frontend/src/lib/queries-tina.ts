/**
 * queries-tina.ts
 * Reemplaza las queries de Sanity leyendo directamente los JSON de Tina.
 * En producción, usa el cliente de Tina generado automáticamente.
 */

import homeData from '../../tina/content/pages/home.json'
import serviciosData from '../../tina/content/pages/servicios.json'
import nosotrosData from '../../tina/content/pages/nosotros.json'
import contactoData from '../../tina/content/pages/contacto.json'
import configData from '../../tina/content/config.json'

export async function getHomeData() {
  return homeData
}

export async function getServiciosData() {
  return serviciosData
}

export async function getNosotrosData() {
  return nosotrosData
}

export async function getContactoData() {
  return contactoData
}

export async function getSiteConfig() {
  return configData
}

export async function getHeroData(page: string) {
  const config = configData as any
  return {
    heroImagenes: config.heroImagenes || [],
    hero: config[`hero${page.charAt(0).toUpperCase() + page.slice(1)}`] || {},
  }
}

export async function getTeamMembers() {
  // El equipo se maneja como archivos individuales en tina/content/equipo/
  return []
}
