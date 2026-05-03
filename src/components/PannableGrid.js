"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const CARD_SIZE = 200;
const CARD_GAP = 16;
const COLS = 4;

const cards = [
  { title: "KB CRM", subtitle: "Live on VPS", href: "https://github.com/Tous-India/KB-Enterprise" },
  { title: "OhMyPet", subtitle: "Pet Grooming", href: "#home-experience" },
  { title: "Ujjwal Dental", subtitle: "Clinic CMS", href: "https://ujjwaldentalplanet.com/" },
  { title: "Crossroad", subtitle: "Hospital", href: "https://www.crossroadshospital.co.in/" },
  { title: "Confidently Chic", subtitle: "Fashion", href: "https://www.confidentlychic.in/" },
  { title: "SSR Dies", subtitle: "Industrial", href: "https://ssrdiesandmoulds.com/" },
  { title: "Boss Tyres", subtitle: "Automotive", href: "https://bosstyres.com/" },
  { title: "Prozvofit", subtitle: "Fitness", href: "https://prozvofit.com/" },
  { title: "Jyotish Vedm", subtitle: "Astrology", href: "https://www.jyotishvedm.com/" },
  { title: "SanSafe", subtitle: "Health", href: "https://www.sansafe.in/" },
  { title: "HK Design", subtitle: "Architecture", href: "https://hkdesigngroup.in/" },
  { title: "Knockout", subtitle: "Security", href: "https://knockoutsecurity.in/" },
  { title: "Thirsty Bulls", subtitle: "Beverage", href: "https://thirstybulls.com/" },
  { title: "Madhucookware", subtitle: "Cookware", href: "https://madhucookware.com/" },
  { title: "Dhirsons", subtitle: "Jewellery", href: "https://dhirsonsjewelleryhouse.com/" },
  { title: "Email Me", subtitle: "Let's talk", href: "mailto:manawwarsaifi15@gmail.com" },
];

const ROWS = Math.ceil(cards.length / COLS);
const GRID_W = COLS * CARD_SIZE + (COLS - 1) * CARD_GAP;
const GRID_H = ROWS * CARD_SIZE + (ROWS - 1) * CARD_GAP;

export default function PannableGrid() {
  const viewportRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const grid = gridRef.current;
    if (!viewport || !grid) return;

    const computeBounds = () => {
      const vw = viewport.clientWidth;
      const vh = viewport.clientHeight;
      return {
        minX: Math.min(0, vw - GRID_W),
        maxX: 0,
        minY: Math.min(0, vh - GRID_H),
        maxY: 0,
      };
    };

    const b = computeBounds();
    gsap.set(grid, {
      x: b.minX / 2,
      y: b.minY / 2,
      force3D: true,
      willChange: "transform",
    });

    const [instance] = Draggable.create(grid, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.92,
      throwResistance: 200,
      maxDuration: 3,
      minDuration: 1.2,
      bounds: b,
      onPress() { this.target.style.cursor = "grabbing"; },
      onRelease() { this.target.style.cursor = "grab"; },
    });

    const onResize = () => instance.applyBounds(computeBounds());
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      instance.kill();
    };
  }, []);

  const openCard = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pannable-section">
      <h3>Drag To Explore</h3>
      <p className="pannable-hint">Pan in any direction · Double-click a card to open</p>
      <div ref={viewportRef} className="pannable-viewport">
        <div
          ref={gridRef}
          className="pannable-grid"
          style={{
            width: GRID_W,
            height: GRID_H,
            gridTemplateColumns: `repeat(${COLS}, ${CARD_SIZE}px)`,
            gap: `${CARD_GAP}px`,
          }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="pannable-card"
              onClick={(e) => e.preventDefault()}
              onDoubleClick={() => openCard(c.href)}
              style={{ width: CARD_SIZE, height: CARD_SIZE }}
            >
              <span className="pc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="pc-title">{c.title}</span>
              <span className="pc-sub">{c.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
