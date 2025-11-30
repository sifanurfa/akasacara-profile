"use client";
import React from 'react'
import Image from 'next/image';
import "./FilmHome.css"

type ServiceCardProps = {
  category: string;
  caption: string;
  image: string;
  details: string[];
  isLast?: boolean;
};

function ServiceCard({ category, caption, image, details, isLast }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-start self-stretch gap-l group">
        <div className="flex items-start gap-m self-stretch transition-all duration-500 group-hover:px-[42px] group-hover:bg-akasacara-yellow">
            <div className="flex group-hover:hidden flex-col xl:w-1/3 items-start gap-m">
                <div className="service-title vfx-text-title">{category}</div>
                <div className="service-desc caption-reg vfx-text-subtitle-1 self-stretch">{caption}</div>
            </div>
            {/* hover */}
            <div className="hidden flex-1 flex-col group-hover:flex self-center items-start gap-m">
                <div className="service-title vfx-text-title">{category}</div>
                <div className="service-desc caption-reg vfx-text-subtitle-1 self-stretch">{caption}</div>
            </div>
            <div className="relative flex-1 self-stretch aspect-436/232 overflow-hidden hidden group-hover:block translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                <Image
                    src={image}
                    alt={category}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="service-content self-center text-vfx hidden group-hover:flex group-hover:flex-col translate-y-5 group-hover:translate-y-0 transition-all duration-500 overflow-hidden">
                <div className="service-content-inner pb-l">
                    {details.map((detail) => (
                        <p key={detail}>{detail}</p>
                    ))}
                </div>
                <div className="service-content-inner pb-l" aria-hidden="true">
                    {details.map((detail) => (
                        <p key={detail}>{detail}</p>
                    ))}
                </div>
                <div className="service-content-inner pb-l" aria-hidden="true">
                    {details.map((detail) => (
                        <p key={detail}>{detail}</p>
                    ))}
                </div>
            </div>
        </div>

        {!isLast && (
            <div className="self-stretch">
                <div className="bg-white h-px"></div>
            </div>
        )}
    </div>
  )
}

export default ServiceCard