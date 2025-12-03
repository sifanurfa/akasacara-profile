"use client";
import { useState, useEffect } from "react";
import "./Announcement.css"
import { AnnouncementInteractiveApi } from "@/lib/api";
import DevlogCard from "@/components/interactive/devlog/DevlogCard";
import VideoCard from "@/components/interactive/devlog/VideoCard";

// Type artikel
interface Article {
  id: number;
  date: string;
  documentId: string;
  title: string;
  image: string;
  ytChannel: string;
  announceType: string;
  urlMedia: string;
}

// Type tab 
type ArticleTabs = "All" | "Devlog" | "News" | "Videos";

// Daftar tab 
const tabs: ArticleTabs[] = ["All", "Devlog", "News", "Videos"];

// Konstanta untuk jumlah item per slide
const ITEMS_PER_SLIDE = 6;

// Section Berita
export default function DevlogSection() {
  const [activeTab, setActiveTab] = useState<ArticleTabs>("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesData, setArticlesData] = useState<Record<ArticleTabs, Article[]>>({
    All: [],
    Devlog: [],
    News: [],
    Videos: [],
  });

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const all = await AnnouncementInteractiveApi.getAll();
        const devlog = await AnnouncementInteractiveApi.getDevlog();
        const news = await AnnouncementInteractiveApi.getNews();
        const videos = await AnnouncementInteractiveApi.getVideos();
        console.log({ "data:": devlog });

        setArticlesData((prev) => ({
          ...prev,
          All: all,
          Devlog: devlog,
          News: news,
          Videos: videos,
        }));
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      }
    };

    fetchAnnouncements();
  }, []);

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
    <section className="self-stretch py-section flex flex-col items-center gap-section">
      {/* MENU */}
      <div className="flex flex-wrap justify-evenly items-center gap-x-20 gap-y-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`tab-title text-white transition-colors duration-300 ${
              activeTab === tab
                ? "underline underline-offset-8 decoration-1"
                : "cursor-pointer"
            } font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST DEVLOG - NEWS - VIDEOS */}
      {activeTab === "Videos" ? (
        <div className="self-stretch flex flex-col gap-xl items-center">
          {getCurrentSlideArticles().map((item) => (
            <VideoCard
              key={item.id}
              documentId={item.documentId}
              title={item.title}
              ytChannel={item.ytChannel}
              urlMedia={item.urlMedia}
            />
          ))}
        </div>
      ) : (
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 items-stretch gap-2xl">
          {getCurrentSlideArticles().map((item) => (
            <DevlogCard
              key={item.id}
              documentId={item.documentId}
              title={item.title}
              image={item.image}
              date={item.date}
              announceType={item.announceType}
              urlMedia={item.urlMedia}
            />
          ))}
        </div>
      )}

      {/* PAGINATION BULLETS - hanya ditampilkan jika lebih dari 1 slide */}
      {totalSlides > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 h-6 bg-akasacara-yellow rounded-full"
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