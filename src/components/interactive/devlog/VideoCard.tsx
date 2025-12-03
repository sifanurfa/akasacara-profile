"use client";
import React from 'react'
import Image from 'next/image';

type PressCardProps = {
  documentId: string;
  title: string;
  ytChannel: string;
  urlMedia: string;
};

function VideoCard({ title, ytChannel, urlMedia }: PressCardProps) {
    // buka halaman article / eksternal link
    const handlePress = () => {
        if (typeof window !== "undefined") {
            window.open(urlMedia, "_blank", "noopener,noreferrer");
        }
    };

    // Ambil thumbnail dari URL YouTube
    const getYouTubeThumbnail = (url: string) => {
        const match = url.match(/(?:v=|\.be\/)([^&\n?#]+)/);
        const videoId = match ? match[1] : "";
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    };

    return (
        <div className="grid grid-cols-2 items-center gap-l flex-1 group self-stretch bg-[#5E5E5E]">            
            <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                    src={getYouTubeThumbnail(urlMedia)}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col py-l pr-l items-start justify-between self-stretch">
                <div className="flex flex-col items-start gap-m self-stretch mb-md">
                    <div className="headline-3 vfx-text-title self-stretch line-clamp-3">{title}</div>
                    <div className="body-reg vfx-text-subtitle-1 self-stretch">{ytChannel}</div>
                </div>
                <div onClick={handlePress} className="flex items-center gap-5 vfx-text-title cursor-pointer">
                    <span className="button-secondary">WATCH HERE</span>
                    <span className="watch-here">-&gt;</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;