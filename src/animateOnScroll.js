import { useState, useEffect, useRef } from "react";

export default function AnimateOnScroll() {
  const elementRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    trackAnimation();
    document.addEventListener("scroll", trackAnimation);
    window.addEventListener("resize", trackAnimation);
  }, []);

  function trackAnimation() {
    const top = window.scrollY;
    const { offsetTop } = elementRef.current;

    if (offsetTop < window.innerHeight + top) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }
  return [elementRef, animate];
}
