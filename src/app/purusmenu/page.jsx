"use client"

import Image from "next/image";
import styles from "./page.module.css";
import wwr from "../../../public/katthy-k-mal-FBX_qonbn5M-unsplash 1.png";
import Approach from "../../../public/ricardo-gomez-angel-WsEAiVwGrwo-unsplash 1.png";
import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

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
    strokeWidth: '1px', // Adjust the stroke width as needed
  };

  const containerStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'opacity 1s, transform 3s',
  };

  return (
    <div style={containerStyle} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Our Story</p>
          <Image src={wwr} className={styles.image} alt="wwt" />
          <Link href="/purustories">
            <div className={styles.circle}>
              <FaArrowDown style={iconStyle} />
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          <p>Our Approach</p>
          <Image src={Approach} className={styles.image} alt="wwt" />
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