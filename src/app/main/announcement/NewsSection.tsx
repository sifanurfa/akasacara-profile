"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { AnnouncementFilmApi } from "@/lib/api";
import { useRouter } from "next/navigation";
import "./Announcement.css"

// Type artikel
interface Article {
  date: string;
  title: string;
  image: string;
}

// Type tab 
type ArticleTabs = "All" | "News" | "Press" | "Blog";

// Daftar tab 
const tabs: ArticleTabs[] = ["All", "News", "Press", "Blog"];

// Konstanta untuk jumlah item per slide
const ITEMS_PER_SLIDE = 4;

// Section Berita
export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<ArticleTabs>("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesData, setArticlesData] = useState<Record<ArticleTabs, Article[]>>({
    All: [],
    News: [],
    Press: [],
    Blog: [],
  });
  const router = useRouter();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const all = await AnnouncementFilmApi.getAll();
        const news = await AnnouncementFilmApi.getNews();
        const press = await AnnouncementFilmApi.getPress();
        const blogs = await AnnouncementFilmApi.getBlogs();

        setArticlesData((prev) => ({
          ...prev,
          All: all,
          News: news,
          Press: press,
          Blog: blogs,
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

  // buka halaman article / eksternal link
  const handlePress = (item: Article & { announceType?: string; documentId?: string; urlMedia?: string }) => {
    const type = item.announceType?.toLowerCase();
    if ((type === "blog" || type === "news") && item.documentId) {
      router.push(`/article/${item.documentId}`);
    } else if (item.urlMedia) {
      window.open(item.urlMedia, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="self-stretch py-section flex flex-col items-center gap-2xl">
      {/* MENU */}
      <div className="flex flex-wrap justify-evenly items-center gap-x-20 gap-y-4 px-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`tab-title transition-colors duration-300 ${
              activeTab === tab
                ? "text-akasacara-yellow underline underline-offset-8 decoration-1"
                : "text-white hover:text-akasacara-yellow cursor-pointer"
            } font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST BERITA - SLIDER */}
      <div className="self-stretch px-container flex flex-col justify-start">
        {getCurrentSlideArticles().map((item, idx) => (
          <div key={idx} onClick={() => handlePress(item)} className="w-full gap-7">
            <div className="flex flex-col lg:flex-row items-center self-stretch group hover:bg-akasacara-yellow transition-colors duration-300 cursor-pointer">
              <div className="flex-1 w-full relative m-md flex justify-center items-start aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-m px-m pr-md text-white group-hover:text-black">
                <p className="self-stretch body-reg">
                  {item.date}
                </p>
                <h2 className="self-stretch announcement-title line-clamp-3">
                  {item.title}
                </h2>
              </div>
            </div>

            {/* Garis Pemisah */}
            {idx !== getCurrentSlideArticles().length - 1 && (
              <div className="w-full border-t border-white/50 my-7"></div>
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