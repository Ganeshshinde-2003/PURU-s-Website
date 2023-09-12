"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../../public/favicon.ico";
import Link from "next/link";
import logo2 from "../../../public/logo.png";
import { useEffect } from "react";

function page() {
  useEffect(() => {
    const logospan = document.querySelectorAll(`.${styles.logo2}`);
    const intro = document.querySelector(`.${styles.intro}`);

    setTimeout(() => {
      logospan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add(styles.active);
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logospan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove(styles.active);
            span.classList.add(styles.fade);
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2300);
    }, 0);

    return () => {};
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <span className={styles.logo2}>
          <Image src={logo2} alt="logo" />
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" height={180} />
          <p>Haraay Design Studio</p>
        </div>
        <p className={styles.creative}>Our Creative Collaboration</p>
        <p className={styles.desc}>
          Being a Creative Studio Haraay is thoroughly Professional and
          Brilliant in creating strong visual stories. They listen carefully and
          covert ideas into visual realities. The in-depth approach and
          expertise in brand building is one of the core strengths of Haraay.
          <br />
          <br />
          Haraay’s collaboration with Puru’s is one example of blend of
          professionalism and utmost creativity. Haraay is responsible for
          bringing Puru’s identity and defined the flow our story rather than
          just building a brand. This collaboration helped us to build our
          unique brand identity, website, packaging concepts, video stories,
          conceptual hampers and much more! Haraay is and will always remain
          undetachable entity from Puru’s Enterprises. Kudos to our partnership
          and collective vision!
        </p>
        <p className={styles.link}>
          Visite Site:{" "}
          <Link href="https://haraaydesignstudio.com/" target="_black">
            @HaraayDesignStudio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
