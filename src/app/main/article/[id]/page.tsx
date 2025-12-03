"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ArticleCard from "@/components/film/announcement/ArticleCard";
import { AnnouncementFilmApi } from "@/lib/api";
import { AnnouncementFilm } from "@/types/api/types";

function Article() {
  const { id } = useParams(); // dynamic segment is `[id]` so param name is `id`
  const [article, setArticle] = useState<AnnouncementFilm | null>(null);
  const [latest, setLatest] = useState<AnnouncementFilm[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ambil data article by id
  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      // pastikan id string
      const docId = Array.isArray(id) ? id[0] : id;

      try {
        const data = await AnnouncementFilmApi.getArticlebyId(docId);
        console.log("Fetched article data:", data);
        if (!data) {
          console.warn(
            "AnnouncementFilmApi.getArticle returned empty for id:",
            docId
          );
          setArticle(null);
          return;
        }

        setArticle(data as AnnouncementFilm);
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setArticle(null);
      }
    };
    fetchArticle();
  }, [id]);

  // ambil data latest announcement
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnouncementFilmApi.getBlogs({ limit:4, sort:"desc" });
        setLatest(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col pb-section items-start">
      <div className="relative items-start self-stretch aspect-video">
        {article?.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col pt-section px-container justify-center items-start gap-m self-stretch">
        <p className="headline-1 aka-text-title">{article?.title}</p>
        <p className="sub-heading-reg self-stretch aka-text-subtitle-2">{article?.date}</p>
      </div>
      <div className="py-section px-container flex flex-col gap-[20] justify-center items-center self-stretch sub-heading-reg aka-text-title text-justify">
        {article?.item}
      </div>
      
      <div className="py-section px-container flex flex-col items-start gap-xl self-stretch">
        <div className="headline-2 aka-text-title self-stretch">
          Latest Announcements
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-m gap-y-l">
          {latest.map((item) => (
            <ArticleCard
              key={item.id}
              id={item.id}
              title={item.title}
              date={item.date}
              image={`${baseURL?.replace(
                "/api",
                ""
              )}${item.media?.[0]?.url.replace("/api/", "/")}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
