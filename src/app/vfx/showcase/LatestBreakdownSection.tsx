"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VFXApi } from "@/lib/api";
import { VFX } from "@/types/api/types";

export default function LatestBreakdown() {
  const [highlight, setHighlight] = useState<VFX[]>([]);

  useEffect(() => {
      const fetchData = async () => {
      try {
          const data = await VFXApi.getHighlightImg();
          setHighlight(data);
      } catch (err) {
          console.error("Failed to fetch Highlight:", err);
      }
      };
      fetchData();
  }, []);

  const NextArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="46" viewBox="0 0 25 46" fill="none">
          <path d="M2 2L22 23L2 44" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }: CustomArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="46" viewBox="0 0 25 46" fill="none">
          <path d="M22.7617 2L2.76172 23L22.7617 44" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "24%",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    focusOnSelect: true,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "8%",
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden relative">
      <Slider {...settings}>
        {highlight.map((item, idx) => (
          <div key={idx} className="px-xl">
            <div className="relative w-full overflow-hidden aspect-3/2">
              <Image
                src={item.image}
                alt={`image-${idx}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
