"use client";

import React from "react";
import styles from "./page.module.css";
import Form from "@/compenents/Forms/Form";
import { FaArrowDown } from "react-icons/fa";
import { useEffect } from "react";
import Image from "next/image";
import logo2 from "../../../public/logo.png";
import conct from "../../../public/contactusimage.jpg"

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
  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <span className={styles.logo2}>
          <Image src={logo2} alt="logo" />
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.namings}>
          <p className={styles.contact}>Contact Us</p>
          <p className={styles.askings}>
            Questions? Feedback?
            <br /> Product ideas?
            <br />
            <span>Write to us</span>
          </p>
          <p className={styles.askings}>puru@purusenterprises.in</p>
          <p className={styles.askings}>+91 9967760336</p>
          <div className={styles.imgcontainer}>
            <Image src={conct} height={200} width={200} alt="contactus" />
          <div className={styles.circle}>
            <FaArrowDown style={iconStyle} />
          </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default page;
