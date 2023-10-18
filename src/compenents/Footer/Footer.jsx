import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../public/logo.png";
import Purus from "../../../public/puru.png";
import { BsArrowRightCircle } from "react-icons/bs";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.part1}>
          <div className={styles.faq}>
            <div className={styles.links}>
              <Link href="/faqs">FAQ</Link>
              <Link href="/">NEWS</Link>
            </div>
            <div className={styles.socialmedia}>
              <Link href="https://instagram.com/puruent?igshid=OGQ5ZDc2ODk2ZA==">
                <FaInstagram className={styles.insta} />
              </Link>
              <Link href="https://wa.me/9967760336">
                <FaWhatsapp className={styles.insta} />
              </Link>
            </div>
          </div>
          <div className={styles.ques}>
            <div className={styles.first}>
              <p className={styles.que}>Do you want more information?</p>
              <p className={styles.ans}>
                Contact our sales team now & it will be their pleasure to help
                you
              </p>
            </div>
            <hr />
            <div className={styles.first}>
              <p className={styles.que}>Want to have a collaboration?</p>
              <p className={styles.ans}>
                Contact our sales team now & it will be their pleasure to help
                you
              </p>
            </div>
          </div>
          <div className={styles.contactus}>
            <div>
              <p className={styles.contact}>Contact Us</p>
            </div>
            <div>
              <Link href="/contactus">
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <Image src={Logo} alt="LOGO" className={styles.logo} />
          <Image src={Purus} alt="LOGOTEXT" className={styles.logotext} />
        </div>
      </div>
      <div className={styles.cpyrgt}>
        <p>@2023 All Rights Reserved.</p>
        <Link href="https://haraaydesignstudio.com/">
          <p>Made by HaraayDesignStudio</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
