import React from "react";
import styles from "./page.module.css";
import Form from "@/compenents/Forms/Form";
import { FaArrowDown } from "react-icons/fa";

function page() {
  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };
  return (
    <div className={styles.main}>
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
