"use client";
import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import "./FilmHome.css"

type PressCardProps = {
  documentId: string;
  title: string;
  announceType: string;
  image: string;
  urlMedia: string;
  date: string;
};

function PressCard({ documentId, title, announceType, image, date, urlMedia }: PressCardProps) {
  const router = useRouter();
  
  // buka halaman article / eksternal link
  const handlePress = () => {
    const type = announceType?.toLowerCase();
    if ((type === "announcement" || type === "news") && documentId) {
      router.push(`/main/article/${documentId}`);
    } else {
      window.open(urlMedia, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div onClick={handlePress} className="flex flex-col items-start group cursor-pointer">
        <div className="flex-1 w-full relative aspect-video overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="flex flex-col pt-m pb-l pe-4 items-center gap-m self-stretch">
            <div className="self-stretch">
                <span className="press-category aka-text-title">{announceType}</span>
                <span className="aka-text-subtitle-1 body-reg"> / {date}</span>
            </div>
            <div className="self-stretch">
                <div className="garis h-px"></div>
            </div>
            <div className="press-title aka-text-title self-stretch">{title}</div>
        </div>
    </div>
  )
}

export default PressCard