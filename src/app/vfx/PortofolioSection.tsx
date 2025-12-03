"use client";
// PortofolioSection.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Poster.module.css';
import { OurWorkVFXApi } from "@/lib/api";
import { OurWorkVFX } from "@/types/api/ourwork";
import Link from 'next/link';

// const posters = [
//   { id: 1, src: "/assets/gowok.png", title: "Gowok", highlightedTitle: "Gowok 2025" },
//   { id: 2, src: "/assets/darah_nyai.png", title: "Darah Nyai", highlightedTitle: "Darah Nyai" },
//   { id: 3, src: "/assets/setan_alas.png", title: "Setan Alas!", highlightedTitle: "Setan Alas!" },
//   { id: 4, src: "/assets/serigala_langit.png", title: "Serigala Langit", highlightedTitle: "Serigala Langit" },
//   { id: 5, src: "/assets/gowok2.png", title: "Setan Alas", highlightedTitle: "Setan Alas" },
//   { id: 6, src: "/assets/darah_nyai.png", title: "Darah Nyai", highlightedTitle: "Darah Nyai"},
// ];

export default function PortofolioSection() {
  const [posters, setPosters] = useState<OurWorkVFX[]>([]);
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await OurWorkVFXApi.getOurWork();
          setPosters(data);
        } catch (err) {
          console.error("Failed to fetch works:", err);
        }
      };
      fetchData();
    }, []);

  if (posters.length === 0) {
    return (
      <div className="flex flex-col py-section px-container items-center">
        <div className="headline-1 vfx-text-title mb-20">OUR WORKS</div>
        <div className="text-2xl text-white/50 animate-pulse">Loading projects...</div>
      </div>
    );
  }

  // Urutan tampilan: kiri → aktif → kanan 1 → kanan 2 (setengah keluar)
  const getOrderedPosters = () => {
    const len = posters.length;
    const ordered = [];

    // Kiri
    ordered.push(posters[(activeIndex - 1 + len) % len]);
    // Tengah (aktif)
    ordered.push(posters[activeIndex]);
    // Kanan 1
    ordered.push(posters[(activeIndex + 1 + len) % len]);
    // Kanan 2 (setengah keluar)
    ordered.push(posters[(activeIndex + 2 + len) % len]);

    return ordered;
  };

  const ordered = getOrderedPosters();

  return (
    <div className="flex flex-col py-section px-container items-start gap-m self-stretch">
      {/* Header */}
      <div className="flex justify-between items-end self-stretch">
        <div className="headline-1 vfx-text-title">OUR WORKS</div>
        <Link href="/vfx/ourwork" className="flex items-center gap-4 cursor-pointer">
          <span className="button-main text-center vfx-text-title">SEE ALL</span>
          <span className="see-all vfx-text-title">&gt;</span>
        </Link>
      </div>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center justify-start h-[620px] md:h-[720px] lg:h-[780px] gap-8 md:gap-12 lg:gap-16">
          {/* Poster Kiri */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex - 1 + posters.length) % posters.length)}>
              <Image src={ordered[0].image} alt={ordered[0].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[0].title}</div>
          </div>

          {/* Poster AKTIF (Tengah) */}
          <div className="flex flex-col items-center gap-6 flex-shrink-0 z-10">
            <div className={styles.highlightedPoster} onClick={() => handleClick(activeIndex)}>
              <Image src={ordered[1].image} alt={ordered[1].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="headline-3 text-white text-center">
              {ordered[1].title}
            </div>
          </div>

          {/* Poster Kanan 1 */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex + 1 + posters.length) % posters.length)}>
              <Image src={ordered[2].image} alt={ordered[2].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[2].title}</div>
          </div>

          {/* Poster Paling Kanan (setengah keluar) */}
          <div className="flex flex-col items-start gap-4 flex-shrink-0">
            <div className={styles.posterWrapper} onClick={() => handleClick((activeIndex + 2 + posters.length) % posters.length)}>
              <Image src={ordered[3].image} alt={ordered[3].title} fill className="object-cover cursor-pointer" />
            </div>
            <div className="vfx-text-title sub-heading-light">{ordered[3].title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
