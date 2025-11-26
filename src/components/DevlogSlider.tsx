"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Devlog = {
  id: number;
  title: string;
  date: string;
  image: string;
};

const devlogs: Devlog[] = [
  { id: 1, title: "GOD HELP US! — Codename for the Next Demo", date: "25 October 2025", image: "/assets/ld01.png" },
  { id: 2, title: "DEVLOG 16 OCT 2025 — Addressing Bugs", date: "16 October 2025", image: "/assets/ld02.png" },
  { id: 3, title: "We are participating STEAM NEXT FEST 2025!", date: "13 October 2025", image: "/assets/ld03.png" },
  { id: 4, title: "GOD HELP US! — Codename for the Next Demo", date: "25 October 2025", image: "/assets/ld01.png" },
  { id: 5, title: "DEVLOG 16 OCT 2025 — Addressing Bugs", date: "16 October 2025", image: "/assets/ld02.png" },
  { id: 6, title: "We are participating STEAM NEXT FEST 2025!", date: "13 October 2025", image: "/assets/ld03.png" },
];

// Custom Arrow — keep simple and accessible
function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous"
      className="devlog-arrow devlog-prev"
      style={{
        // inline fallback styles (Tailwind styles are in global CSS below)
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: "4px",
        border: "2px solid rgba(255,255,255,0.9)",
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <img src="/assets/al.png" alt="prev" style={{ width: 22, height: 22, filter: "none" }} />
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
        width: 56,
        height: 56,
        borderRadius: "4px",
        border: "2px solid rgba(255,255,255,0.9)",
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <img src="/assets/ar.png" alt="next" style={{ width: 22, height: 22, filter: "none" }} />
    </button>
  );
}

const sliderSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3, // TETAP 3 pada desktop
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  centerMode: false,     // pastikan MATI
  centerPadding: "0px",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" } },
    { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" } },
  ],
};

const DevlogSlider: React.FC = () => {
  return (
    // IMPORTANT: beri padding kiri/kanan untuk menampung arrow supaya arrow berada di "sisi" tanpa menutupi card
    <div className="devlog-slider-wrapper w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
      {/* GLOBAL STYLES KHUSUS SLICK */}
      <style jsx global>{`
        .devlog-slider-wrapper {
          position: relative;
          padding-left: 80px;
          padding-right: 80px;
        }

        .devlog-slider-wrapper .slick-list {
          overflow: hidden !important; 
        }
        .devlog-slider-wrapper .slick-track {
          display: flex;
          align-items: stretch;
        }
        .devlog-slider-wrapper .slick-slide > div {
          height: 100%;
        }

        .devlog-slider-wrapper .slick-prev:before,
        .devlog-slider-wrapper .slick-next:before {
          display: none !important;
        }

        .devlog-slider-wrapper .devlog-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 60;
          cursor: pointer;
        }

        .devlog-slider-wrapper .devlog-prev {
          left: -75px; 
        }

        .devlog-slider-wrapper .devlog-next {
          right: -75px; 
        }

        @media (max-width: 768px) {
          .devlog-slider-wrapper {
            padding-left: 48px;
            padding-right: 48px;
          }
          .devlog-slider-wrapper .devlog-prev {
            left: 8px;
          }
          .devlog-slider-wrapper .devlog-next {
            right: 8px;
          }
        }
      `}</style>

      <Slider {...sliderSettings}>
        {devlogs.map((item) => (
          <div key={item.id} className="px-4">
            <div className="w-full max-w-[384px] mx-auto h-full">
              <div className="bg-zinc-600 rounded-lg overflow-hidden shadow-2xl flex flex-col h-full">
                <div className="relative aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-white text-3xl md:text-4xl font-semibold font-['Playfair_Display'] leading-tight line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-stone-300 text-xl font-normal font-['Poppins'] mt-4">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DevlogSlider;
