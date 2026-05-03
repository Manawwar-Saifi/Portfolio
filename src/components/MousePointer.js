"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const MousePointer = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    // Smooth cursor follow
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });

    const onMouseMove = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    // Hover effects — enlarge ring on links/buttons
    const onEnterLink = () => {
      gsap.to(ring, { width: 50, height: 50, opacity: 0.5, duration: 0.3, ease: "power2.out" });
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { width: 32, height: 32, opacity: 0.3, duration: 0.3, ease: "power2.out" });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach hover listeners to all interactive elements
    const interactives = document.querySelectorAll("a, button, .btn-github, .btn-live, .btn-disabled, .contact-card, .mp");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default MousePointer;
