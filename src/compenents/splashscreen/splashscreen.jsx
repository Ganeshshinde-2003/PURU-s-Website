"use client"

import styles from "./style.module.css"
import { useEffect } from "react";

const SplashScreen = () => {
useEffect(() => {
    const logospan = document.querySelectorAll(`.${styles.logo}`); // Use querySelectorAll to select all elements with the class
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
        intro.style.top = '-100vh';
      }, 2300);
  
    }, 0); // Delay the execution to ensure all elements are loaded
  
    return () => {
      // Clean up any timers or other resources if needed
    };
  }, []);
    return(
        <div className={styles.intro}>
          <h1 className={styles.logoheader}>
            <span className={styles.logo}>PURU</span><span className={styles.logo}>'s</span>
          </h1>
        </div>
    )
}

export default SplashScreen