import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import galss1 from "../../../public/Glass_Prism0092 1.png";
import galss2 from "../../../public/Glass_Prism0092 2.png";
import one from "../../../public/consulting/one.png";
import two from "../../../public/consulting/two.png";
import three from "../../../public/consulting/three.png";
import four from "../../../public/consulting/four.png";
import ilu1 from "../../../public/consulting/iluone.png";
import ilu2 from "../../../public/consulting/ilutwo.png";

const page = () => {
  return (
    <div className={styles.consultingmain}>
      <section className={styles.headcontainer}>
        <div className={styles.headtext}>
          <p className={styles.headings}>
            What Puru’s Consulting can do for You:
          </p>
          <p className={styles.disc}>
            Every Business entity thrive for big, take transformative steps,
            re-align their purpose and re-structure their operations, keeping
            the mind the volatile market conditions and dynamic consumer
            behaviors.
          </p>
        </div>
        <Image src={galss1} alt="glass" className={styles.glass1} />
        <Image src={galss2} alt="glass" className={styles.glass2} />
      </section>
      <section className={`${styles.contentsection} ${styles.con2}`}>
        <div className={styles.textpart}>
          Our methodology takes the customized path tailored to each business
          entities challenges and situations. Accompanied with analytical
          reasoning to address each problem area – common or critical and ensure
          that we deliver robust and long-term solutions.
          <br />
          This technique will help You to accomplish desirable goals and
          consistent business growth.
        </div>
        <div className={styles.imgpart2}>
          <Image src={ilu2} alt="ilu" />
        </div>
      </section>
      <section className={styles.contentsection}>
        <p className={styles.headertext}>How Do We Help Businesses:</p>
      </section>
      <section className={`${styles.contentsection} ${styles.con2}`}>
        <div className={styles.imgpart2}>
          <Image src={ilu1} alt="ilu" />
        </div>
        <div className={styles.textpart}>
          Our methodology takes the customized path tailored to each business
          entities challenges and situations. Accompanied with analytical
          reasoning to address each problem area – common or critical and ensure
          that we deliver robust and long-term solutions.
          <br /> This technique will help You to accomplish desirable goals and
          consistent business growth.
        </div>
      </section>
      <section className={styles.contentsection}>
        <p className={styles.headertext}>
          The four core areas we provide consulting service are:
        </p>
      </section>
      <section className={styles.wwd}>
        <section
          className={`${styles.contentsection} ${styles.contentsection2}`}
        >
          <div className={styles.textpart2}>
            <p className={styles.head}>Strategy</p>
            <p className={styles.explain}>
              Actionable plan to align the organizations to their Vision.
            </p>
          </div>
          <div className={styles.imgpart}>
            <Image src={one} alt="one" />
          </div>
        </section>
        <section
          className={`${styles.contentsection} ${styles.contentsection2}`}
        >
          <div className={styles.imgpart}>
            <Image src={two} alt="one" />
          </div>
          <div className={styles.textpart2}>
            <p className={styles.head}>Finance</p>
            <p className={styles.explain}>
              Re-define the functional and distributional aspect of
              organizational funds.
            </p>
          </div>
        </section>
        <section
          className={`${styles.contentsection} ${styles.contentsection2}`}
        >
          <div className={styles.textpart2}>
            <p className={styles.head}>Marketing</p>
            <p className={styles.explain}>
              Position the brand/organization in right place and at the right
              time.
            </p>
          </div>
          <div className={styles.imgpart}>
            <Image src={three} alt="one" />
          </div>
        </section>
        <section
          className={`${styles.contentsection} ${styles.contentsection2}`}
        >
          <div className={styles.imgpart}>
            <Image src={four} alt="one" />
          </div>
          <div className={styles.textpart2}>
            <p className={styles.head}>Management</p>
            <p className={styles.explain}>
              Restructure the processes and people to meet the objectives and
              goals of the organization.
            </p>
          </div>
        </section>
        <section className={styles.contentsection}>
          <p className={styles.lasttext}>
            We believe in collective and collaborative mechanism to help our
            prospects to have the ‘winning-edge’ in cut-throat competitive and
            dynamic business environment.
          </p>
        </section>
      </section>
      <section className={`${styles.contentsection} ${styles.footer}`}>
        <p className={styles.footertext}>
          Let’s take the ‘Bold Step’ towards the
          <br /> Success and Prosperity.
        </p>
      </section>
    </div>
  );
};

export default page;
