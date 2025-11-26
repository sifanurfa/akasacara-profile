"use client";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Showreel = {
  id: number;
  title: string;
  date: string;
  image: string;
};

const showreels: Showreel[] = [
  {
    id: 1,
    title: "'Tengkorak': A brilliant Indonesian science-fiction",
    date: "July 21, 2025",
    image: "/assets/sh.film.png",
  },
  {
    id: 2,
    title: "'Bumi Manusia': The art of historical storytelling",
    date: "August 14, 2025",
    image: "/assets/sh.film.png",
  },
  {
    id: 3,
    title: "'Gundala': The rise of Indonesian superhero cinema",
    date: "September 2, 2025",
    image: "/assets/sh.film.png",
  },
];

const ShowreelSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="flex gap-3 items-center h-6">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="flex items-center justify-center h-6 w-6">
        <div 
          className={`transition-all duration-300 rounded-full flex items-center justify-center ${
            i === currentSlide 
              ? "w-6 h-6 bg-[#D4AF37]" 
              : "w-4 h-4 bg-white"
          }`}
        ></div>
      </div>
    ),
  };

  return (
    <div className="showreel-slider relative w-screen h-screen overflow-hidden">
      <Slider {...sliderSettings}>
        {showreels.map((item) => (
          <div key={item.id} className="relative w-screen min-h-screen">
            <img
              src={item.image}
              alt={item.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="px-container py-xl left-0 bottom-0 absolute bg-black/20 backdrop-blur-[1.05px] inline-flex flex-col justify-center items-center gap-[24px] w-full">
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                  <div className="justify-start text-white text-6xl font-bold font-['Playfair_Display'] leading-[72px]">
                    {item.title}
                  </div>
                  <div className="self-stretch justify-start text-white text-3xl font-normal font-['Poppins'] leading-9">
                    {item.date}
                  </div>
                </div>
                <div className="flex justify-start items-start gap-2">
                  <div className="justify-start text-white text-3xl font-semibold font-['Poppins'] leading-9">
                    READ MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowreelSlider;