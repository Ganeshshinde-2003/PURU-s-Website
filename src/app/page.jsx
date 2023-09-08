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
import Design from "../../public/puru-design.png";
import Inspiring from "../../public/puru-inspiring.png";
import Buttonone from "../../public/button-main.png";
import Buttontwo from "../../public/button-two.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  const iconStyle = {
    strokeWidth: "1px", // Adjust the stroke width as needed
  };

  useEffect(() => {
    const vectorDiv = document.querySelector(`.${styles.vectors}`);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPositionSec = vectorDiv.offsetTop - window.innerHeight / 2;

      if (scrollPosition > triggerPositionSec) {
        vectorDiv.classList.add(styles.changeColor);
      } else {
        vectorDiv.classList.remove(styles.changeColor);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const vectorSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (vectorSectionRef.current) {
        const scrollPosition = window.scrollY;
        const vectorSectionTop = vectorSectionRef.current.offsetTop;
        const rotationAngle = (scrollPosition - vectorSectionTop) / 4; // Adjust the division factor for rotation speed

        // Get all image elements within the vector section
        const images = Array.from(
          vectorSectionRef.current.querySelectorAll("img")
        );

        // Remove the fifth element (index 4) from the images array
        if (images.length >= 5) {
          images.splice(4, 1); // Remove the fifth element
        }
        images.forEach((image) => {
          image.style.transform = `rotate(${rotationAngle}deg)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.part1}>
        <div className={styles.text}>
          <Image src={Design} alt="Design" className={styles.designimage} />
          <span className={styles.dis}>
            <p>Discover</p>
            <Image
              src={Buttonone}
              className={styles.buttonone}
              alt="Button"
              width={200}
            />
          </span>
        </div>
        <div className={styles.empty}>
          {/* <Image className={styles.head1} src={vechead1} alt="head-one" />
          <Image className={styles.head2} src={vechead2} alt="head-two" /> */}
        </div>
        <div className={styles.circle}>
          <FaArrowDown style={iconStyle} />
        </div>
      </section>
      <section className={styles.vectors} ref={vectorSectionRef}>
        <Image src={vec1} className={styles.imgvec1} alt="vector" />
        <Image
          src={vec2}
          className={styles.imgvec2}
          alt="vector"
          height={250}
        />
        <Image
          src={vec6}
          className={styles.imgvec3}
          alt="vector"
          height={120}
        />
        <Image
          src={vec7}
          className={styles.imgvec4}
          alt="vector"
          height={100}
        />
        <p className={`${styles.vectorp} no-rotation`}>
          <Image
            className={styles.vectorimages}
            src={Inspiring}
            alt="Inspring"
          />
        </p>
        <Image
          src={vec3}
          className={styles.imgvec5}
          alt="vector"
          height={200}
        />
        <Image
          src={vec4}
          className={styles.imgvec6}
          alt="vector"
          height={200}
        />
        <Image
          src={vec5}
          className={styles.imgvec7}
          alt="vector"
          height={200}
        />
        <Image
          src={vec8}
          className={styles.imgvec8}
          alt="vector"
          height={200}
        />
        <Image
          src={vec9}
          className={styles.imgvec9}
          alt="vector"
          height={170}
        />
      </section>
      <section className={styles.about}>
        <span className={styles.aboutus}>
          <p>About Us</p>
        </span>
        <div className={styles.circle2}>
          <FaArrowDown style={iconStyle} />
        </div>
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
            sustainability.
          </p>
          <div className={styles.links}>
            <span className={styles.dis}>
              <p>Discover</p>
              <Image
                src={Buttonone}
                className={styles.buttonone}
                alt="Button"
                width={200}
              />
            </span>
            <Link href="/purustories" className={styles.linktolink}>
              <BsArrowRight className={styles.approachlink} />
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.whatwedo}>
        <div className={styles.imgsection}>
          <span>What we do</span>
          <Image
            src={wwd1}
            alt="wwd"
            height={400}
            className={styles.imageswwd}
          />
          <div className={styles.links}>
            <p>Sustainable product range</p>
            <Link href="/purustories" className={styles.linktolink}>
              <BsArrowRight className={styles.approachlink} />
            </Link>
          </div>
        </div>
        <div className={styles.imgsection}>
          <Image
            src={wwd2}
            alt="wwd"
            height={400}
            className={styles.imageswwd}
          />
          <div className={styles.links}>
            <p>Consulting</p>
            <Link href="/purustories" className={styles.linktolink}>
              <BsArrowRight className={styles.approachlink} />
            </Link>
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
            <Link href="/contactus">
              <span className={styles.dis}>
                <p>Join us</p>
                <Image
                  src={Buttontwo}
                  className={styles.buttontwo}
                  alt="Button"
                  width={200}
                />
              </span>
            </Link>
          </div>
          <div>
            <Image src={jobs} alt="jobs" height={400} />
          </div>
        </div>
      </section>
    </main>
  );
}
