import React from 'react'
import Image from 'next/image';

type WorkCardProps = {
  title: string;
  year?: number | null;
  image: string;
  type: string;
};

export function VideoCard({ title, year, image, type }: WorkCardProps) {
    return (
        <div className="flex flex-col items-center gap-m">
            <div className="relative overflow-hidden w-full self-stretch aspect-video">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col items-center gap-xs self-stretch">
                <div className="headline-3 text-white text-center self-stretch capitalize">{title}</div>
                <div className="body-light text-white text-center">{type} - {year}</div>
            </div>
        </div>
    )
}