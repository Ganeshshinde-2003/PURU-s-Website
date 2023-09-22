"use client";

import React, { useEffect, useRef, } from "react";
import styles from "./page.module.css";
import Stories from "../../../public/2 1 (1).png";
import wwr from "../../../public/PURU WEBSITE ILLUSTRATIONS-04 1.png";
import wwd from "../../../public/PURU WEBSITE ILLUSTRATIONS-03.png";
import v1 from "../../../public/vectors/Vector (1).png";
import v2 from "../../../public/vectors/Vector (2).png";
import StoriesIamge from "../../../public/stories-image.png";
import Image from "next/image";
import ImageSlider from "@/compenents/ImageSlider/ImageSlidre";
import logo from "../../../public/logo.png";

function page() {
  const vectorSectionRef = useRef(null);

  useEffect(() => {
    const rorateOnScroll = () => {
      if (vectorSectionRef.current) {
        const scrollPosition = window.scrollY;
        const vectorSectionTop = vectorSectionRef.current.offsetTop;
        const rotationAngle = (scrollPosition - vectorSectionTop) / 7; // Adjust the division factor for rotation speed

        // Get all image elements within the headings div 
        const images = Array.from(
          vectorSectionRef.current.querySelectorAll(
            "." + styles.headings + " img"
          )
        );

        images.forEach((image) => {
          image.style.transform = `rotate(${rotationAngle}deg)`;
        });
      }
    };

    window.addEventListener("scroll", rorateOnScroll);

    return () => {
      window.removeEventListener("scroll", rorateOnScroll);
    };
  }, []);

  useEffect(() => {
    const logospan = document.querySelectorAll(`.${styles.logo}`);
    const intro = document.querySelector(`.${styles.intro}`);

    setTimeout(() => {
      logospan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add(styles.active);
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logospan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove(styles.active);
            span.classList.add(styles.fade);
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2300);
    }, 0); // Delay the execution to ensure all elements are loaded

    return () => {
      // Clean up any timers or other resources if needed
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <span className={styles.logo}>
          <Image src={logo} alt="logo" />
        </span>
      </div>
      <Image src={Stories} alt="Strories" className={styles.img} />
      {/* <div className={styles.part1}>
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
      </div> */}
      {/* <section className={styles.approach}>
        <div className={styles.imgpart}>
          <span>WHO WE ARE</span>
          <Image src={wwr} alt="approach" />
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
      </section> */}
      <section className={styles.approach}>
        <div className={styles.imgpart}>
          <span>What “We” Do</span>
          <Image src={wwd} alt="approach" height={600} />
        </div>
        <div className={`${styles.textpart} ${styles.textpartwedo}`}>
          <p>
            Puru’s Enterprises formation is an outcome of a Purpose. A Purpose,
            how do ‘We’ simplify ‘You’, your lifestyle by contributing to both
            segments of Personal & Professional developments.
          </p>
        </div>
      </section>
      <section className={styles.mainwork} id="imageSliderSection">
        <p className={styles.mainworkhead}>• Consulting -</p>
        <div className={styles.sliderContainer}>
          <ImageSlider id="1" />
        </div>
        <div className={styles.mainworkdisc}>
          <p>
            We offer Consulting Services – to individuals and organizations to
            remain consistent in their area of expertise and business
            operations. Our Consulting service span across four key aspect of
            business – Strategy, Management, Marketing & Finance. We play a key
            role in, how do ‘You’ evolve and succeed on business path and
            personal growth.
          </p>
        </div>
      </section>
      <section className={styles.mainwork}>
        <p className={styles.mainworkhead}>• Sustainable Solutions -</p>
        <div className={styles.sliderContainer}>
          <ImageSlider id="2" />
        </div>
        <div className={styles.mainworkdisc}>
          <p>
            Our Sustainable Solutions ensure that ‘You’ get more efficient and
            qualitative product range. May it be a necessity or luxury products,
            we will ensure to fill your lives with impactful products. Keeping
            in themind, the Sustainable aspect remains at core of our products,
            processes to make these products emphasize on minimal or no use of
            natural resources. The key element of our products are they are
            handmade by traditional and skilled craftsmen from different part of
            the Nation. Three broad segments our products will be available for
            ‘You’ are – Stationery, Home Décor and Utility and Luxury
            Accessories. Our aim is to build a ‘conscious’ perspective and
            effective lifestyle.
          </p>
        </div>
      </section>
      <section className={`${styles.approach} ${styles.newpart}`}>
        <span>Formation</span>

        <div className={`${styles.textpart} ${styles.textpartwedo}`}>
          <p>
            Year 2023 and Mumbai, India is where Puru’s step into the business world.
            The philosophy Puru’s believes in “Embrace the Collective Growth”. Puru’s
            is committed to deliver qualitative results and an actionable plan which
            leads to quantitative success.
          </p>
        </div>
      </section>
      <section className={styles.ourvalues} ref={vectorSectionRef}>
        <span>OUR VALUES</span>
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
      <section className={`${styles.approach} ${styles.newpart}`}>
        <span>Positioning</span>

        <div className={`${styles.textpart} ${styles.textpartwedo}`}>
          <p>
            Our brand positioning is centered on promoting everyday empowerment via
            sustainability. We distinguish ourselves by allowing individuals to make long-term
            decisions that have a positive influence on their lives and the world around them.
            We try to overcome the sustainability-accessibility gap by making it simple, engaging,
            and powerful for everyone to adopt a more human sustainable lifestyle.
          </p>
        </div>
      </section>
      <section className={styles.lastpart}>
        <Image src={StoriesIamge} alt="Image" className={styles.lastImage} />
        <span className={styles.vission}>VISSION</span>
        <span className={styles.mission}>MISSION</span>
        <p className={styles.firstdisc}>
          To Strive for Excellence and to bring change by inspiring individuals,
          influencing systematicchange, and fostering collaborations.
        </p>
        <p className={styles.secdisc}>
          Our mission is to foster sustainable growth, advocate for positive
          change, build impactful networks and prioritize human sustainability.
        </p>
      </section>
    </div>
  );
}

export default page;
