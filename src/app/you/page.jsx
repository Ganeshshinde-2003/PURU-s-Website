"use client";

import Image from "next/image";
import styles from "./style.module.css"
import you from "../../../public/you.png"
import { useEffect } from "react";
import logo2 from "../../../public/logo.png";

const You = () => {
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
            <h1>What <i>"YOU"</i> Need!</h1>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h4>Designed for Future</h4>
                    <p>You can’t buy Umbrellas to protect you from chilling winter
                        winds neither Thermal-Wear to safeguard you in summers!
                        One should have the ‘right’ mindset to provide you with ‘right’
                        solutions to meet your needs. At Puru’s Enterprises, We do
                        channelize our energy to focus on identifying your needs,
                        challenges, pains and help you overcome those and ensure
                        that you ‘Get What You Want’ (GWYW). Human needs are very
                        dynamic on Personal and Professional fronts, We understand
                        this to the core and aiming to be your ‘Solution’ partner to meet
                        your needs and expectations. Let’s cultivate your needs into
                        qualitative lifestyle choices.</p>
                </div>
                <div className={styles.img}>
                    <Image src={you} alt="you" height={700} />
                </div>
            </div>
        </div>
    )
}

export default You;