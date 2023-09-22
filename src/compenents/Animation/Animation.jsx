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
              Human sustainability is focused on people and aims to maintain and improve the human capital in society. Every individual is directly or indirectly involved and impacted by, in some or the other way by the production of goods and provision of services. Our aim is to create the self-sufficient community of skilled craftsmen which can help them uplift their lifestyles, they are the key contributors to our sustainable product line. 
              </p>

            <div className="mobilePhoto green"></div>
            <h1>Social Sustainability</h1>
              <p>
              Social sustainability aims to preserve social capital by investing and creating services that constitute the framework of our society. Social Sustainability focuses on improving the quality of social environment, we are Puru’s aims to contribute with an actionable plan, fair policies and qualitative product and services which lead us towards building better community.
              </p>

            <div className="mobilePhoto pink"></div>
            <h1>Economic Sustainability</h1>
              <p>
              Enterprises forms the fundamental of economic development, at the same time they do play a crucial part in achieving qualitative economic growth. Economic growth needs to be achieved without negatively impacting the social and environmental aspect of the progressive society. Our goal is to have inclusive policy of enterprises and society to act more responsibly, balance out the quantitative and qualitative elements of growth and ensure that we build a robust economic lifecycle.                </p>

            <div className="mobilePhoto blue"></div>
            <h1>Environmental Sustainability</h1>
              <p>
              Most commonly identified aspect of sustainability is protection of environment. Environmental sustainability aims to improve social lifestyle by preserving the natural resources ensure that the future generations have ample resources to survive. At Puru’s we believe in optimal utilization of natural resources, opt out alternative processes to produce goods and services and ensure that society make conscious choices to become sustainable ambassadors. “Think Sustainable, Act Responsible” is the mantra of New-Age!
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
              Human sustainability is focused on people and aims to maintain and improve the human capital in society. Every individual is directly or indirectly involved and impacted by, in some or the other way by the production of goods and provision of services. Our aim is to create the self-sufficient community of skilled craftsmen which can help them uplift their lifestyles, they are the key contributors to our sustainable product line. 
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Social Sustainability</h1>
              <p>
              Social sustainability aims to preserve social capital by investing and creating services that constitute the framework of our society. Social Sustainability focuses on improving the quality of social environment, we are Puru’s aims to contribute with an actionable plan, fair policies and qualitative product and services which lead us towards building better community.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Economic Sustainability</h1>
              <p>
              Enterprises forms the fundamental of economic development, at the same time they do play a crucial part in achieving qualitative economic growth. Economic growth needs to be achieved without negatively impacting the social and environmental aspect of the progressive society. Our goal is to have inclusive policy of enterprises and society to act more responsibly, balance out the quantitative and qualitative elements of growth and ensure that we build a robust economic lifecycle.                </p>
            </div>
            <div className="desktopContentSection box2">
              <h1>Environmental Sustainability</h1>
              <p>
              Most commonly identified aspect of sustainability is protection of environment. Environmental sustainability aims to improve social lifestyle by preserving the natural resources ensure that the future generations have ample resources to survive. At Puru’s we believe in optimal utilization of natural resources, opt out alternative processes to produce goods and services and ensure that society make conscious choices to become sustainable ambassadors. “Think Sustainable, Act Responsible” is the mantra of New-Age!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
