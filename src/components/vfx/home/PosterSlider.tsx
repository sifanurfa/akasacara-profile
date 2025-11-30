"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Poster.css";

const slides = [
  { src: "/assets/darah_nyai.png", title: "Darah Nyai" },
  { src: "/assets/gowok.png", title: "Gowok" },
  { src: "/assets/serigala_langit.png", title: "Serigala Langit" },
  { src: "/assets/gowok2.png", title: "Setan Alas" },
  { src: "/assets/darah_nyai.png", title: "Darah Nyai" },
  { src: "/assets/gowok.png", title: "Gowok" },
  { src: "/assets/serigala_langit.png", title: "Serigala Langit" },
  { src: "/assets/gowok2.png", title: "Setan Alas" },
];

export default function PosterSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((item, idx) => (
          <div key={idx} className="pe-xl flex justify-center items-center self-stretch">
            <div className="relative w-poster image overflow-hidden aspect-2/3 rounded-[10px]">
              <Image
                src={item.src}
                alt={`image-${idx}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="self-stretch title mt-md vfx-text-title sub-heading-light">{item.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
