"use client";

import React, { useEffect, useState } from "react";
import WorkCard from '@/components/film/home/WorkCard';
import { FilmApi } from "@/lib/api";
import { Film } from "@/types/api/types";

function FilmProjects() {
  const [film, setFilm] = useState<Film[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FilmApi.getAll();
        setFilm(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-start bg-akasacara'>
        <div className="flex flex-col p-container justify-center items-start gap-section self-stretch">
          <div className="flex items-end justify-between self-stretch">
            <div className="headline-1 text-akasacara-yellow">Film Projects</div>
          </div>
          
          <div className="flex flex-col items-start gap-xl self-stretch">
            {film.map((item, index) => (
              <WorkCard
                key={item.id}
                id={item.id}
                title={item.title}
                year={item.year}
                image={item.landscapeImage}
                description={item.description}
                type={item.projectType}
                isLast={index === film.length - 1}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default FilmProjects