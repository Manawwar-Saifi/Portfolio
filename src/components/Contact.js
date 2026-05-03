"use client";

import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-section" id="home-contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Let&apos;s Work Together</h3>
            <p className="contact-subtitle">
              Available for full-stack roles & freelance projects
            </p>
            <div className="contact-grid">
              <Link
                href="mailto:manawwarsaifi15@gmail.com"
                className="contact-card"
              >
                <i className="ri-mail-line"></i>
                <span>Email</span>
                <p>manawwarsaifi15@gmail.com</p>
              </Link>
              <Link
                href="https://wa.me/917015544985"
                target="_blank"
                className="contact-card"
              >
                <i className="ri-whatsapp-line"></i>
                <span>WhatsApp</span>
                <p>+91-7015544985</p>
              </Link>
              <Link
                href="https://linkedin.com/in/manawwar-saifi"
                target="_blank"
                className="contact-card"
              >
                <i className="ri-linkedin-box-fill"></i>
                <span>LinkedIn</span>
                <p>@manawwar-saifi</p>
              </Link>
              <Link
                href="https://github.com/Manawwar-Saifi"
                target="_blank"
                className="contact-card"
              >
                <i className="ri-github-fill"></i>
                <span>GitHub</span>
                <p>@Manawwar-Saifi</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
