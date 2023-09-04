"use client"

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../../public/logo.png";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);

  // Function to set the active link when a link is clicked
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
 
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Image src={Logo} alt="LOGO" height={150} width={150} />
        <div className={styles.container}>
          <div className={styles.parent}>
            <div className={styles.box}></div>
          </div>
          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div className={styles.headerlinks}>
            <Link href="/" onClick={() => handleLinkClick(0)} className={activeLink === 0 ? styles.activeLink : ''}>
              You
            </Link>
            <Link href="/purusmenu" onClick={() => handleLinkClick(1)} className={activeLink === 1 ? styles.activeLink : ''}>
              Puru's story
            </Link>
            <Link href="/collaboration" onClick={() => handleLinkClick(2)} className={activeLink === 2 ? styles.activeLink : ''}>
              Collaboration
            </Link>
            <Link href="/contactus" onClick={() => handleLinkClick(3)} className={activeLink === 3 ? styles.activeLink : ''}>
              Contact us
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.parent}>
            <div className={styles.box2}></div>
          </div>
          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div className={styles.headerlinks2}>
            <FaSearch className={styles.search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
