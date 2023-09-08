import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../public/logo.png";
import Purus from "../../../public/purus.png";

import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.part1}>
          <div className={styles.links}>
            <Link href="/faqs">FAQ</Link>
            <Link href="/">News</Link>
          </div>
          <div className={styles.socialmedia}>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
          </div>
          <Image src={Logo} className={styles.logo} alt="LOGO" height={180} />
        </div>
        <div className={styles.part2}>
          <div className={styles.text}>
            <p>
              Do you want more information? <br />
              <span className={styles.span}>
                Contact our sales team now and it will be their pleasure to help
                you
              </span>
            </p>
          </div>
          <div className={styles.cotactus}>
            <p>Contact Us</p>
            <div className={styles.arrowdown}>
              <Link href="/contactus">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <Image
            src={Purus}
            alt="PURUS"
            width={300}
            className={styles.purustext}
          />
        </div>
      </div>
      <div className={styles.cpyrgt}>
        <p>@2023 All Rights Reserved.</p>
        <Link href="https://haraaydesignstudio.com/">
          <p>Designed by Haraay Design Studio</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
