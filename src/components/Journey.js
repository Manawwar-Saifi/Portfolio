"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const bars = section.querySelectorAll(".col-div > div:not(.dot-div)");
    const dots = section.querySelector(".dot-div");

    // Set initial state — bars at 0 height
    gsap.set(bars, { scaleY: 0, transformOrigin: "bottom center" });
    gsap.set(dots, { opacity: 0 });

    // Animate bars growing upward with stagger
    gsap.to(bars, {
      scaleY: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Dots fade in after bars
    gsap.to(dots, {
      opacity: 1,
      duration: 0.5,
      delay: 0.12 * bars.length + 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="journey-section-home" id="home-journey" ref={sectionRef}>
      <h3>My Learning Journey</h3>
      <div className="container-fluid">
        <div className="row-div">
          <div className="col-div">
            <div className="html">
              <span>HTML</span>
            </div>
            <div className="css">
              <span>CSS</span>
            </div>
            <div className="js">
              <span>JS</span>
            </div>
            <div className="react">
              <span>REACT.JS</span>
            </div>
            <div className="next">
              <span>NEXT.JS</span>
            </div>
            <div className="node">
              <span>NODE.JS</span>
            </div>
            <div className="git">
              <span>
                GIT &<br /> GITHUB
              </span>
            </div>
            <div className="express">
              <span>EXPRESS</span>
            </div>
            <div className="mongodb">
              <span>MONGODB</span>
            </div>
            <div className="fullstack">
              <span>FULL<br />STACK</span>
            </div>
            <div className="dot-div">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
