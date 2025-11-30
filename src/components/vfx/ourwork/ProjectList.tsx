"use client";
import { useState } from "react";

const projects = [
  { title: "Gowok", year: 2020, img: "https://placehold.co/377x565" },
  { title: "Darah Nyai", year: 2020, img: "https://placehold.co/377x565" },
  { title: "Berproses Meraih Sukses ", year: 2020, img: "https://placehold.co/377x565" },
  { title: "Serigala Langit", year: 2020, img: "https://placehold.co/377x565" },
  { title: "KLHK", year: 2020, img: "https://placehold.co/377x565" },
  { title: "Tour DTEDI", year: 2020, img: "https://placehold.co/377x565" },
  { title: "Tengkorak", year: 2020, img: "https://placehold.co/377x565" },
];

export default function PortofolioList() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative flex flex-row py-section px-container justify-between items-start gap-xl bg-vfx">
      {/* Bagian kiri: daftar project */}
      <div className="flex flex-col gap-xl">
        {projects.map((p, index) => (
          <div
            key={index}
            className="group flex justify-start items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-center items-start ">
              <div className="flex flex-col items-start gap-2.5 vfx-text-subtitle-2 headline-2 group-hover:text-white! transition-colors duration-300 ">
                {p.title}
              </div>
            </div>
            <div className="flex vfx-text-subtitle-2 sub-heading-reg  group-hover:text-white! transition-colors duration-300">
              {p.year}
            </div>
          </div>
        ))}
      </div>

      {/* Bagian kanan: preview gambar */}
      <div className="w-[412px] h-[618px] flex justify-center items-center">
        {hovered !== null && (
          <img
            src={projects[hovered].img}
            alt={projects[hovered].title}
            className="rounded-xl shadow-lg transition-all duration-500 opacity-100 scale-100"
          />
        )}
      </div>
    </div>
  );
};
