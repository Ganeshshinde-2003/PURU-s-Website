"use client";

import styles from "./page.module.css";
import Arroedownn from "../../public/arrowdown.png";
import vec1 from "../../public/vectors/1.png";
import vec2 from "../../public/vectors/2.png";
import vec3 from "../../public/vectors/3.png";
import vec4 from "../../public/vectors/7.png";
import vec5 from "../../public/vectors/4.png";
import Approach from "../../public/ricardo-gomez-angel-WsEAiVwGrwo-unsplash 1.png";
import vec6 from "../../public/vectors/5.png";
import vec7 from "../../public/vectors/6.png";
import vec8 from "../../public/vectors/8.png";
import vec9 from "../../public/vectors/9.png";
import wwd1 from "../../public/0F4A9036 1.png";
import wwd2 from "../../public/matthew-henry-VviFtDJakYk-unsplash 1.png";
import jobs from "../../public/lycs-architecture-U2BI3GMnSSE-unsplash 1.png";
import Image from "next/image";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const vectorDiv =  document.querySelector(`.${styles.vectors}`);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPositionSec = vectorDiv.offsetTop - window.innerHeight / 2;

      if (scrollPosition > triggerPositionSec) {
        vectorDiv.classList.add(styles.changeColor);
      } else {
        vectorDiv.classList.remove(styles.changeColor);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>

      <section className={styles.part1}>
        <div className={styles.text}>
          <p>
            Designed for the
            <br /> Future
          </p>
          <div className={styles.dis}>
            <p>Discover</p>
          </div>
        </div>
        <div className={styles.empty}></div>
        <div className={styles.circle}>
          <Image src={Arroedownn} alt="LOGO" height={200} />
        </div>
      </section>
      <section className={styles.vectors}>
          <Image
            src={vec1}
            className={styles.imgvec1}
            alt="vector"
            height={300}
          />
          <Image
            src={vec2}
            className={styles.imgvec2}
            alt="vector"
            height={500}
          />
          <Image
            src={vec6}
            className={styles.imgvec3}
            alt="vector"
            height={250}
          />
          <Image
            src={vec7}
            className={styles.imgvec4}
            alt="vector"
            height={200}
          />
        <p className={styles.vectorp}>
          Inspiring <br />
          for <br />
          Innovation
        </p>
          <Image
            src={vec3}
            className={styles.imgvec5}
            alt="vector"
            height={400}
          />
          <Image
            src={vec4}
            className={styles.imgvec6}
            alt="vector"
            height={400}
          />
          <Image
            src={vec5}
            className={styles.imgvec7}
            alt="vector"
            height={400}
          />
          <Image
            src={vec8}
            className={styles.imgvec8}
            alt="vector"
            height={400}
          />
          <Image
            src={vec9}
            className={styles.imgvec9}
            alt="vector"
            height={350}
          />
      </section>
      <section className={styles.about}>
        <span className={styles.aboutus}>
          <p>About Us</p>
        </span>
        <Image
          src={Arroedownn}
          alt="LOGO"
          height={300}
          className={styles.aboutlink}
        />
      </section>
      <section className={styles.approach}>
        <div className={styles.imgpart}>
          <span>Our Approach</span>
          <Image src={Approach} alt="approach" height={600} />
        </div>
        <div className={styles.textpart}>
          <p className={styles.head}>SUSTAINABILITY</p>
          <p>
            The term sustainability is broadly used to indicate programs,
            initiatives and actions aimed at the preservation of a particular
            resource. However, it actually refers to four distinct areas: human,
            social. economic and environmental - known as the four pillars of
            sustainability
          </p>
          <div className={styles.links}>
            <div className={styles.dis}>
              <p>Discover</p>
            </div>
            <Image
              src={Arroedownn}
              alt="LOGO"
              height={60}
              className={styles.approachlink}
            />
          </div>
        </div>
      </section>
      <section className={styles.whatwedo}>
        <div className={styles.imgsection}>
          <span>What we do</span>
          <Image src={wwd1} alt="wwd" height={400} />
          <div className={styles.links}>
            <p>Sustainable probuct range</p>
            <Image
              src={Arroedownn}
              alt="LOGO"
              height={80}
              className={styles.approachlink}
            />
          </div>
        </div>
        <div className={styles.imgsection}>
          <Image src={wwd2} alt="wwd" height={400} />
          <div className={styles.links}>
            <p>Consulting</p>
            <Image
              src={Arroedownn}
              alt="LOGO"
              height={80}
              className={styles.approachlink}
            />
          </div>
        </div>
      </section>
      <section className={styles.jobs}>
        <p className={styles.jobhead}>Jobs</p>
        <p className={styles.heaings}>Make A difference With Puru's</p>
        <div className={styles.joinus}>
          <div className={styles.textpart}>
            <p>
              We continually invest in knowledge development and process Working
              at Tilton means being part of a project for the future, in a safe,
              inclusive and human environment
            </p>
            <div className={styles.joinuslink}>
              <p>Join Us</p>
            </div>
          </div>
          <div>
            <Image src={jobs} alt="jobs" height={400} />
          </div>
        </div>
      </section>
    </main>
  );
}
