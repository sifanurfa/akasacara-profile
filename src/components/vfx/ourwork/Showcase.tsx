"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Showcase() {
  const sliderTopRef = useRef<Slider>(null);
  const sliderBottomRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 12000,
    cssEase: "linear",
    pauseOnHover: false,    // kita matikan bawaan
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640,  settings: { slidesToShow: 2 } },
    ],
  };

  const items = [
    "https://placehold.co/200x100",
    "https://placehold.co/112x318",
    "https://placehold.co/150x200",
    "https://placehold.co/300x250",
    "https://placehold.co/170x361",
    "https://placehold.co/212x318",
    "https://placehold.co/150x200",
    "https://placehold.co/300x250",
    "https://placehold.co/170x361",
  ];

  return (
    <div className="w-full py-20 overflow-hidden">
      {/* BARIS ATAS */}
      <div
        className="mb-8"
        onMouseEnter={() => sliderTopRef.current?.slickPause()}
        onMouseLeave={() => sliderTopRef.current?.slickPlay()}
      >
        <Slider ref={sliderTopRef} {...settings} rtl={false}>
          {[...items, ...items].map((src, i) => (
            <div key={i} className="px-8">
              <div className="flex items-center justify-center">
                <img src={src} alt="logo" className="max-h-20 max-w-full object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* BARIS BAWAH */}
      <div
        onMouseEnter={() => sliderBottomRef.current?.slickPause()}
        onMouseLeave={() => sliderBottomRef.current?.slickPlay()}
      >
        <Slider ref={sliderBottomRef} {...settings} rtl={true} speed={14000}>
          {[...items, ...items].reverse().map((src, i) => (
            <div key={i} className="px-8">
              <div className="flex items-center justify-center">
                <img src={src} alt="logo" className="max-h-20 max-w-full object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}