"use client";

import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".banner-section-home h5", { y: 20, opacity: 0, duration: 0.5 }, 0.2)
      .from(".banner-section-home h1", { y: 30, opacity: 0, duration: 0.6 }, 0.4)
      .from(".banner-section-home h2 strong", { y: 20, opacity: 0, duration: 0.5 }, 0.6)
      .from(".banner-section-home h2 span", { y: 20, opacity: 0, duration: 0.5 }, 0.75)
      .from(".banner-section-home .left > .innerDiv > p", { y: 20, opacity: 0, duration: 0.5 }, 0.9)
      .from(".banner-cta-row", { y: 20, opacity: 0, scale: 0.95, duration: 0.5 }, 1.05)
      .from(".banner-stats .bstat", { y: 25, opacity: 0, duration: 0.4, stagger: 0.08 }, 1.2)
      .from(".banner-stats .bstat-divider", { scaleY: 0, duration: 0.3, stagger: 0.08 }, 1.3)
      .from(".col-div.right .innerDiv a", { x: 30, opacity: 0, duration: 0.4, stagger: 0.06 }, 1.1)
      .from(".col-div.right .innerDiv > p", { y: 15, opacity: 0, duration: 0.4 }, 1.5);
  }, []);

  return (
    <div className="home-page-banner">
      <div className="container">
        <div className="row-div">
          <div className="col-div left">
            <div className="innerDiv">
              <h5>
                <strong>Open To Work · Available For Full-Stack Roles</strong>{" "}
                <span>
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </h5>
              <h1>Hi! I am Manawwar Saifi</h1>
              <h2>
                <strong>Full-Stack Developer</strong>
                <br />
                <span>MERN · React · Node.js</span>
              </h2>
              <p>
                I independently design, build, and deploy production-grade web
                applications — from pixel-perfect frontends to scalable
                backends with real-time systems and cloud deployment.
              </p>
              <div className="banner-cta-row">
                <Link
                  href="https://wa.link/j9q4pq"
                  className="white-button"
                  target="__blank"
                >
                  Connect Now <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
              <div className="banner-stats">
                <div className="bstat">
                  <span className="bstat-num">10+</span>
                  <span className="bstat-label">Production Grade Apps</span>
                </div>
                <div className="bstat-divider"></div>
                <div className="bstat">
                  <span className="bstat-num">18</span>
                  <span className="bstat-label">Client Projects</span>
                </div>
                <div className="bstat-divider"></div>
                <div className="bstat">
                  <span className="bstat-num">3+</span>
                  <span className="bstat-label">Years Experience</span>
                </div>
                <div className="bstat-divider"></div>
                <div className="bstat">
                  <span className="bstat-num">VPS</span>
                  <span className="bstat-label">Live Deployed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-div right">
            <div className="innerDiv">
              <div className="mailWhat">
                <Link
                  href="mailto:manawwarsaifi15@gmail.com"
                  target="__blank"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <span>
                    <i className="ri-mail-check-line"></i>Email
                  </span>
                </Link>
                <Link
                  href="https://wa.link/j9q4pq"
                  target="__blank"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <span>
                    <i className="ri-whatsapp-line"></i>WhatsApp
                  </span>
                </Link>
              </div>
              <div className="socialMedia">
                <Link
                  href="https://www.linkedin.com/in/manawwar-saifi/"
                  target="__blank"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span>
                    <i className="ri-linkedin-fill"></i> LinkedIn
                  </span>
                </Link>
                <Link
                  href="https://github.com/Manawwar-Saifi"
                  target="__blank"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>
                    <i className="ri-github-line"></i> Github
                  </span>
                </Link>
                <Link
                  href="tel:7015544985"
                  target="__blank"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <span>
                    <i className="ri-phone-line"></i> Phone Call
                  </span>
                </Link>
              </div>
              <p data-aos="fade-up" data-aos-duration="2200">
                Currently Available For New Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <i className="ri-arrow-down-line"></i>
      </div>
    </div>
  );
};

export default Banner;
