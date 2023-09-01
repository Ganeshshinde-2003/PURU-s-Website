import React from "react";
import styles from "./page.module.css";

import Stories from "../../../public/2 1 (1).png";
import wwr from "../../../public/katthy-k-mal-FBX_qonbn5M-unsplash 1.png";
import v1 from "../../../public/vectors/Vector (1).png";
import v2 from "../../../public/vectors/Vector (2).png";
import Image from "next/image";

function page() {
  return (
    <div className={styles.main}>
      <Image src={Stories} alt="Strories" />
      <div className={styles.part1}>
        <div className={styles.textpart}>
          <p>
            At Puru’s Enterprises, We do channelize our energy to focus on
            identifying your needs, challenges, pains and help you overcome
            those and ensure that you ‘Get What You Want’ (GWYW). Human needs
            are very dynamic on Personal and Professional fronts, We understand
            this to the core and aiming to be your ‘Solution’ partner to meet
            your needs and expectations. Let’s cultivate your needs into
            qualitative lifestyle choices.
          </p>
        </div>
      </div>
      <section className={styles.approach}>
        <div className={styles.imgpart}>
          <span>WHO WE ARE</span>
          <Image src={wwr} alt="approach" height={600} />
        </div>
        <div className={styles.textpart}>
          <p className={styles.head}>Actions that shape the future.</p>
          <p>
            Discover a fresh perspective for ‘You’ to adapt to challenging
            situations and take conscious decisions for better lifestyle. Being
            a purpose driven enterprise, we take proactive approach to add value
            to businesses and communities. Our aim is to provide most effective
            and efficient solutions, both on services and product fronts, thus
            to uplift the socio- economic system.
          </p>
        </div>
      </section>
      <section className={styles.ourvalues}>
        <span>Our values</span>
        <div className={styles.values}>
          <div className={styles.headings}>
            <Image src={v1} alt="vector one" />
            <p className={styles.excellence}>Excellence: </p>
          </div>
          <div className={styles.text}>
            <p>
              Requires constant adaptation, innovation and vigilance in order to
              achieve success. At Puru’s Excellence is our habit.
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.headings}>
            <Image src={v2} alt="vector one" />
            <p className={styles.excellence}>Integrity: </p>
          </div>
          <div className={styles.text}>
            <p>
              An indispensable moral virtue that includes acting with honesty,
              fairness, and decency. Puru’s foundation is based on this core
              value.
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.headings}>
            <Image src={v1} alt="vector one" />
            <p className={styles.excellence}>Accountability: </p>
          </div>
          <div className={styles.text}>
            <p>
              At Puru’s we are responsible for our actions and honor our
              commitments to the best of our abilities.
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.headings}>
            <Image src={v2} alt="vector one" />
            <p className={styles.excellence}>Passion: </p>
          </div>
          <div className={styles.text}>
            <p>
              We love what we do and ensure to make ‘Your’ life better in more
              ways than one!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
