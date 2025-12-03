"use client";

import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnnouncementInteractiveApi } from "@/lib/api";
import { AnnouncementInteractive } from "@/types/api/types";
import "./DevlogSlider.css"
import Image from "next/image";

export default function InteractiveDevlog() {
  const [devlogs, setDevlogs] = useState<AnnouncementInteractive[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnouncementInteractiveApi.getDevlog({ limit: 3, sort: "desc" });
        setDevlogs(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  // Custom Arrow
  function PrevArrow({ onClick }: { onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        aria-label="Previous"
        className="devlog-arrow devlog-prev"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 45,
          height: 45,
          borderRadius: "4px",
          border: "2px solid rgba(255,255,255,0.9)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
          <path d="M13.5 1.5L2.5 9.75L13.5 18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </button>
    );
  }

  function NextArrow({ onClick }: { onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        aria-label="Next"
        className="devlog-arrow devlog-next"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 45,
          height: 45,
          borderRadius: "4px",
          border: "2px solid rgba(255,255,255,0.9)",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
          <path d="M1.5 1.5L11.5 9L1.5 16.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </button>
    );
  }

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div className="devlog-slider-wrapper w-full mx-auto pb-section px-container">
      <Slider {...sliderSettings}>
        {devlogs.map((item) => (
         <div key={item.id} onClick={() => window.open(item.urlMedia, "_blank", "noopener,noreferrer")} className="px-4 cursor-pointer">
            <div className="w-full max-w-[384px] mx-auto">
              <div className="bg-[#5E5E5E] overflow-hidden shadow-2xl flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl">                
                <div className="relative w-full aspect-video shrink-0 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-m flex flex-col justify-between flex-1 gap-s">
                  <div>
                    <h3 className="vfx-text-title judul line-clamp-3">
                      {item.title}
                    </h3>
                  </div>

                  <p className="body-reg vfx-text-subtitle-1">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

