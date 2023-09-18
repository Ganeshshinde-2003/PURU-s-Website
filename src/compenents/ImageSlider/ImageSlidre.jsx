import slide11 from "../../../public/sliderimages/puru 1.jpg";
import slide12 from "../../../public/sliderimages/puru 2.jpg";
import slide13 from "../../../public/sliderimages/puru 3.jpg";
import slide14 from "../../../public/sliderimages/puru.jpg";

import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const imagespartone = [slide11, slide12, slide13, slide14];
const imagestwo = [slide21, slide22];

const ImageSlider = ({ id }) => {
  const [slide, setSlide] = useState(0);

  if (id == "1") {
    var imagesone = imagespartone;
  } else {
    var imagesone = imagestwo;
  }

  const nextSlide = () => {
    setSlide(slide === imagesone.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imagesone.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircle
        className={`${styles.arrow} ${styles.arrowleft}`}
        onClick={prevSlide}
      />
      {imagesone.map((image, index) => {
        return (
          <Image
            src={image}
            alt="Image"
            key={index}
            className={
              slide === index
                ? styles.slide
                : `${styles.slide} ${styles.slidehidden}`
            }
          />
        );
      })}
      <BsArrowRightCircle
        className={`${styles.arrow} ${styles.arrowright}`}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {imagesone.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx
                  ? styles.indicator
                  : `${styles.indicator} ${styles.indicatorinactive}`
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ImageSlider;
