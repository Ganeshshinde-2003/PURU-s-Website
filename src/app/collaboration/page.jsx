import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../../public/favicon.ico";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" height={180} />
          <p>Haraay Design Studio</p>
        </div>
        <p className={styles.creative}>Our Creative Collaboration</p>
        <p className={styles.desc}>
          Being a Creative Studio Haraay is thoroughly Professional and
          Brilliant in creating strong visual stories. They listen carefully and
          covert ideas into visual realities. The in-depth approach and
          expertise in brand building is one of the core strengths of Haraay.
          <br />
          <br />
          Haraay’s collaboration with Puru’s is one example of blend of
          professionalism and utmost creativity. Haraay is responsible for
          bringing Puru’s identity and defined the flow our story rather than
          just building a brand. This collaboration helped us to build our
          unique brand identity, website, packaging concepts, video stories,
          conceptual hampers and much more! Haraay is and will always remain
          undetachable entity from Puru’s Enterprises. Kudos to our partnership
          and collective vision!
        </p>
        <p className={styles.link}>Visite Our Site: <Link href="https://haraaydesignstudio.com/" target="_black">@HaraayDesignStudio</Link></p>
      </div>
    </div>
  );
}

export default page;
