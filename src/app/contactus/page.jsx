"use client";

import React from "react";
import styles from "./page.module.css";
import Form from "@/compenents/Forms/Form";
import { FaArrowDown } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { useEffect } from "react";
import Image from "next/image";

function page() {
  useEffect(() => {
    const logospan = document.querySelectorAll(`.${styles.logo}`);
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
  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <span className={styles.logo}>
          <Image src={logo} alt="logo" />
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.namings}>
          <p className={styles.contact}>Contact Us</p>
          <p className={styles.askings}>
            Questions? Feedback?
            <br /> Product ideas?
            <br />
            <br />
            <span>Write to us</span>
          </p>
          <p className={styles.askings}>puru@purusenterprises.in</p>
          <p className={styles.askings}>+91 9967760336</p>
          <div className={styles.circle}>
            <FaArrowDown style={iconStyle} />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default page;
