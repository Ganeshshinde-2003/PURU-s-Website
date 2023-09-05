// pages/Gallery.js
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";

const Gallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });
    });
  }, []);

  return (
    <div>
      <div className="gallery">

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Human Sustainability</h1>
              <p>
                Human sustainability aims to maintain and improve the human
                capital in society. It is a crucial aspect of achieving overall
                sustainability.
                <br /> <br />
                It encompasses various efforts and initiatives aimed at
                maintaining and enhancing the human capital within society. This
                involves ensuring access to quality education, healthcare, and
                basic necessities for all individuals, regardless of their
                socio-economic background. Human sustainability recognizes that
                a healthy and educated population forms the foundation for
                social progress and economic growth.
              </p>

            <div className="mobilePhoto green"></div>
            <h1>Social Sustainability</h1>
              <p>
                Social sustainability aims to preserve social capital by
                investing and creating services that constitute the framework of
                our society. It goes hand in hand with human sustainability as
                it focuses on preserving social capital through investments in
                services that form the backbone of our society. This includes
                promoting social equality, fostering inclusivity, and creating
                opportunities for active community participation. By investing
                in social infrastructure such as schools, hospitals, public
                transportation systems, and cultural institutions, we build
                resilient communities that can thrive harmoniously.
              </p>

            <div className="mobilePhoto pink"></div>
            <h1>Economic Sustainability</h1>
              <p>
                Economic sustainability aims to maintain the capital intact. If
                social sustainability focuses on improving social equality,
                economic sustainability aims to improve the standard of living.
                Economic sustainability plays a vital role in sustaining
                societies by maintaining financial stability while improving
                living standards. While economic growth is important for
                development, it should be pursued alongside considerations of
                long-term well-being rather than purely focusing on material
                gains. Economic sustainability strives to ensure equitable
                distribution of resources and wealth while minimizing negative
                impacts on natural resources or societal welfare.
              </p>

            <div className="mobilePhoto blue"></div>
            <h1>Environmental Sustainability</h1>
              <p>
                Environmental sustainability aims to improve human welfare
                through the protection of natural capital (e.g., land, air,
                water, minerals etc.). Initiatives and programs are defined as
                environmentally sustainable when they ensure that the needs of
                the population are met without the risk of compromising the
                needs of future generations. It seeks to safeguard natural
                capital for the betterment of humanity's welfare. It emphasizes
                responsible resource management practices to minimize ecological
                footprint while maximizing ecosystem health. Promoting renewable
                energy sources over fossil fuels, adopting sustainable
                agricultural practices that minimize pollution and soil
                degradation are examples of environmental initiatives
                underpinning sustainable solutions.
              </p>
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red"></div>
            <div className="desktopPhoto green"></div>
            <div className="desktopPhoto pink"></div>
            <div className="desktopPhoto blue"></div>
          </div>
          
        </div>
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection box1">
              <h1>Human Sustainability</h1>
              <p>
                Human sustainability aims to maintain and improve the human
                capital in society. It is a crucial aspect of achieving overall
                sustainability.
                <br /> <br />
                It encompasses various efforts and initiatives aimed at
                maintaining and enhancing the human capital within society. This
                involves ensuring access to quality education, healthcare, and
                basic necessities for all individuals, regardless of their
                socio-economic background. Human sustainability recognizes that
                a healthy and educated population forms the foundation for
                social progress and economic growth.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Social Sustainability</h1>
              <p>
                Social sustainability aims to preserve social capital by
                investing and creating services that constitute the framework of
                our society. It goes hand in hand with human sustainability as
                it focuses on preserving social capital through investments in
                services that form the backbone of our society. This includes
                promoting social equality, fostering inclusivity, and creating
                opportunities for active community participation. By investing
                in social infrastructure such as schools, hospitals, public
                transportation systems, and cultural institutions, we build
                resilient communities that can thrive harmoniously.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Economic Sustainability</h1>
              <p>
                Economic sustainability aims to maintain the capital intact. If
                social sustainability focuses on improving social equality,
                economic sustainability aims to improve the standard of living.
                Economic sustainability plays a vital role in sustaining
                societies by maintaining financial stability while improving
                living standards. While economic growth is important for
                development, it should be pursued alongside considerations of
                long-term well-being rather than purely focusing on material
                gains. Economic sustainability strives to ensure equitable
                distribution of resources and wealth while minimizing negative
                impacts on natural resources or societal welfare.
              </p>
            </div>
            <div className="desktopContentSection box2">
              <h1>Environmental Sustainability</h1>
              <p>
                Environmental sustainability aims to improve human welfare
                through the protection of natural capital (e.g., land, air,
                water, minerals etc.). Initiatives and programs are defined as
                environmentally sustainable when they ensure that the needs of
                the population are met without the risk of compromising the
                needs of future generations. It seeks to safeguard natural
                capital for the betterment of humanity's welfare. It emphasizes
                responsible resource management practices to minimize ecological
                footprint while maximizing ecosystem health. Promoting renewable
                energy sources over fossil fuels, adopting sustainable
                agricultural practices that minimize pollution and soil
                degradation are examples of environmental initiatives
                underpinning sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
