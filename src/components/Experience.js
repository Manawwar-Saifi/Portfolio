"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import VideoPreview from "./VideoPreview";

// project images
import bosstyres from "../../public/projects/bosstyres.webp";
import confidentiality from "../../public/projects/confidentiality.webp";
import crossroad from "../../public/projects/crossroad.webp";
import dhirsonjewellery from "../../public/projects/dhirsonjewellery.webp";
import hkdesign from "../../public/projects/hkdesign.webp";
import jyotishvedm from "../../public/projects/jyotishvedm.webp";
import knockout from "../../public/projects/knockout.webp";
import madhucookware from "../../public/projects/madhucookware.webp";
import prozvofit from "../../public/projects/prozvofit.webp";
import sansafe from "../../public/projects/sansafe.webp";
import ssr from "../../public/projects/ssr.webp";
import thirstybulls from "../../public/projects/thirstybulls.webp";
import ujjwaldental from "../../public/projects/ujjwal-dental.webp";

//

const Experience = () => {
  return (
    <div className="experience-home-section" id="home-experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>My Experience</h3>
            <div
              className="mid-div"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h4>Full-Stack Developer — 3+ Years</h4>
              <h6>GRID IT SOLUTIONS | July 2023 – Present</h6>
              <ul>
                <li>
                  Started as a frontend developer, independently grew into <strong>full-stack MERN development</strong> by building production apps from scratch.
                </li>
                <li>
                  Built and delivered <strong>18+ client websites</strong> across WordPress, Shopify, Wix Studio &amp; custom code.
                </li>
                <li>
                  Shipped <strong>10+ production-grade full-stack apps</strong> — including a B2B CRM (live on VPS with Docker + CI/CD), dental clinic CMS, and pet grooming platform.
                </li>
                <li>
                  Expertise in <strong>React, Node.js, MongoDB, JWT, RBAC, Razorpay/Stripe, Socket.IO, PDFKit, GSAP, Lenis</strong> and modern web animation.
                </li>
              </ul>
            </div>

            <h3>My Projects</h3>
            <div
              className="fullstack-projects-div"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h4>Full-Stack MERN Projects</h4>
              <p className="fs-intro">
                Independently designed, built, and deployed production-grade
                full-stack applications — frontend, backend, database, and
                cloud deployment all done solo. These are not frontend projects;
                every layer of the stack was built from scratch.
              </p>

              {/* ── PROJECT 1: KB CRM ── */}
              <div className="mp">
                <div className="mp-head">
                  <div className="mp-meta">
                    <span className="mp-num">01</span>
                    <div>
                      <div className="mp-title-row">
                        <h5>KB CRM</h5>
                        <span className="badge-live"><i className="ri-checkbox-blank-circle-fill"></i>Live on VPS</span>
                      </div>
                      <p className="mp-desc">
                        Independently built a B2B CRM for KB Enterprises —
                        buyers, orders, quotations, invoices, and supplier
                        management. Containerized with Docker and deployed on
                        VPS via CI/CD pipeline.
                      </p>
                      <p className="mp-rbac">
                        Solo Developer&nbsp;&nbsp;·&nbsp;&nbsp;RBAC&nbsp;&nbsp;→&nbsp;&nbsp;Buyer · Sub Admin · Super Admin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-body">
                  <div className="mp-features">
                    <p className="mp-col-label">What it does</p>
                    <ul>
                      <li><strong>Quotation 5-status lifecycle</strong> (Open → Accepted → Converted → PI → Invoice) with PDF export</li>
                      <li><strong>PI-to-invoice flow</strong> · line items · supplier allocation · dispatch tracking</li>
                      <li><strong>A4 print-preview components</strong> for invoices, quotations, PIs &amp; dispatches (USD/INR)</li>
                      <li>Sub-admin <strong>granular permissions across 8 modules</strong> (manage_orders, manage_invoices…)</li>
                      <li><strong>4-step buyer registration</strong> with email OTP + admin approval workflow</li>
                      <li>Dockerized on VPS with <strong>automated CI/CD pipeline</strong> — built and managed independently</li>
                    </ul>
                  </div>
                  <div className="mp-tech">
                    <p className="mp-col-label">Tech stack</p>
                    <div className="tech-table">
                      <div className="tech-row"><span className="tc">Frontend</span><span className="tv">React 19 · Vite · MUI v7 · Tailwind CSS · React Query · Zustand</span></div>
                      <div className="tech-row"><span className="tc">Backend</span><span className="tv">Node.js · Express · MongoDB · Mongoose</span></div>
                      <div className="tech-row"><span className="tc">PDF</span><span className="tv">PDFKit · html2pdf.js · A4 print previews</span></div>
                      <div className="tech-row"><span className="tc">Auth</span><span className="tv">JWT · bcrypt · Role &amp; permission middleware</span></div>
                      <div className="tech-row"><span className="tc">Infra</span><span className="tv">Docker · VPS · CI/CD pipeline</span></div>
                      <div className="tech-row"><span className="tc">Services</span><span className="tv">Cloudinary · Nodemailer · Joi validation</span></div>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-foot">
                  <div className="mp-actions">
                    <Link href="https://github.com/Tous-India/KB-Enterprise" target="_blank" className="btn-github">
                      <i className="ri-github-fill"></i>GitHub
                    </Link>
                  </div>
                </div>
                <VideoPreview src="https://res.cloudinary.com/dwb9ftwd3/video/upload/v1777790835/kb-enterprise_imqygb.mp4" title="KB CRM" />
                <div className="mp-divider" />
                <div className="mp-problems">
                  <p className="mp-col-label">
                    <i className="ri-lightbulb-flash-line"></i> Problems Solved For The Client
                  </p>
                  <div className="problems-grid">
                    <div className="prob-card">
                      <i className="ri-tools-line"></i>
                      <div>
                        <strong>Everything Was Manual</strong>
                        <p>Purchasing, selling, orders, and client (buyer/seller) management — all tracked by hand with no system.</p>
                      </div>
                    </div>
                    <div className="prob-card">
                      <i className="ri-search-2-line"></i>
                      <div>
                        <strong>No Quick Search</strong>
                        <p>Finding any order or client detail required going through records one by one. Now any record is found instantly.</p>
                      </div>
                    </div>
                    <div className="prob-card">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <strong>No Financial Visibility</strong>
                        <p>No way to see real-time profit/loss across sales and purchases. Now fully trackable with analytics.</p>
                      </div>
                    </div>
                    <div className="prob-card">
                      <i className="ri-database-2-line"></i>
                      <div>
                        <strong>Legacy Data Migration</strong>
                        <p>Client can upload all existing historical records into the system — no data left behind.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── PROJECT 2: OhMyPet ── */}
              <div className="mp">
                <div className="mp-head">
                  <div className="mp-meta">
                    <span className="mp-num">02</span>
                    <div>
                      <div className="mp-title-row">
                        <h5>OhMyPet</h5>
                        <span className="badge-indev">In Development</span>
                      </div>
                      <p className="mp-desc">
                        Independently designed and built a professional pet
                        grooming platform — multi-role access, real-time
                        booking lifecycle, dual payment gateways, and automated
                        reminders.
                      </p>
                      <p className="mp-rbac">
                        Solo Developer&nbsp;&nbsp;·&nbsp;&nbsp;RBAC&nbsp;&nbsp;→&nbsp;&nbsp;Customer · Groomer · Admin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-body">
                  <div className="mp-features">
                    <p className="mp-col-label">What it does</p>
                    <ul>
                      <li><strong>Multi-step booking wizard</strong> — pet, date/time, address, groomer assignment &amp; review</li>
                      <li>Real-time notifications via Socket.IO + <strong>service OTP verification</strong> via email</li>
                      <li>Dual payments <strong>(Razorpay + Stripe)</strong> with wallet, coupon codes &amp; referral system</li>
                      <li><strong>node-cron reminders</strong> — 8 PM day-before + 7 AM same-day (IST)</li>
                      <li><strong>18 Nodemailer email templates</strong> covering the full booking lifecycle</li>
                      <li>Groomer earnings dashboard · <strong>admin analytics, commission &amp; payroll</strong></li>
                    </ul>
                  </div>
                  <div className="mp-tech">
                    <p className="mp-col-label">Tech stack</p>
                    <div className="tech-table">
                      <div className="tech-row"><span className="tc">Frontend</span><span className="tv">React 18 · Vite · MUI v5 · React Query · Zustand</span></div>
                      <div className="tech-row"><span className="tc">Backend</span><span className="tv">Node.js · Express · MongoDB · Mongoose</span></div>
                      <div className="tech-row"><span className="tc">Real-time</span><span className="tv">Socket.IO</span></div>
                      <div className="tech-row"><span className="tc">Payments</span><span className="tv">Razorpay · Stripe · Webhooks</span></div>
                      <div className="tech-row"><span className="tc">Auth</span><span className="tv">JWT · bcrypt · HTTP-only cookies</span></div>
                      <div className="tech-row"><span className="tc">Services</span><span className="tv">Cloudinary · Nodemailer · node-cron</span></div>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-foot">
                  <div className="mp-actions">
                    <span className="btn-disabled"><i className="ri-github-fill"></i>In Development</span>
                  </div>
                  <div className="mp-impact">
                    <i className="ri-bar-chart-line"></i> Impact &amp; Challenges — Coming Soon
                  </div>
                </div>
                <VideoPreview src="https://res.cloudinary.com/dwb9ftwd3/video/upload/v1777794135/ohmypet_n0xsqc.mp4" title="OhMyPet" />
              </div>

              {/* ── PROJECT 3: Ujjwal Dental CMS ── */}
              <div className="mp">
                <div className="mp-head">
                  <div className="mp-meta">
                    <span className="mp-num">03</span>
                    <div>
                      <div className="mp-title-row">
                        <h5>Ujjwal Dental CMS</h5>
                        <span className="badge-indev">In Development</span>
                      </div>
                      <p className="mp-desc">
                        Independently built a complete dental clinic management
                        system — admin &amp; patient portals covering
                        enquiries, appointments, treatments, billing, PDF
                        invoices, and memberships.
                      </p>
                      <p className="mp-rbac">
                        Solo Developer&nbsp;&nbsp;·&nbsp;&nbsp;RBAC&nbsp;&nbsp;→&nbsp;&nbsp;Patient · Staff · Admin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-body">
                  <div className="mp-features">
                    <p className="mp-col-label">What it does</p>
                    <ul>
                      <li><strong>16 admin modules</strong> — patients, appointments, treatments, tests, billing, reports, memberships</li>
                      <li>9 patient portal pages with <strong>4-step booking wizard</strong> + Razorpay payment</li>
                      <li><strong>PDF invoice &amp; report generation</strong> via PDFKit with auto-numbering (INV-2401-0001)</li>
                      <li>Membership plans <strong>(Silver / Gold / Platinum)</strong> with auto-discount on invoices</li>
                      <li><strong>Lead pipeline</strong> — submit, assign, follow-up, spam-mark, convert to patient</li>
                      <li>Multi-clinic support · X-ray/OPG via Cloudinary · <strong>passwordless OTP login</strong></li>
                    </ul>
                  </div>
                  <div className="mp-tech">
                    <p className="mp-col-label">Tech stack</p>
                    <div className="tech-table">
                      <div className="tech-row"><span className="tc">Frontend</span><span className="tv">React 19 · Vite · MUI v7 · Tailwind CSS · React Query · Zustand</span></div>
                      <div className="tech-row"><span className="tc">Backend</span><span className="tv">Node.js · Express · MongoDB · Mongoose</span></div>
                      <div className="tech-row"><span className="tc">PDF</span><span className="tv">PDFKit · Auto-numbered invoices &amp; reports</span></div>
                      <div className="tech-row"><span className="tc">Payments</span><span className="tv">Razorpay · Webhooks</span></div>
                      <div className="tech-row"><span className="tc">Auth</span><span className="tv">JWT · bcrypt · Email OTP (passwordless)</span></div>
                      <div className="tech-row"><span className="tc">Storage</span><span className="tv">Cloudinary (X-ray, OPG, prescriptions)</span></div>
                    </div>
                  </div>
                </div>
                <div className="mp-divider" />
                <div className="mp-foot">
                  <div className="mp-actions">
                    <span className="btn-disabled"><i className="ri-github-fill"></i>In Development</span>
                    <Link href="https://ujjwaldentalplanet.com/" target="_blank" className="btn-live">
                      <i className="ri-external-link-line"></i>Client Site
                    </Link>
                  </div>
                  <div className="mp-impact">
                    <i className="ri-bar-chart-line"></i> Impact &amp; Challenges — Coming Soon
                  </div>
                </div>
                <VideoPreview src="https://res.cloudinary.com/dwb9ftwd3/video/upload/v1777794112/ujjwal-dental_eb8wrb.mp4" title="Ujjwal Dental CMS" />
              </div>

            </div>

            <h3>Client Projects</h3>
            <div
              className="mid-div"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="projects-done">
                <div className="row project-row text-center">
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://www.crossroadshospital.co.in/" target="__blank">
                      <Image src={crossroad} width={400} height={400} alt="" />
                      <h5>Crossroad Hospital</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://www.confidentlychic.in/" target="__blank">
                      <Image src={confidentiality} width={400} height={400} alt="" />
                      <h5>Confidently Chic</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://ssrdiesandmoulds.com/" target="__blank">
                      <Image src={ssr} width={400} height={400} alt="" />
                      <h5>SSR Dies And Moulds</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://bosstyres.com/" target="__blank">
                      <Image src={bosstyres} width={400} height={400} alt="" />
                      <h5>Boss Tyres</h5>
                    </Link>
                  </div>
                </div>
                <div className="row project-row text-center">
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://prozvofit.com/" target="__blank">
                      <Image src={prozvofit} width={400} height={400} alt="" />
                      <h5>Prozvofit</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://www.jyotishvedm.com/" target="__blank">
                      <Image src={jyotishvedm} width={400} height={400} alt="" />
                      <h5>Jyotish Vedm</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://www.sansafe.in/" target="__blank">
                      <Image src={sansafe} width={400} height={400} alt="" />
                      <h5>SanSafe</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://ujjwaldentalplanet.com/" target="__blank">
                      <Image src={ujjwaldental} width={400} height={400} alt="" />
                      <h5>Ujjwal Dental</h5>
                    </Link>
                  </div>
                </div>
                <div className="row project-row text-center">
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://hkdesigngroup.in/" target="__blank">
                      <Image src={hkdesign} width={400} height={400} alt="" />
                      <h5>HK Design Group</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://knockoutsecurity.in/" target="__blank">
                      <Image src={knockout} width={400} height={400} alt="" />
                      <h5>Knockout Security</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://thirstybulls.com/" target="__blank">
                      <Image src={thirstybulls} width={400} height={400} alt="" />
                      <h5>Thirsty Bulls</h5>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://madhucookware.com/" target="__blank">
                      <Image src={madhucookware} width={400} height={400} alt="" />
                      <h5>Madhucookwares</h5>
                    </Link>
                  </div>
                </div>
                <div className="row project-row text-center">
                  <div className="col-lg-3 col-sm-6">
                    <Link href="https://dhirsonsjewelleryhouse.com/" target="__blank">
                      <Image src={dhirsonjewellery} width={400} height={400} alt="" />
                      <h5>Dhirsons Jewellery House</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// 🚀 Growing into Full-Stack Development

// Currently, I am expanding my skills into Full-Stack Development with Next.js and the MERN stack, where I am:

// ✅ Learning backend fundamentals with Node.js & Express
// ✅ Building REST APIs and CRUD applications
// ✅ Working with MongoDB — schemas, models, and database structure
// ✅ Implementing Authentication & Authorization (JWT, middleware)
// ✅ Exploring Next.js Server Components, API routes, and SSR/SSG
// ✅ Understanding deployment and production-level best practices

// My goal is to become a Versatile Full-Stack Developer capable of handling both frontend excellence and backend logic to build fully scalable digital products.
