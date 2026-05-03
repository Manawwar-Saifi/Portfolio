"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "@/app/skills.css";

const skills = [
  "HTML", "CSS", "Javascript", "Bootstrap", "TailwindCSS",
  "ReactJS", "NextJS", "ExpressJS", "NodeJS", "MongoDB",
  "POSTMAN", "GIT", "Github", "vscode", "GSAP",
  "FancyboxJS", "SwiperJS", "Shopify", "Wix Studio", "Wordpress",
];

function makeSprite(text) {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 80;
  const ctx = canvas.getContext("2d");

  // pill background
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.beginPath();
  ctx.roundRect(3, 3, canvas.width - 6, canvas.height - 6, 40);
  ctx.fill();

  // border
  ctx.strokeStyle = "rgba(0,0,0,0.18)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // text
  ctx.fillStyle = "#111111";
  ctx.font = "bold 30px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(4, 1.1, 1);
  return sprite;
}

const Skills3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setClearColor(0xededed, 1);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Build sphere of skill sprites (Fibonacci distribution)
    const group = new THREE.Group();
    skills.forEach((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const sprite = makeSprite(skill);
      sprite.position.setFromSphericalCoords(7, phi, theta);
      group.add(sprite);
    });
    scene.add(group);

    // Drag state with velocity for inertia
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let velX = 0;
    let velY = 0;

    const startDrag = (x, y) => {
      isDragging = true;
      prevX = x;
      prevY = y;
      velX = 0;
      velY = 0;
      gsap.killTweensOf(group.scale);
      gsap.to(group.scale, { x: 0.88, y: 0.88, z: 0.88, duration: 0.25, ease: "power2.out" });
    };

    const moveDrag = (x, y) => {
      if (!isDragging) return;
      velX = (x - prevX) * 0.006;
      velY = (y - prevY) * 0.006;
      group.rotation.y += velX;
      group.rotation.x += velY;
      prevX = x;
      prevY = y;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" });
    };

    const onMouseDown = (e) => startDrag(e.clientX, e.clientY);
    const onMouseMove = (e) => moveDrag(e.clientX, e.clientY);
    const onMouseUp = () => endDrag();

    // Touch: detect vertical-vs-horizontal intent before committing to drag,
    // so vertical swipes fall through to page scroll instead of rotating the sphere.
    let touchStartX = 0;
    let touchStartY = 0;
    let touchIntent = null; // null | "drag" | "scroll"

    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchIntent = null;
    };

    const onTouchMove = (e) => {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      if (touchIntent === null) {
        const dx = Math.abs(x - touchStartX);
        const dy = Math.abs(y - touchStartY);
        if (dx < 6 && dy < 6) return; // too small — wait
        if (dy > dx * 1.3) {
          touchIntent = "scroll"; // let the page scroll
          return;
        }
        touchIntent = "drag";
        startDrag(x, y);
        return;
      }

      if (touchIntent === "drag") moveDrag(x, y);
    };

    const onTouchEnd = () => {
      if (touchIntent === "drag") endDrag();
      touchIntent = null;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Render loop — inertia after drag, auto-rotate when idle
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isDragging) {
        // live drag — rotation applied in moveDrag
      } else if (Math.abs(velX) > 0.0001 || Math.abs(velY) > 0.0001) {
        // inertia: continue spinning with damping after release
        velX *= 0.95;
        velY *= 0.95;
        group.rotation.y += velX;
        group.rotation.x += velY;
      } else {
        // idle auto-rotate
        velX = 0;
        velY = 0;
        group.rotation.y += 0.003;
        group.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="main-skill-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="home-skills-3d"
    >
      <h3>Tech Stack</h3>
      <div
        ref={mountRef}
        id="skills-3d-container"
      />
    </div>
  );
};

export default Skills3D;
