// utils/scrollState.ts
// Singleton compartido entre ScrollToTop y ScrollToBottom
// para mantener el índice de sección sincronizado

import { getScrollAnchors, getHeaderOffset, scrollToElement } from './scrollNavigation';

let currentIndex = 0;
let isScrolling = false;
let scrollingTimer: ReturnType<typeof setTimeout> | null = null;

function calcIndex() {
  const anchors = getScrollAnchors();
  const referenceTop = window.scrollY + getHeaderOffset() + 4;
  let index = 0;
  anchors.forEach((anchor, i) => {
    const top = window.scrollY + anchor.element.getBoundingClientRect().top;
    if (top <= referenceTop) index = i;
  });
  return index;
}

export function syncIndexFromScroll() {
  if (!isScrolling) {
    currentIndex = calcIndex();
  }
  return currentIndex;
}

export function getCurrentIndex() {
  return currentIndex;
}

export function scrollToNext() {
  const anchors = getScrollAnchors();
  const nextIndex = currentIndex + 1;
  if (nextIndex >= anchors.length) return false;

  currentIndex = nextIndex;
  isScrolling = true;
  if (scrollingTimer) clearTimeout(scrollingTimer);
  scrollingTimer = setTimeout(() => { isScrolling = false; }, 700);

  scrollToElement(anchors[nextIndex].element);
  return true;
}

export function scrollToPrev() {
  const anchors = getScrollAnchors();

  // Siempre recalcular el índice real antes de subir
  // para no depender del índice adelantado por scrollToNext
  const realIndex = calcIndex();
  currentIndex = realIndex;

  const prevIndex = realIndex - 1;
  if (prevIndex < 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentIndex = 0;
    return false;
  }

  currentIndex = prevIndex;
  isScrolling = true;
  if (scrollingTimer) clearTimeout(scrollingTimer);
  scrollingTimer = setTimeout(() => { isScrolling = false; }, 700);

  scrollToElement(anchors[prevIndex].element);
  return prevIndex > 0;
}

export function hasNext() {
  const anchors = getScrollAnchors();
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
  return anchors.length > 1 && currentIndex < anchors.length - 1 && !atBottom;
}

export function hasPrev() {
  return window.scrollY > 120 && currentIndex > 0;
}