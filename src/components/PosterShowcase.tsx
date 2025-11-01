"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://placehold.co/200x100",
  "https://placehold.co/112x318",
  "https://placehold.co/150x200",
  "https://placehold.co/300x250",
  "https://placehold.co/170x361",
  "https://placehold.co/212x318",
  "https://placehold.co/150x200",
  "https://placehold.co/300x250",
  "https://placehold.co/170x361",
];

function InfiniteRow({ direction = 1, speed = 50 }) {
  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useAnimationFrame((_, delta) => {
  if (!containerRef.current) return;
  baseX.current += (delta / 1000) * speed * direction;

  const totalWidth = containerRef.current.scrollWidth / 2;

  // Gunakan modulus untuk looping halus tanpa reset mendadak
  baseX.current = ((baseX.current % totalWidth) + totalWidth) % totalWidth;

  containerRef.current.style.transform = `translateX(${-baseX.current}px)`;
});

  return (
    <div className="bg-vfx overflow-hidden w-full">
      <div ref={containerRef} className="flex items-center">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="max-h-[420px] h-auto w-auto rounded-xl object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryMarquee() {
  return (
    <div className="flex flex-col overflow-hidden pb-section bg-vfx">
      {/* Row 1 */}
      <div className="mb-8">
        <InfiniteRow direction={1} speed={40} />
      </div>

      {/* Row 2 (arah berlawanan) */}
      <InfiniteRow direction={-1} speed={40} />
    </div>
  );
}
