import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './ScrollToBottom.module.css';
import {
  getScrollAnchors,
  getCurrentAnchorIndex,
  scrollToElement,
} from '@/utils/scrollNavigation';

export default function ScrollToBottom() {
  const [visible, setVisible] = useState(true);
  const pendingIndexRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const anchors = getScrollAnchors();
      if (!isScrollingRef.current) {
        pendingIndexRef.current = null;
      }
      const current = pendingIndexRef.current ?? getCurrentAnchorIndex(anchors);
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setVisible(anchors.length > 1 && current < anchors.length - 1 && !atBottom);
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
    const current = pendingIndexRef.current ?? getCurrentAnchorIndex(anchors);
    const nextIndex = current + 1;
    if (nextIndex >= anchors.length) return;

    pendingIndexRef.current = nextIndex;
    isScrollingRef.current = true;
    setTimeout(() => { isScrollingRef.current = false; }, 700);

    scrollToElement(anchors[nextIndex].element);
    setVisible(nextIndex < anchors.length - 1);
  };

  if (!visible) return null;

  return (
    <div className={styles.scrollToBottomWrapper}>
      <button
        onClick={handleClick}
        className={styles.scrollToBottom}
        aria-label="Ir a la siguiente sección"
      >
        <ChevronDown size={22} />
      </button>
    </div>
  );
}
