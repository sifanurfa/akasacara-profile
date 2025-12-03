"use client";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnnouncementFilmApi } from "@/lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AnnouncementFilm {
  id: number;
  documentId: string;
  urlMedia: string;
  image: string;
  title: string;
  announceType: string;
  date: string;
}

const ShowreelSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestFour, setLatestFour] = useState<AnnouncementFilm[]>([]);
  const router = useRouter();

  // ambil 4 data terbaru
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnouncementFilmApi.getAll({ limit:4, sort:"desc" });
        setLatestFour(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);
    
  // buka halaman article / eksternal link
  const handlePress = (item: AnnouncementFilm) => {
    const type = item.announceType?.toLowerCase();
    if ((type === "announcement" || type === "news") && item.documentId) {
      router.push(`/main/article/${item.documentId}`);
    } else if (item.urlMedia) {
      window.open(item.urlMedia, "_blank", "noopener,noreferrer");
    }
  };

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
              ? "w-6 h-6 bg-akasacara-yellow" 
              : "w-4 h-4 bg-white"
          }`}
        ></div>
      </div>
    ),
  };

  return (
    <div className="showreel-slider relative w-screen h-screen overflow-hidden">
      <Slider {...sliderSettings}>
        {latestFour.map((item) => (
          <div key={item.id} className="relative w-screen min-h-screen">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="px-container py-xl left-0 bottom-0 absolute bg-black/20 backdrop-blur-[1.05px] inline-flex flex-col justify-center items-center gap-[24px] w-full">
              <div className="self-stretch inline-flex items-center gap-6 vfx-text-title">
                <div className="flex-1 inline-flex flex-col items-start gap-4">
                  <div className="headline-1">
                    {item.title}
                  </div>
                  <div className="self-stretch sub-heading-reg">
                    {item.date}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div onClick={() => handlePress(item)} className="button-main cursor-pointer">
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