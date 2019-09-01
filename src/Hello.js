import React from "react";
import AnimateOnScroll from "./animateOnScroll";

export default function Hello({ name }) {
  const [someRef, animate] = AnimateOnScroll();

  return (
    <h1 ref={someRef} className={`main ${animate ? "animate" : "hidden"}`}>
      Hello {name}!
    </h1>
  );
}
