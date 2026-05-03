"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "@/app/skills.css";

const skillImages = [
  "/skills/html-5.png",
  "/skills/css-3.png",
  "/skills/java-script.png",
  "/skills/bootstrap.png",
  "/skills/tailwind.png",
  "/skills/reactjs.png",
  "/skills/nextjs.png",
  "/skills/expressjs.png",
  "/skills/nodejs.png",
  "/skills/mongodb.png",
  "/skills/postman.png",
  "/skills/git.png",
  "/skills/github.png",
  "/skills/vscode.png",
  "/skills/gsap-greensock.svg",
  "/skills/fancybox.png",
  "/skills/swiperjs.png",
  "/skills/shopify.png",
  "/skills/wix.png",
  "/skills/wordpress.png",
];

function makeSprite(src, loader) {
  const texture = loader.load(src);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.8, 1.8, 1);
  return sprite;
}

const SkillsSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setClearColor(0xededed, 1);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    const group = new THREE.Group();
    skillImages.forEach((src, i) => {
      const phi = Math.acos(-1 + (2 * i) / skillImages.length);
      const theta = Math.sqrt(skillImages.length * Math.PI) * phi;
      const sprite = makeSprite(src, loader);
      sprite.position.setFromSphericalCoords(7, phi, theta);
      group.add(sprite);
    });
    scene.add(group);

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

    let touchStartX = 0;
    let touchStartY = 0;
    let touchIntent = null;

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
        if (dx < 6 && dy < 6) return;
        if (dy > dx * 1.3) {
          touchIntent = "scroll";
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

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isDragging) {
        // live drag
      } else if (Math.abs(velX) > 0.0001 || Math.abs(velY) > 0.0001) {
        velX *= 0.95;
        velY *= 0.95;
        group.rotation.y += velX;
        group.rotation.x += velY;
      } else {
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
      <h3>My Skills</h3>
      <div ref={mountRef} id="skills-3d-container" />
    </div>
  );
};

export default SkillsSphere;
