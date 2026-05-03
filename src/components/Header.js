"use client";
import Lenis from "lenis";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter(); // You can keep this if you plan to use it later, but it's not needed for this specific task.
  const pathname = usePathname();

  // A helper function to determine if a link is active
  const isActive = (path) => {
    // Check for an exact match for the home page
    if (path === "/") {
      return pathname === "/";
    }
    // For other links, check if the current pathname starts with the link's path
    // This is useful for nested routes like /projects/my-first-project
    return pathname.startsWith(path);
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuShow = () => {
    setShowMenu(true);
  };
  const handleMenuHide = () => {
    setShowMenu(false);
  };

  const handleClickOnLi = () => {
    setShowMenu(false);
  };

  return (
    <div className="header-parent-div" id="home-education">
      <header>
        <div className="container">
          <div className="row-div flex justify-between">
            <div
              className="logoDiv w-[30%]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Manawwar Saifi
            </div>
            <div className="nav-bar-div w-[70%]">
              <nav className="w-[100%]  desktop-navbar">
                <ul className="flex justify-between">
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <Link href="/">Home</Link>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1400">
                    <Link href="#home-about">About</Link>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1600">
                    <Link href="#home-experience">Experience</Link>
                  </li>
                  {/* <li data-aos="fade-down" data-aos-duration="1700">
                    <Link href="#home-skills">Skills</Link>
                  </li> */}
                  <li data-aos="fade-down" data-aos-duration="1800">
                    <Link href="#home-journey">Journey</Link>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1900">
                    <Link href="#homeEducation">Education</Link>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="2000">
                    <Link
                      href="mailto:manawwarsaifi15@gmail.com"
                      className="white-button"
                    >
                      Contact <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className={`w-[100%]  phone-navbar ${
                  showMenu ? "show-menu-div" : ""
                }`}
              >
                <span className="close-menu" onClick={handleMenuHide}>
                  <i className="ri-close-large-fill"></i>
                </span>
                <div className="logoDiv">Manawwar Saifi</div>

                <ul className="flex justify-between">
                  <li>
                    <Link href="/" onClick={handleClickOnLi}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#home-about" onClick={handleClickOnLi}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#home-experience" onClick={handleClickOnLi}>
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link href="#home-skills" onClick={handleClickOnLi}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href="#home-journey" onClick={handleClickOnLi}>
                      Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="#homeEducation" onClick={handleClickOnLi}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:manawwarsaifi15@gmail.com"
                      className="white-button"
                    >
                      Contact <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
              <i
                className="ri-menu-5-line phone-ham-menu"
                onClick={handleMenuShow}
              ></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
