import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../../public/logo.png";

import React from 'react'
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.part1}>
          <div className={styles.links}>
            <Link href="/">FAQ</Link>
            <Link href="/">News</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.socialmedia}>
            <Link href="/"><FaInstagram /></Link>
            <Link href="/"><FaFacebook /></Link>
            <Link href="/"><FaTwitter /></Link>
          </div>          
          <Image src={Logo} alt="LOGO" height={180} />
        </div>
        <div className={styles.part2}>
        <div className={styles.text}>
            <p>Do you want more information? <br />Contact our sales team now and it will be their pleasure to help you</p>
          </div>
          <div className={styles.cotactus}>
            <p>Contact Us</p> 
            <div className={styles.arrowdown}><FaArrowRight /></div> 
          </div>
          <p className={styles.logoname}>puru's</p>
        </div>
      </div>
    </div>
  )
}

export default Footer