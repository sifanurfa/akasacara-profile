"use client";

import { useState, useEffect } from "react";
import { VideoCard } from "@/components/film/ourworks/VideoProjectCard";
import { VideoApi } from "@/lib/api";
import { Video } from "@/types/api/types";
import Link from 'next/link';

export default function VideoProjectSection() {
    const [video, setVideo] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await VideoApi.getAll({ limit:6 });
            setVideo(data);
          } catch (err) {
            console.error("Failed to fetch works:", err);
          }
        };
        fetchData();
    }, []);
    
    return (
        <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
            <div className="headline-1 text-akasacara-yellow self-stretch">Video / Ads Projects</div>
            <div className="flex flex-col items-start gap-l self-stretch">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-xl content-start gap-l self-stretch">
                    {video.map((item) => (
                        <VideoCard
                            key={item.id}
                            title={item.title}
                            year={item.year}
                            image={item.image}                                    
                            type={item.type}                                    
                        />
                    ))}
                </div>
            </div>
            <Link href="/ourworks/video" className="button-main text-akasacara-yellow text-center self-stretch">SEE ALL</Link>
        </div>
    )
}