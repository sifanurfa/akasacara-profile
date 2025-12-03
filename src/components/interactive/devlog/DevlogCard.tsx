"use client";
import React from 'react'
import Image from 'next/image';

type PressCardProps = {
  documentId: string;
  title: string;
  image: string;
  date: string;
  announceType: string;
  urlMedia: string;
};

function DevlogCard({ title, image, announceType, date, urlMedia }: PressCardProps) {
    // buka halaman article / eksternal link
    const handlePress = () => {
        window.open(urlMedia, "_blank", "noopener,noreferrer");
    };

    // Ambil thumbnail dari URL YouTube
    const getYouTubeThumbnail = (url: string) => {
        const match = url.match(/(?:v=|\.be\/)([^&\n?#]+)/);
        const videoId = match ? match[1] : "";
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    };

    return (
        <div className="flex h-full flex-col items-stretch flex-1 group self-stretch">
            <div className="bg-[#5E5E5E] flex flex-col justify-center items-center">
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image 
                        src={
                            announceType === "videos"
                            ? getYouTubeThumbnail(urlMedia)
                            : image
                        }
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                
                <div className="flex flex-col py-l px-xl items-start justify-between self-stretch">
                    <div className="flex flex-col items-start gap-m self-stretch mb-md">
                        <div className="headline-3 vfx-text-title self-stretch line-clamp-2">{title}</div>
                        <div className="body-reg vfx-text-subtitle-1 self-stretch">{date}</div>
                    </div>
                    <div onClick={handlePress} className="flex items-center gap-5 vfx-text-title cursor-pointer">
                        <span className="button-secondary">READ MORE</span>
                        <span className="watch-here">-&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevlogCard;