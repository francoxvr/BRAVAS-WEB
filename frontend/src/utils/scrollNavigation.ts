const SCROLL_MARGIN = -40;
const HOME_SECTION_IDS = ['home', 'enfoque', 'crecimiento', 'proceso', 'innovacion'];
const SERVICES_SECTION_IDS = [
  'servicios',
  'servicios-nuestros',
  'servicios-integrales',
  'servicios-herramientas',
  'servicios-contacto',
];
const NOSOTROS_SECTION_IDS = ['nosotros', 'nosotros-resultados'];
const CONTACTO_SECTION_IDS = ['contacto', 'contacto-form'];

/** Primer bloque hero por página: scroll al inicio del documento */
const HERO_SECTION_IDS = ['home', 'servicios', 'nosotros', 'contacto'] as const;

export type ScrollAnchor = {
  id: string;
  element: HTMLElement; 
};

function isBrowser() {
  return typeof window !== 'undefined';
}

export function getHeaderOffset() {
  if (!isBrowser()) return 0;

  const header = document.querySelector(
    '[data-app-header="true"]'
  ) as HTMLElement | null;

  return header ? header.getBoundingClientRect().height + SCROLL_MARGIN : 120;
}

function getScrollBehavior(): ScrollBehavior {
  if (!isBrowser()) return 'auto';

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}

/** Bloque visible de la sección (ej. cabecera morada), id *-target; si no hay, la propia sección/footer */
function getScrollTarget(element: HTMLElement) {
  const target = element.querySelector('[id$="-target"]');
  return target instanceof HTMLElement ? target : element;
}

function getAnchorTop(element: HTMLElement) {
  if (!isBrowser()) return 0;

  const target = getScrollTarget(element);
  return window.scrollY + target.getBoundingClientRect().top;
}

function getSectionIdsForPage(): string[] {
  if (!isBrowser()) return HOME_SECTION_IDS;

  if (document.getElementById('servicios-nuestros')) return SERVICES_SECTION_IDS;
  if (document.getElementById('nosotros-resultados')) return NOSOTROS_SECTION_IDS;
  if (document.getElementById('contacto-form')) return CONTACTO_SECTION_IDS;
  
  // Fallback: detectar si estamos en una página específica por la URL
  const path = window.location.pathname;
  if (path.includes('servicios')) return SERVICES_SECTION_IDS;
  if (path.includes('nosotros')) return NOSOTROS_SECTION_IDS;
  if (path.includes('contacto')) return CONTACTO_SECTION_IDS;
  
  return HOME_SECTION_IDS;
}

export function getScrollAnchors() {
  if (!isBrowser()) return [];

  const anchors: ScrollAnchor[] = [];
  const sectionIds = getSectionIdsForPage();

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      anchors.push({ id, element: el });
    }
  });

  const footer = document.querySelector('footer') as HTMLElement | null;
  if (footer) {
    anchors.push({
      id: footer.id || 'site-footer',
      element: footer,
    });
  }

  return anchors;
}

export function getCurrentAnchorIndex(anchors: ScrollAnchor[]) {
  if (!isBrowser() || !anchors.length) return -1;

  const headerOffset = getHeaderOffset();
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const scrollCenter = scrollY + (viewportHeight / 2);

  // 1. Si estamos muy cerca del inicio, el índice es 0 (Hero)
  if (scrollY < 100) return 0;

  // 2. Si estamos muy cerca del final, el índice es el último (Footer)
  if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 100) {
    return anchors.length - 1;
  }

  // 3. Buscamos la sección cuyo centro esté más cerca del centro del viewport
  // o que esté ocupando la mayor parte de la pantalla.
  let bestIndex = 0;
  let minDistance = Infinity;

  anchors.forEach((anchor, index) => {
    const top = getAnchorTop(anchor.element);
    // Usamos el centro de la sección si es posible, o simplemente su top
    const sectionCenter = top + (anchor.element.offsetHeight / 4); // Estimación rápida
    const distance = Math.abs(scrollCenter - sectionCenter);

    if (distance < minDistance) {
      minDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

export function scrollToElement(element: HTMLElement) {
  if (!isBrowser()) return;

  if ((HERO_SECTION_IDS as readonly string[]).includes(element.id)) {
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior(),
    });
    return;
  }

  const isFooter = element.tagName.toLowerCase() === 'footer';

  if (isFooter) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: getScrollBehavior(),
    });
    return;
  }

  const elementTop = getAnchorTop(element);
  const headerOffset = getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, elementTop - headerOffset),
    behavior: getScrollBehavior(),
  });
}

export function getNextAnchor(anchors: ScrollAnchor[]) {
  const currentIndex = getCurrentAnchorIndex(anchors);
  const nextIndex = currentIndex + 1;
  return nextIndex < anchors.length ? anchors[nextIndex] : null;
}

export function getPreviousAnchor(anchors: ScrollAnchor[]) {
  const currentIndex = getCurrentAnchorIndex(anchors);
  const previousIndex = currentIndex - 1;
  return previousIndex >= 0 ? anchors[previousIndex] : null;
}
