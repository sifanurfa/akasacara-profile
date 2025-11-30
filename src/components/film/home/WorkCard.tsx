"use client";
import React from 'react'
import Image from 'next/image';
import "./FilmHome.css"

type WorkCardProps = {
  id: number;
  title: string;
  detail: string;
  year: string;
  image: string;
  caption: string;
  isLast?: boolean;
};

function WorkCard({ title, detail, year, image, caption, isLast }: WorkCardProps) {
  return (
    <div className="group flex flex-col self-stretch gap-xl transition-transform duration-500 hover:-translate-y-2">
      <div className="flex items-center gap-xl pe-l self-stretch transition-all duration-500">
        <div className="flex flex-1 flex-col group-hover:self-center justify-center items-start gap-m transition-all duration-500">
          <div className="work-title headline-2 text-white transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90">
            {title}
          </div>
          <div className="body-reg vfx-text-subtitle-1 hidden group-hover:block transition-opacity duration-500">
            {detail} - <span className="vfx-text-title">{year}</span>
          </div>
        </div>

        <div className="relative z-10 flex-1 aspect-video overflow-hidden hidden group-hover:block translate-y-5 group-hover:translate-y-0 transition-all duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="caption-light flex-1 self-center text-white hidden group-hover:block translate-y-5 group-hover:translate-y-0 transition-all duration-500">
          {caption}
        </div>
      </div>

      {!isLast && (
        <div className="self-stretch">
          <div className="bg-white h-[3px]"></div>
        </div>
      )}
    </div>
  )
}

export default WorkCard
