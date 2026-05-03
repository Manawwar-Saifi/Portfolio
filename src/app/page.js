"use client";

import Banner from "@/components/Banner";
import Journey from "@/components/Journey";
import About from "../components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SkillsSphere from "@/components/SkillsSphere";
import Education from "@/components/Education";
import MousePointer from "@/components/MousePointer";
import ScrollAnimations from "@/components/ScrollAnimations";
import AOS from "aos";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    AOS.init({ offset: 50, duration: 600 });
  }, []);
  return (
    <div className="main-home-page">
      <MousePointer />
      <ScrollAnimations />
      <Banner />
      <About />
      <Experience id="#home-experience" />
      {/* <Skills /> */}
      <SkillsSphere />
      <Journey />
      <Education />
      {/* <Contact /> */}
    </div>
  );
}
