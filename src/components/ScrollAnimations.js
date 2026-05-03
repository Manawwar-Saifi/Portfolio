"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  useEffect(() => {
    // ── Scroll Progress Bar ──
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
    gsap.set(progressBar, { scaleX: 0 });

    // ── Section Headings — Character Stagger Reveal ──
    const headings = document.querySelectorAll("h3");
    headings.forEach((heading) => {
      // Skip if already processed
      if (heading.dataset.animated) return;
      heading.dataset.animated = "true";

      const text = heading.textContent;
      heading.textContent = "";
      heading.style.overflow = "hidden";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(40px)";
        heading.appendChild(span);
      });

      gsap.to(heading.querySelectorAll("span"), {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── Project Cards — Depth Reveal (blur + rotation) ──
    const cards = document.querySelectorAll(".mp");
    cards.forEach((card) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        rotateX: 3,
        filter: "blur(4px)",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── Feature List Items — Stagger Fade ──
    const featureLists = document.querySelectorAll(".mp-features ul, .mp-tech .tech-table");
    featureLists.forEach((list) => {
      const items = list.children;
      gsap.from(items, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: list,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // ── Problems Solved Cards — Scale Stagger ──
    const probCards = document.querySelectorAll(".prob-card");
    if (probCards.length) {
      gsap.from(probCards, {
        scale: 0.92,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: probCards[0].parentElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // ── Stats Counter Animation ──
    const statNums = document.querySelectorAll(".bstat-num");
    statNums.forEach((el) => {
      const text = el.textContent;
      const match = text.match(/(\d+)/);
      if (!match) return;

      const target = parseInt(match[1]);
      const suffix = text.replace(match[1], "").trim();
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.5,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = suffix.startsWith("+")
            ? obj.val + suffix
            : obj.val + suffix;
        },
      });
    });

    // ── Contact Cards — Stagger Rise ──
    const contactCards = document.querySelectorAll(".contact-card");
    if (contactCards.length) {
      gsap.from(contactCards, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCards[0].parentElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // ── Education Cards — Flip Enhance (keep AOS but add depth) ──

    // ── Banner Parallax — Background moves slower ──
    const bannerBg = document.querySelector(".banner-section-home");
    if (bannerBg) {
      gsap.to(bannerBg, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: bannerBg,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (progressBar.parentNode) progressBar.parentNode.removeChild(progressBar);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
