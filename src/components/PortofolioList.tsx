"use client";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Portofolio = {
  id: number;
  title: string;
  desc: string;
  image: string;
  rating: number;
};

const portofolios: Portofolio[] = [
  {
    id: 1,
    title: "Ganyang Setan Alas! The Game",
    desc: "Ganyang Setan Alas! The Game is a single-player shooter set in a haunted Indonesian forest, where four students, armed with a range of weapons, must survive relentless zombie attacks and escape a cursed fate.",
    image: "/assets/GSA.png",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Ganyang Setan Alas! — Chapter 2",
    desc: "Lanjutan petualangan horor penuh aksi dalam hutan terkutuk yang semakin kelam dan berbahaya.",
    image: "/assets/GSA.png",
    rating: 5,
  },
  {
    id: 3,
    title: "Ganyang Setan Alas! — Final Reveal",
    desc: "Pertarungan terakhir melawan kutukan yang memburu Anda tanpa henti.",
    image: "/assets/GSA.png",
    rating: 3.8,
  },
];

const PortofolioList: React.FC = () => {
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
    <div className="relative w-full overflow-hidden rounded-lg">
      <Slider {...sliderSettings}>
        {portofolios.map((item) => (
          <div key={item.id} className="relative">
            {/* Background */}
            <div
              className="w-full h-[70vh] min-h-[600px] bg-cover bg-center relative flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url('${item.image}')`,
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
                        Coming Soon
                      </div>

                      <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Playfair_Display'] leading-tight sm:leading-[56px]">
                        {item.title}
                      </div>

                      <div className="text-stone-300 text-base sm:text-lg lg:text-xl font-normal font-['Poppins'] leading-6 sm:leading-7">
                        {item.desc}
                      </div>
                    </div>

                    {/* Stars + Buttons */}
                    <div className="w-full flex flex-col justify-start items-start gap-6 lg:gap-8">
                      {/* Stars */}
                      <div className="flex justify-start items-center gap-0.5">
                        {[...Array(5)].map((_, i) => {
                        const starIndex = i + 1;

                        // Full star
                        if (starIndex <= item.rating) {
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
                        if (starIndex - 1 >= item.rating) {
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
                        const fillPercent = Math.round((item.rating - (starIndex - 1)) * 100);

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
                        <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white flex justify-center items-center gap-2 sm:gap-3 hover:bg-gray-100 transition-colors min-w-[160px] sm:min-w-[180px]">
                          <img
                            src="/assets/wht.png"
                            alt="Wishlist Icon"
                            className="w-4 h-3 sm:w-5 sm:h-4 object-contain"
                          />
                          <div className="text-black text-sm sm:text-base font-semibold font-['Poppins']">
                            Wishlist Now
                          </div>
                        </button>

                        <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-[50px] flex justify-center items-center gap-2 sm:gap-3 hover:bg-white/20 transition-colors min-w-[160px] sm:min-w-[180px]">
                          <img
                            src="/assets/wth.png"
                            alt="Trailer Icon"
                            className="w-4 h-3 sm:w-5 sm:h-4 object-contain"
                          />
                          <div className="text-white text-sm sm:text-base font-semibold font-['Poppins']">
                            Watch Trailer
                          </div>
                        </button>
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
    </div>
  );
};

export default PortofolioList;