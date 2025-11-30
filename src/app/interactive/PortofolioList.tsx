"use client";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InteractiveGameApi } from "@/lib/api";
import { InteractiveGamePortofolio } from "@/types/api/types";
import WishlistNowBtn from "@/components/interactive/homepage/WishlistNowBtn";
import WatchTrailerBtn from "@/components/interactive/homepage/WatchTrailerBtn";

const PortofolioList: React.FC = () => {
  const [portofolios, setPortofolios] = useState<InteractiveGamePortofolio[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InteractiveGameApi.getGames();
        setPortofolios(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

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
    <div className="relative w-full overflow-hidden rounded-lg">
      <Slider {...sliderSettings}>
        {portofolios.map((item) => (
          <div key={item.id} className="relative">
            {/* Background */}
            <div
              className="w-full h-[70vh] min-h-[600px] bg-cover bg-center relative flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url('${baseURL?.replace("/api", "")}${item.media?.[0]?.url.replace("/api/", "/")}')`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-0"></div>

              {/* Content */}
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center gap-4 z-10">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
                  
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-start items-start gap-8 lg:gap-12">
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                      
                      <div className="text-white text-lg sm:text-xl font-normal font-['Poppins'] leading-7">
                        {item.progres}
                      </div>

                      <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Playfair_Display'] leading-tight sm:leading-[56px]">
                        {item.title}
                      </div>

                      <div className="text-stone-300 text-base sm:text-lg lg:text-xl font-normal font-['Poppins'] leading-6 sm:leading-7">
                        {item.description}
                      </div>
                    </div>

                    {/* Stars + Buttons */}
                    <div className="w-full flex flex-col justify-start items-start gap-6 lg:gap-8">
                      {/* Stars */}
                      <div className="flex justify-start items-center gap-0.5">
                        {[...Array(5)].map((_, i) => {
                        const starIndex = i + 1;

                        // Full star
                        if (starIndex <= item.rate) {
                          return (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                              fill="#fbbf24"
                              className="w-6 h-6 sm:w-8 sm:h-8"
                            >
                              <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                            </svg>
                          );
                        }

                        // Empty star
                        if (starIndex - 1 >= item.rate) {
                          return (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                              fill="#ffffff40"
                              className="w-6 h-6 sm:w-8 sm:h-8"
                            >
                              <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                            </svg>
                          );
                        }

                        // Partial star (3.2, 4.8, 2.7, etc.)
                        const fillPercent = Math.round((item.rate- (starIndex - 1)) * 100);

                        return (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          >
                            <defs>
                              <linearGradient id={`grad-${i}`}>
                                <stop offset={`${fillPercent}%`} stopColor="#fbbf24" />
                                <stop offset={`${fillPercent}%`} stopColor="#ffffff40" />
                              </linearGradient>
                            </defs>
                            <path
                              fill={`url(#grad-${i})`}
                              d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
                            />
                          </svg>
                        );
                      })}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4">
                        <WishlistNowBtn link={item.link} />
                        <WatchTrailerBtn trailerUrl={item.trailer} setTrailerUrl={setTrailerUrl} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side Images */}
                  <div className="flex-1 flex flex-col justify-center items-center lg:items-end gap-3 mt-8 lg:mt-0">
                    <img src="/assets/ss01.png" alt="ss" className="w-full max-w-xs lg:max-w-none lg:w-80 rounded-lg shadow-lg" />
                    <img src="/assets/ss01.png" alt="ss" className="w-full max-w-xs lg:max-w-none lg:w-80 rounded-lg shadow-lg" />
                    <img src="/assets/ss01.png" alt="ss" className="w-full max-w-xs lg:max-w-none lg:w-80 rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {trailerUrl && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setTrailerUrl(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // biar klik di dalam modal tidak menutup
          >
            {/* Tombol Close */}
            <button
              onClick={() => setTrailerUrl(null)}
              className="absolute top-4 right-4 z-10 text-white text-5xl hover:text-gray-300 transition-all hover:scale-110"
            >
              ×
            </button>

            {/* YouTube Player */}
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <iframe
                src={trailerUrl}
                title="Game Trailer"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortofolioList;

// function InteractiveCollection() {
// }
// type Portofolio = {
//   id: number;
//   title: string;
//   desc: string;
//   image: string;
//   rating: number;
// };

// const portofolios: Portofolio[] = [
//   {
//     id: 1,
//     title: "Ganyang Setan Alas! The Game",
//     desc: "Ganyang Setan Alas! The Game is a single-player shooter set in a haunted Indonesian forest, where four students, armed with a range of weapons, must survive relentless zombie attacks and escape a cursed fate.",
//     image: "/assets/GSA.png",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Ganyang Setan Alas! — Chapter 2",
//     desc: "Lanjutan petualangan horor penuh aksi dalam hutan terkutuk yang semakin kelam dan berbahaya.",
//     image: "/assets/GSA.png",
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Ganyang Setan Alas! — Final Reveal",
//     desc: "Pertarungan terakhir melawan kutukan yang memburu Anda tanpa henti.",
//     image: "/assets/GSA.png",
//     rating: 3.8,
//   },
// ];