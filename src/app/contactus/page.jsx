import React from "react";
import styles from "./page.module.css";
import Arroedownn from "../../../public/arrowdown.png";

import Image from "next/image";
import Form from "@/compenents/Forms/Form";

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.namings}>
          <p className={styles.contact}>Contact Us</p>
          <p className={styles.askings}>
            Questions? Feedback?<br/> Product ideas?
            <br />
            <br />
            <span>Write to us</span>
          </p>
          <Image
            src={Arroedownn}
            alt="LOGO"
            height={300}
            className={styles.arrow}
          />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default page;
