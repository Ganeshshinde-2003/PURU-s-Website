import slide1 from "../../../public/matthew-henry-VviFtDJakYk-unsplash 1.png";
import slide2 from "../../../public/0F4A8688 1.png";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const imagespartone = [slide1, slide2];
const imagestwo = [slide2, slide1];

const ImageSlider = ({ id }) => {
  const [slide, setSlide] = useState(0);

  if(id == "1"){
    var imagesone = imagespartone
  } else {
    var imagesone = imagestwo
  }

  const nextSlide = () => {
    setSlide( slide === imagesone.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide( slide === 0 ? imagesone.length - 1 : slide - 1);
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
