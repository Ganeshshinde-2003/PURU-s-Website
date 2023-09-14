"use client";

import styles from "./style.module.css";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const intro = document.querySelector(`.${styles.intro}`);

    const incrementProgress = () => {
      if (loadingProgress < 100) {
        setLoadingProgress(loadingProgress + 1);
      }
    };

    const interval = setInterval(incrementProgress, 20);

    setTimeout(() => {
      clearInterval(interval);
      intro.style.top = "-100vh";
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [loadingProgress]);

  return (
    <div className={styles.intro}>
      <div className={styles.progressContainer}>
        <div className={styles.progressText}>{loadingProgress}%</div>
      </div>
    </div>
  );
};

export default SplashScreen;
