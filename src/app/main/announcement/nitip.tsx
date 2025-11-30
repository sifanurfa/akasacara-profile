"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Announcement.css";
import Link from "next/link";
import { AnnouncementFilmApi } from "@/lib/api";
import { AnnouncementFilm } from "@/types/api/types";

type HighlightItem = {
  id: number;
  title: string;
  category: string; // announceType
  date: string; // formatted
  image: string; // full URL
  documentId: string;
};

const HighlightSection = () => {
  const [mainHighlight, setMainHighlight] = useState<HighlightItem | null>(
    null
  );
  const [subHighlights, setSubHighlights] = useState<HighlightItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnouncementFilmApi.getHighlight();
        const mapItem = (item: AnnouncementFilm): HighlightItem => ({
          id: item.id,
          title: item.title,
          category: item.announceType,
          date: item.date || "",
          image: item.urlMedia,
          documentId: item.documentId,
        });

        setMainHighlight(mapItem(data[0]));
        setSubHighlights(data.slice(1).map(mapItem));
      } catch (err) {
        console.error("Failed to fetch highlights:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSwap = (item: HighlightItem) => {
    if (!mainHighlight) return;
    const newSubs = subHighlights.map((sub) =>
      sub.id === item.id ? mainHighlight : sub
    );
    setSubHighlights(newSubs);
    setMainHighlight(item);
  };

  if (loading || !mainHighlight) return null;

  return (
    <div className="self-stretch px-container py-section flex flex-col items-start gap-xl">
      <div className="self-stretch text-akasacara-yellow headline-1">
        HIGHLIGHT
      </div>

      <div className="self-stretch flex items-start gap-l">
        {/* MAIN IMAGE */}
        <div className="flex-1 self-stretch flex flex-col items-start gap-m">
          <div className="flex-1 relative overflow-hidden self-stretch justify-center aspect-video">
            {mainHighlight.image && (
              <img
                src={mainHighlight.image}
                alt={mainHighlight.title}
                // fill
                className="object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              />
            )}
          </div>
          <div className="self-stretch pb-md pr-md flex flex-col items-start gap-m">
            <div className="self-stretch">
              <span className="press-category vfx-text-title">
                {mainHighlight.category}
              </span>
              <span className="body-reg vfx-text-subtitle-1">
                {" "}
                / {mainHighlight.date}
              </span>
            </div>
            <div className="self-stretch flex justify-end items-start gap-m">
              <div className="headline-3 vfx-text-title">
                {mainHighlight.title}
              </div>
            </div>
          </div>
        </div>

        {/* SUB IMAGES */}
        <div className="flex-1 self-stretch flex flex-col items-start">
          {subHighlights.map((item, idx) => (
            <div
              key={item.id}
              // onClick={() => handleSwap(item)}
              className="flex flex-col"
            >
              <div className="group self-stretch p-m flex justify-end items-center gap-2xl cursor-pointer hover:bg-akasacara-yellow transition-all duration-200">
                <div className="flex-5 flex flex-col items-start gap-m">
                  <div className="self-stretch caption-reg">
                    <span className="text-white group-hover:text-black/50">
                      {item.category}
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
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-300 hover:scale-105"
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
