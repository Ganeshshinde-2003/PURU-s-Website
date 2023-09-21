"use client"

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../../public/logo.png";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [hidden, sethidden] = useState("none");
  const handleLinkClick = (index) => {
    setActiveLink(index);
    sethidden("none");
  };
  const handleMenuIconClick = () => {
    if (window.innerWidth < 800) {
      sethidden(hidden === "none" ? "block" : "none");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link href="/">
          <Image src={Logo} alt="LOGO" className={styles.logoimage} height={150} width={150} /></Link>
        <div className={`${styles.container} ${styles.navbar}`}>
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
            <Link href="/allproducts" onClick={() => handleLinkClick(2)} className={activeLink === 2 ? styles.activeLink : ''}>
              Products
            </Link>
            <Link href="/collaboration" onClick={() => handleLinkClick(3)} className={activeLink === 3 ? styles.activeLink : ''}>
              Collaboration
            </Link>
            <Link href="/contactus" onClick={() => handleLinkClick(4)} className={activeLink === 4 ? styles.activeLink : ''}>
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
            <FiMenu className={styles.search} onClick={handleMenuIconClick} />
          </div>
        </div>
      </div>
      <div className={styles.mobiletab} style={{ display: hidden }}>
        <div className={styles.mobilelinks}>
          <Link href="/" onClick={() => handleLinkClick(0)} className={activeLink === 0 ? styles.activeLink : ''}>
            You
          </Link>
          <Link href="/purusmenu" onClick={() => handleLinkClick(1)} className={activeLink === 1 ? styles.activeLink : ''}>
            Puru's story
          </Link>
          <Link href="/allproducts" onClick={() => handleLinkClick(2)} className={activeLink === 2 ? styles.activeLink : ''}>
              Products
            </Link>
            <Link href="/collaboration" onClick={() => handleLinkClick(3)} className={activeLink === 3 ? styles.activeLink : ''}>
              Collaboration
            </Link>
            <Link href="/contactus" onClick={() => handleLinkClick(4)} className={activeLink === 4 ? styles.activeLink : ''}>
              Contact us
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
