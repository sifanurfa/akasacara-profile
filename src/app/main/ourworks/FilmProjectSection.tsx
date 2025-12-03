"use client";

import { useState, useEffect } from "react";
import { FilmCard } from "@/components/film/ourworks/FilmProjectCard";
import { FilmApi } from "@/lib/api";
import { Film } from "@/types/api/types";
import Link from 'next/link';

export default function FilmProjectSection() {
    const [film, setFilm] = useState<Film[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FilmApi.getAll({ limit:8 });
            setFilm(data);
          } catch (err) {
            console.error("Failed to fetch works:", err);
          }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
            <div className="headline-1 text-akasacara-yellow self-stretch">Film Projects</div>
            <div className="flex flex-col items-start gap-l self-stretch">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-xl content-start gap-l self-stretch">
                    {film.map((item) => (
                        <FilmCard
                            key={item.id}
                            title={item.title}
                            year={item.year}
                            image={item.potraitImage}                                    
                        />
                    ))}
                </div>
            </div>
            <Link href="/ourworks/film" className="button-main text-akasacara-yellow text-center self-stretch">SEE ALL</Link>
        </div>
    )
}