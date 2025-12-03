"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Announcement.css";
import { AnnouncementFilmApi } from "@/lib/api";
import { AnnouncementFilm } from "@/types/api/types";
import { useRouter } from "next/navigation";

const HighlightSection = () => {
  const [mainHighlight, setMainHighlight] = useState<AnnouncementFilm | null>(null);
  const [subHighlights, setSubHighlights] = useState<AnnouncementFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil semua data highlight dari API
        const data = await AnnouncementFilmApi.getHighlight({ limit: 4, sort: "desc" });

        if (data.length > 0) {
          // Ambil item pertama sebagai main highlight
          setMainHighlight(data[0]);
          // Sisanya jadi sub highlights
          setSubHighlights(data.slice(1));
        }
      } catch (err) {
        console.error("Failed to fetch highlights:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !mainHighlight) return null;

  // buka halaman article / eksternal link
  const handlePress = (item: AnnouncementFilm) => {
    const type = item.announceType?.toLowerCase();
    if ((type === "announcement" || type === "news") && item.documentId) {
      router.push(`/main/article/${item.documentId}`);
    } else if (item.urlMedia) {
      window.open(item.urlMedia, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="self-stretch px-container py-section flex flex-col items-start gap-xl">
      <div className="self-stretch text-akasacara-yellow headline-1">
        HIGHLIGHT
      </div>

      <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 items-start gap-l">
        {/* MAIN IMAGE */}
        {mainHighlight && (
          <div onClick={() => handlePress(mainHighlight)} className="flex-1 self-stretch flex flex-col items-start gap-m px-m pt-m cursor-pointer group hover:bg-akasacara-yellow transition-all duration-200">
            <div className="flex-1 relative overflow-hidden self-stretch justify-center aspect-video">
              <Image
                src={`${baseURL?.replace(
                      "/api",
                      ""
                    )}${mainHighlight.media?.[0]?.url.replace("/api/", "/")}`}
                alt={mainHighlight.title}
                fill
                className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
              />
              
            </div>
            <div className="self-stretch pb-md pr-md flex flex-col items-start gap-m">
              <div className="self-stretch">
                <span className="press-category text-white group-hover:text-black/50">
                  {mainHighlight.announceType}
                </span>
                <span className="body-reg text-[#CCC] group-hover:text-black/50">
                  {" "} / {mainHighlight.date}
                </span>
              </div>
              <div className="self-stretch flex justify-end items-start gap-m">
                <div className="headline-3 text-white group-hover:text-black">{mainHighlight.title}</div>
              </div>
            </div>
          </div>
        )}

        {/* SUB IMAGES */}
        <div className="flex-1 self-stretch flex flex-col items-start">
          {subHighlights.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handlePress(item)}
              className="flex flex-col self-stretch"
            >
              <div className="group self-stretch p-m flex justify-end items-center gap-2xl cursor-pointer hover:bg-akasacara-yellow transition-all duration-200">
                <div className="flex-5 flex flex-col items-start gap-m">
                  <div className="self-stretch caption-reg">
                    <span className="text-white group-hover:text-black/50">
                      {item.announceType}
                    </span>
                    <span className="text-[#CCC] group-hover:text-black/50">
                      {" "}
                      / {item.date}
                    </span>
                  </div>
                  <div className="self-stretch text-white side-highlight-title group-hover:text-black line-clamp-3">
                    {item.title}
                  </div>
                </div>
                <div className="flex-3 relative w-full overflow-hidden aspect-222/143 flex flex-col justify-center items-start">
                  {item.urlMedia ? (
                    <Image
                      src={`${baseURL?.replace(
                      "/api",
                      ""
                    )}${item.media?.[0]?.url.replace("/api/", "/")}`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                      No image
                    </div>
                  )}
                </div>
              </div>

              {/* Garis Pemisah */}
              {idx !== 2 && (
                <div className="w-full border-t border-white/50 my-m"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
