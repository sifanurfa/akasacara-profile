"use client";
import { useState } from "react";

// Type artikel
interface Article {
  date: string;
  title: string;
  image: string;
}

// Type tab 
type ArticleTabs = "All" | "News" | "Press" | "Announcement";

// Daftar tab 
const tabs: ArticleTabs[] = ["All", "News", "Press", "Announcement"];

// Data artikel 
const articlesData: Record<ArticleTabs, Article[]> = {
  All: [
    {
      date: "October 12, 2025",
      title:
        "Film 'Darah Nyai', Horor Jagal Mistis yang Bangkitkan Legenda Nyai Roro Kidul",
      image: "/assets/News01.png",
    },
    {
      date: "July 28, 2025",
      title: "Sinopsis Film Darah Nyai dan Para Pemainnya",
      image: "/assets/News02.png",
    },
    {
      date: "December 5, 2024",
      title:
        "The Draft!, Film Besutan Sivitas Akademika UGM Jadi Sorotan di Festival Film Internasional",
      image: "/assets/News03.png",
    },
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi 'Tengkorak' Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
    {
      date: "November 15, 2025",
      title: "Film Baru 'Legenda Gunung Merapi' Segera Tayang",
      image: "/assets/News01.png",
    },
    {
      date: "September 10, 2025",
      title: "Festival Film Indonesia 2025: Daftar Nominasi Terbaru",
      image: "/assets/News02.png",
    },
  ],
  News: [
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi 'Tengkorak' Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
    {
      date: "September 3, 2025",
      title: "Sinopsis Film Darah Nyai dan Para Pemainnya",
      image: "/assets/News02.png",
    },
  ],
  Press: [
    {
      date: "December 5, 2024",
      title:
        "The Draft!, Film Besutan Sivitas Akademika UGM Jadi Sorotan di Festival Film Internasional",
      image: "/assets/News03.png",
    },
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi 'Tengkorak' Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
  ],
  Announcement: [
    {
      date: "November 10, 2025",
      title: "Pendaftaran Kompetisi Film Pendek UGM Resmi Dibuka!",
      image: "/assets/News04.png",
    },
  ],
};

// Konstanta untuk jumlah item per slide
const ITEMS_PER_SLIDE = 5;

// Section Berita
export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<ArticleTabs>("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ambil isi artikel berdasarkan tab aktif
  const activeArticles = articlesData[activeTab];
  
  // Hitung total slides yang diperlukan
  const totalSlides = Math.ceil(activeArticles.length / ITEMS_PER_SLIDE);
  
  // Fungsi untuk mengubah slide
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Fungsi untuk mendapatkan artikel yang ditampilkan di slide saat ini
  const getCurrentSlideArticles = () => {
    const startIndex = currentSlide * ITEMS_PER_SLIDE;
    const endIndex = startIndex + ITEMS_PER_SLIDE;
    return activeArticles.slice(startIndex, endIndex);
  };

  // Reset ke slide pertama ketika tab diubah
  const handleTabChange = (tab: ArticleTabs) => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <section className="self-stretch py-section inline-flex flex-col justify-start items-center gap-2xl">
      {/* MENU */}
      <div className="inline-flex justify-start items-center gap-20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`text-5xl font-['Playfair_Display'] leading-[56px] transition-colors duration-300 ${
              activeTab === tab
                ? "text-[#D4AF37]"
                : "text-white hover:text-[#D4AF37]"
            } font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST BERITA - SLIDER */}
      <div className="self-stretch px-container inline-flex flex-col justify-start items-start gap-7">
        {getCurrentSlideArticles().map((item, idx) => (
          <div key={idx} className="w-full">
            <div className="flex flex-col md:flex-row justify-start items-center py-6 hover:bg-[#D4AF37] transition-colors duration-300">
              <div className="flex-1 h-96 p-6 inline-flex flex-col justify-center items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[499.26px] flex-1 object-cover"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                <p className="self-stretch justify-start text-white text-xl font-normal font-['Poppins'] leading-7">
                  {item.date}
                </p>
                <h2 className="self-stretch justify-start text-white text-5xl font-semibold font-['Playfair_Display'] leading-[56px]">
                  {item.title}
                </h2>
              </div>
            </div>

            {/* Garis Pemisah */}
            {idx !== getCurrentSlideArticles().length - 1 && (
              <div className="w-full border-t border-white/50 my-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* PAGINATION BULLETS - hanya ditampilkan jika lebih dari 1 slide */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 h-6 bg-[#D4AF37] rounded-full"
                  : "w-4 h-4 bg-white rounded-full hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}