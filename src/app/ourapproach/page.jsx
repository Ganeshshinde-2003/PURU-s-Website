"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css"; // You can remove this import
import MainImage from "../../../public/ourapproach.png";

function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const horizontalMovement = scrollY * 0.5; // Adjust the multiplier to control the horizontal movement

  return (
    <div className={styles.main}>
      <div className={styles.imgcontainer}>
        <Image src={MainImage} alt="Main-Image" />
        <p className={styles.textonimg}>
          Discover a fresh perspective for ‘You’ to adapt to challenging
          situations and take conscious decisions for a better lifestyle. Being
          a purpose-driven enterprise, we take a proactive approach to add value
          to businesses and communities. Our aim is to provide the most effective
          and efficient solutions, both on services and product fronts, thus
          uplifting the socio-economic system.
        </p>
      </div>
      <p className={styles.disc}>
        Our ‘You’-centric mindset gives us an added advantage to offer solutions
        beneficial in current situations and build a progressive future. Our
        sustainable approach covers all the important aspects – human, social,
        economic, and environmental sustainability, and we are committed to
        contribute directly towards a better society. All our operational
        practices are aligned with our core purpose and exhibit our holistic
        approach toward a progressive society.{" "}
      </p>
      <span
        className={styles.giving}
        style={{ transform: `translateX(${horizontalMovement}px)` }}
      >
        Giving Back
      </span>
      {/* <span className={styles.community}>to Community</span> */}
    </div>
  );
}

export default Page;
