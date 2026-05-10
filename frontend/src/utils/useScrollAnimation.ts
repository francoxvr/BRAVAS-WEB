import { useEffect } from "react";
import { useRouter } from "next/router";

export function useScrollAnimation() {
  const router = useRouter();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("animate-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < viewportHeight * 0.92 && rect.bottom > 0;

        if (isVisible) {
          el.classList.add("animate-in");
          return;
        }

        observer.observe(el);
      });
    };

    const animationFrame = window.requestAnimationFrame(() => {
      revealVisibleElements();
      document.body.classList.add("scroll-animations-ready");
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [router.asPath]);
}
