const SCROLL_MARGIN = 12;
const VISUAL_OFFSET = -105;
const HOME_SECTION_IDS = ['home', 'enfoque', 'crecimiento', 'proceso', 'innovacion'];

export type ScrollAnchor = {
  id: string;
  element: HTMLElement;
};

export function getHeaderOffset() {
  const header = document.querySelector(
    '[data-app-header="true"]'
  ) as HTMLElement | null;

  return header ? header.getBoundingClientRect().height + SCROLL_MARGIN : 80;
}

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
}

function getAnchorTop(element: HTMLElement) {
  return window.scrollY + element.getBoundingClientRect().top;
}

function getHomeAnchors() {
  return HOME_SECTION_IDS.map((id) => document.getElementById(id)).filter(
    (element): element is HTMLElement => element instanceof HTMLElement
  );
}

function getElementMarginTop(element: HTMLElement) {
  const marginTop = window.getComputedStyle(element).marginTop;
  return Number.parseFloat(marginTop || '0') || 0;
}

export function getScrollAnchors() {
  const anchors: ScrollAnchor[] = [];
  const homeAnchors = getHomeAnchors();

  if (homeAnchors.length > 0) {
    homeAnchors.forEach((element, index) => {
      anchors.push({
        id: element.id || `home-anchor-${index}`,
        element,
      });
    });
  } else {
    document.querySelectorAll('main section[id]').forEach((section, index) => {
      if (section instanceof HTMLElement) {
        anchors.push({
          id: section.id || `section-${index}`,
          element: section,
        });
      }
    });
  }

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
  if (!anchors.length) return -1;

  const headerOffset = getHeaderOffset();
  const viewportCenter = window.scrollY + headerOffset + (window.innerHeight - headerOffset) / 2;

  let currentIndex = 0;

  anchors.forEach((anchor, index) => {
    const anchorTop = getAnchorTop(anchor.element) - getElementMarginTop(anchor.element);
    if (anchorTop <= viewportCenter) {
      currentIndex = index;
    }
  });

  return currentIndex;
}

export function scrollToElement(element: HTMLElement) {
  const isFooter = element.tagName.toLowerCase() === 'footer';

  if (isFooter) {
    window.scrollTo({
      top: Math.max(0, getAnchorTop(element) - 24),
      behavior: getScrollBehavior(),
    });
    return;
  }

  // Posicionar el top de la sección justo debajo del header
  const elementTop = getAnchorTop(element);
  const headerOffset = getHeaderOffset();

  const targetTop = elementTop - headerOffset - VISUAL_OFFSET;

  window.scrollTo({
    top: Math.max(0, targetTop),
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