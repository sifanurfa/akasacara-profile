"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchTrailerBtn from "@/components/interactive/collection/WatchTrailerBtn";
import PlayNowBtn from "@/components/interactive/collection/PlayNowBtn";
import "./InteractiveCollection.css";
import { CustomArrowProps } from "react-slick";
import { InteractiveGameApi } from "@/lib/api";
import { InteractiveGame } from "@/types/api/types";

export default function PopularGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popularGame, setPopularGame] = useState<InteractiveGame | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InteractiveGameApi.getPopularGame();
        setPopularGame(data);
      } catch (err) {
        console.error("Failed to fetch popular game:", err);
      }
    };
    fetchData();
  }, []);

  if (!popularGame) return null;

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

  const thumbSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col relative pb-section items-center gap-[-40px] self-stretch">
      <div className="flex relative w-full aspect-video overflow-hidden flex-col items-center gap-2.5 self-stretch">
        <Image
          src={popularGame.media[currentIndex].url}
          alt={popularGame.title}
          fill
          className="object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-y-0 h-screen left-0 w-2/3 px-[89px] z-10 flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col justify-center items-start gap-md self-stretch">
            <div className="flex flex-col items-start self-stretch">
              <div className="flex items-center gap-s">
                {["Adventure", "Action", "Casual", "3D"].map((cat, i) => (
                  <div
                    key={i}
                    className="flex p-xs justify-center items-center gap-2.5"
                  >
                    <div className="kategori">{cat}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch">
              <div className="headline-1 vfx-text-title self-stretch">
                {popularGame.title}
              </div>
            </div>

            <div className="sub-heading-reg vfx-text-subtitle-1 self-stretch">
              {popularGame.description}
            </div>
          </div>

          <div className="flex h-[68px] items-center gap-m">
            <PlayNowBtn />
            <WatchTrailerBtn trailerUrl={popularGame.trailer || ""} />
          </div>
        </div>
      </div>

      <div className="thumbnail-slider-container">
        <Slider {...thumbSettings}>
          {popularGame.media.map((m, i) => (
            <div key={i} className="px-2 gap-m">
              <button
                onClick={() => setCurrentIndex(i)}
                className={`relative w-full aspect-39/22 overflow-hidden transition-all duration-300`}
              >
                <Image
                  src={m.url}
                  alt={popularGame.title}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
