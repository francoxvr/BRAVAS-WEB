import { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';
import {
  getScrollAnchors,
  getCurrentAnchorIndex,
  scrollToElement,
} from '@/utils/scrollNavigation';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const pendingIndexRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const anchors = getScrollAnchors();

    const onScroll = () => {
      if (!isScrollingRef.current) {
        pendingIndexRef.current = null;
      }
      const current = pendingIndexRef.current ?? getCurrentAnchorIndex(anchors);
      setVisible(window.scrollY > 120 && current > 0);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    const anchors = getScrollAnchors();
    const current = getCurrentAnchorIndex(anchors);
    const prevIndex = current - 1;

    if (prevIndex < 0) {
      // Scroll directo al top — el header es sticky así que queda visible
      window.scrollTo({ top: 0, behavior: 'smooth' });
      pendingIndexRef.current = 0;
      setVisible(false);
      return;
    }

    pendingIndexRef.current = prevIndex;
    isScrollingRef.current = true;
    setTimeout(() => { isScrollingRef.current = false; }, 700);

    scrollToElement(anchors[prevIndex].element);
    setVisible(prevIndex > 0);
  };

  if (!visible) return null;

  return (
    <div className={styles.scrollToTopWrapper}>
      <button
        onClick={handleClick}
        className={styles.scrollToTop}
        aria-label="Ir a la sección anterior"
      >
        <ChevronUp size={22} />
      </button>
    </div>
  );
}