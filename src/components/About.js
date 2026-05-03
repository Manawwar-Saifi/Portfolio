import React from "react";

const About = () => {
  return (
    <div
      className="about-page"
      id="home-about"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h3>About Me</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="inner-div">
              {/* <p>
      Frontend Developer (2 years) and BCA graduate with a commitment to Full Stack mastery. My approach is practical: I'm a developer and problem-solver, not a rote learner, leveraging VS Code, Git/GitHub, and internet resources to master new technologies and implement robust solutions. Highly proficient in HTML, CSS, JavaScript, React, and Next.js, with foundational API building experience in Node.js and MongoDB.
     </p> */}
              <h5>I am Manawwar</h5>
              <p>
                <strong>Full-Stack MERN Developer</strong> with{" "}
                <strong>3+ years of experience</strong> — I design, build, and
                deploy complete web apps independently, from schema to
                production. Shipped <strong>10+ production-grade apps</strong>{" "}
                solo: a <strong>B2B CRM live on VPS</strong> (Docker + CI/CD),
                a <strong>dental clinic CMS</strong> (PDF invoicing, payments),
                and a <strong>pet grooming platform</strong> (real-time,
                dual payments). I learn by solving real problems —{" "}
                <span>not tutorials.</span>
              </p>
              <p>
                Stack:{" "}
                <strong>
                  React · Next.js · Node.js · MongoDB · JWT · RBAC ·
                  Razorpay/Stripe · Socket.IO · Docker · CI/CD
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
