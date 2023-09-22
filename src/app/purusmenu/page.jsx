"use client";

import Image from "next/image";
import styles from "./page.module.css";
import wwr from "../../../public/about.png";
import Approach from "../../../public/PURU WEBSITE ILLUSTRATIONS-06.png";
import pencil from "../../../public/puru's product 7 1.png"
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation by a few milliseconds to ensure it runs after the component is rendered
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(animationTimeout); // Cleanup on unmount
  }, []);

  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };

  const containerStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "opacity 1s, transform 2s",
  };

  return (
    <div style={containerStyle} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Our Story</p>
          <Link href="/purustories" className={styles.image}>
            <Image src={wwr} className={styles.image} alt="wwt" />
          </Link>
          <Link href="/purustories">
            <div className={styles.circle}>
              <FaArrowDown style={iconStyle} />
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          <p>Sustainable Store</p>
          <Link href="/allproducts" className={styles.image}>
            <Image src={pencil} className={styles.image} alt="wwt" />
          </Link>
          <Link href="/allproducts">
            <div className={styles.circle}>
              <FaArrowDown style={iconStyle} />
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          <p>Our Approach</p>
          <Link href="/ourapproach" className={styles.image}>
            <Image src={Approach} className={styles.image} alt="wwt" />
          </Link>
          <Link href="/ourapproach">
            <div className={styles.circle}>
              <FaArrowDown style={iconStyle} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
