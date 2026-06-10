import { useState, useEffect, useRef } from "react";

const CASE_GAP = 20;

export function useCaseStudyCarousel(caseStudies) {
  const count = caseStudies.length;
  const loopedItems = [...caseStudies, ...caseStudies];

  const [caseSlide, setCaseSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const viewportRef = useRef(null);
  const [carousel, setCarousel] = useState({ cardWidth: 0, slideStep: 0, twoUp: true });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.getBoundingClientRect().width;
      const twoUp = w >= 900;
      const cardWidth = twoUp ? (w - CASE_GAP) / 2 : w;
      const slideStep = cardWidth + CASE_GAP;
      setCarousel({ cardWidth, slideStep, twoUp });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { cardWidth, slideStep, twoUp } = carousel;
  const activeDot = ((caseSlide % count) + count) % count;

  const handleTransitionEnd = () => {
    if (caseSlide >= count) {
      setTransitioning(false);
      setCaseSlide(caseSlide - count);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitioning(true));
      });
    }
  };

  const goNext = () => {
    setCaseSlide((p) => p + 1);
  };

  const goPrev = () => {
    if (caseSlide === 0) {
      setTransitioning(false);
      setCaseSlide(count);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitioning(true);
          setCaseSlide(count - 1);
        });
      });
    } else {
      setCaseSlide((p) => p - 1);
    }
  };

  const goTo = (index) => {
    setCaseSlide(index);
  };

  return {
    CASE_GAP,
    loopedItems,
    caseSlide,
    activeDot,
    transitioning,
    viewportRef,
    cardWidth,
    slideStep,
    twoUp,
    count,
    handleTransitionEnd,
    goNext,
    goPrev,
    goTo,
  };
}
