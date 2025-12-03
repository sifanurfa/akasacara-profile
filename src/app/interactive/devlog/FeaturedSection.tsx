"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import "./Devlog.css"
import { AnnouncementInteractiveApi } from "@/lib/api";
import { AnnouncementInteractive } from "@/types/api/types";

export default function FeaturedSection() {
    const [highlight, setHighlight] = useState<AnnouncementInteractive[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await AnnouncementInteractiveApi.getHighlightVideo();
            setHighlight(data);
        } catch (err) {
            console.error("Failed to fetch Highlight:", err);
        }
        };
        fetchData();
    }, []);

    const item = highlight[0];
    if (!item) {
        return null; // or a loading indicator
    }

    // Ubah URL video biasa jadi URL embed YouTube
    const getYouTubeEmbedUrl = (url: string) => {
        if (!url) return "";
        const videoIdMatch = url.match(/(?:v=|\.be\/)([^&\n?#]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : "";
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const embedUrl = getYouTubeEmbedUrl(item.urlMedia);

    // Ambil thumbnail dari URL YouTube
    const getYouTubeThumbnail = (url: string) => {
        const match = url.match(/(?:v=|\.be\/)([^&\n?#]+)/);
        const videoId = match ? match[1] : "";
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    };

    return (
        <div className="flex flex-col py-section items-start gap-3xl self-stretch border-b-2 border-white">
            <div className="flex self-stretch">
                <div className="headline-1 vfx-text-title">Featured Videos</div>
            </div>
            <div className="flex items-start self-stretch bg-[#5E5E5E]">
                <div className="flex flex-1 flex-col p-l items-start gap-xs self-stretch">
                    <div className="relative w-full aspect-345/193 self-stretch overflow-hidden">
                        <Image
                            src={getYouTubeThumbnail(item.urlMedia)}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-m self-stretch">
                        <div className="flex flex-col items-start gap-s self-stretch">
                            <div className="headline-3 vfx-text-title self-stretch line-clamp-2">{item.title}</div>
                            <div className="flex items-center gap-s">
                                {item.genreList.map((item, idx) => (
                                    <div key={idx} className="flex justify-center items-center bg-[#737373] p-s">
                                        <div className="genre text-white">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="caption-reg vfx-text-title">{item.item}</div>
                    </div>
                </div>
                
                {/* embed youtube */}
                <div className="relative flex-2 w-full aspect-video self-stretch overflow-hidden">
                    <iframe
                        src={embedUrl}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full aspect-video rounded-none"
                    />
                </div>
            </div>
        </div>
    )
}