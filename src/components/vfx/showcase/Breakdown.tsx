"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Showcase.module.css";
import { Comparison, ComparisonHandle, ComparisonItem } from '@/components/ui/shadcn-io/comparison';

const slides = [
  { beforeImg: "/assets/SetanAlas1Before.png", afterImg: "/assets/SetanAlas1After.png", title: "Setan Alas" },
  { beforeImg: "/assets/SerigalaLangitBefore.png", afterImg: "/assets/SerigalaLangitAfter.png", title: "Serigala Langit" },
  { beforeImg: "/assets/SetanAlas2Before.png", afterImg: "/assets/SetanAlas2After.png", title: "Setan Alas" },
  { beforeImg: "/assets/SetanAlas3Before.png", afterImg: "/assets/SetanAlas3After.png", title: "Setan Alas" },
  { beforeImg: "/assets/SultanAgungBefore.png", afterImg: "/assets/SultanAgungAfter.png", title: "Sultan Agung" },
  { beforeImg: "/assets/TengkorakBefore.png", afterImg: "/assets/TengkorakAfter.png", title: "Tengkorak" },
];

export default function Breakdown() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbSliderRef = useRef<Slider | null>(null);

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    focusOnSelect: true,
  };

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex pb-section pt-l px-container items-stretch gap-xl self-stretch">
      {/* MAIN */}
      <div className="flex-5 h-full w-full overflow-hidden">
        {slides.map(
          (slide, idx) =>
            idx === activeIndex && (
              <div key={idx} className="flex flex-col items-start self-stretch fadeIn">
                <Comparison
                  className="aspect-441/248 w-full"
                  onDragEnd={() => console.log('drag end')}
                  onDragStart={() => console.log('drag start')}
                  mode="hover"
                >
                  <ComparisonItem position="left">
                    <Image
                      src={slide.afterImg}
                      alt={`${slide.title} left`}
                      width={780}
                      height={520}
                      className="w-full h-full object-cover"
                    />
                  </ComparisonItem>
                  <ComparisonItem position="right">
                    <Image
                      src={slide.beforeImg}
                      alt={`${slide.title} right`}
                      width={780}
                      height={520}
                      className="w-full h-full object-cover"
                    />
                  </ComparisonItem>
                  <ComparisonHandle className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="744"
                      viewBox="0 0 36 744"
                      fill="none"
                      className="h-full w-auto"
                    >
                      <path
                        d="M21.4988 0L21.4988 694.35C23.5889 694.797 25.5111 695.559 27.2653 696.638C29.0196 697.716 30.5312 699.018 31.8002 700.543C33.0693 702.068 34.0583 703.815 34.7675 705.787C35.4767 707.758 35.8313 709.785 35.8313 711.867C35.8313 713.987 35.4767 716.014 34.7675 717.948C34.0583 719.882 33.0693 721.611 31.8002 723.136C30.5312 724.661 29.0196 725.981 27.2653 727.097C25.5111 728.213 23.5889 728.975 21.4988 729.384L21.4988 744H14.3325L14.3325 729.384C12.2423 728.938 10.3201 728.175 8.56591 727.097C6.81167 726.018 5.30004 724.717 4.03102 723.192C2.76199 721.667 1.7729 719.919 1.06374 717.948C0.35458 715.977 0 713.95 0 711.867C0 709.747 0.35458 707.72 1.06374 705.787C1.7729 703.853 2.76199 702.123 4.03102 700.598C5.30004 699.074 6.81167 697.753 8.56591 696.638C10.3201 695.522 12.2423 694.76 14.3325 694.35L14.3325 0H21.4988ZM28.665 711.867C28.665 710.38 28.3851 708.985 27.8252 707.683C27.2653 706.382 26.5002 705.247 25.5298 704.28C24.5593 703.313 23.4209 702.551 22.1146 701.993C20.8083 701.435 19.4086 701.156 17.9156 701.156C16.4227 701.156 15.023 701.435 13.7167 701.993C12.4103 702.551 11.2719 703.313 10.3015 704.28C9.33105 705.247 8.56591 706.382 8.00605 707.683C7.44618 708.985 7.16625 710.38 7.16625 711.867C7.16625 713.355 7.44618 714.75 8.00605 716.051C8.56591 717.353 9.33105 718.487 10.3015 719.454C11.2719 720.421 12.4103 721.184 13.7167 721.741C15.023 722.299 16.4227 722.578 17.9156 722.578C19.4086 722.578 20.8083 722.299 22.1146 721.741C23.4209 721.184 24.5593 720.421 25.5298 719.454C26.5002 718.487 27.2653 717.353 27.8252 716.051C28.3851 714.75 28.665 713.355 28.665 711.867Z"
                        fill="white"
                      />
                    </svg>
                  </ComparisonHandle>
                </Comparison>

                <div className="flex justify-between items-start mt-m self-stretch">
                  <div className="flex flex-col items-start gap-3">
                    <div className="self-stretch vfx-text-title headline-3">{slide.title}</div>
                    <div className="self-stretch vfx-text-subtitle-1 body-reg">{slide.title}</div>
                  </div>
                  <p className="vfx-text-title button-secondary pe-1">WATCH HERE</p>
                </div>
              </div>
            )
        )}
      </div>

      {/* THUMBNAIL SLIDER */}
      <div className="flex-1 h-full items-center gap-4 relative">
        <Slider ref={thumbSliderRef} {...thumbSettings}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`relative py-2.5 cursor-pointer transition-all duration-300`}
              onClick={() => handleThumbClick(idx)}
            >
              <div className="flex flex-col justify-center items-end self-stretch relative">
                <Image
                  src={slide.beforeImg}
                  alt={slide.title}
                  width={240}
                  height={135}
                  className={`object-cover transition-all`}
                  style={{ aspectRatio: "16/9" }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0"></div>
                <div className="absolute flex  px-m flex-col items-center gap-s">
                  <div className={`flex self-stretch vfx-text-title ${styles.breakdown_series_title}`}>{slide.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
