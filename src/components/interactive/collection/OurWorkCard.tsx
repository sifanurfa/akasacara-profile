import React from 'react'
import Image from 'next/image';

type OurWorkCardProps = {
  id: number;
  title: string;
  content: string;
  image: string;
};

function OurWorkCard({ id, title, content, image }: OurWorkCardProps) {
  return (
    <div className="group flex items-center gap-l self-stretch transition-all duration-500">
      <div className="headline-2 vfx-text-title group-hover:px-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 transition-all duration-500 w-0 group-hover:w-1/4 text-right">
        {title}
      </div>

      <div className="relative w-side-highlight aspect-video transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-m group-hover:w-1/4 transition-all duration-500">
        <div className="headline-3 vfx-text-title group-hover:opacity-0  group-hover:h-0 transition-all duration-300">
          {title}
        </div>
        <div className="body-reg vfx-text-title group-hover:translate-x-4 transition-all duration-500">
          {content}
        </div>
      </div>
    </div>
  )
}

export default OurWorkCard