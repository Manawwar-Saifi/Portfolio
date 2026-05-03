"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-parent">
      <footer>
        <div className="container-fluid">
          <div className="row-div">
            <div className="col-div footer-brand">
              <p className="footer-name">Manawwar Saifi</p>
              <p className="footer-role">Full-Stack MERN Developer</p>
            </div>
            <div className="col-div">
              <Link href={"tel:7015544985"}>
                <i className="ri-phone-fill"></i>+91-7015544985
              </Link>
            </div>
            <div className="col-div">
              <Link href={"mailto:manawwarsaifi15@gmail.com"}>
                <i className="ri-mail-line"></i> manawwarsaifi15@gmail.com
              </Link>
            </div>
            <div className="col-div">
              <Link
                href={"https://www.linkedin.com/in/manawwar-saifi/"}
                target="__blank"
              >
                <i className="ri-linkedin-box-fill linkedin"></i>
              </Link>
              <Link href={"https://github.com/Manawwar-Saifi"} target="__blank">
                <i className="ri-github-fill github"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
