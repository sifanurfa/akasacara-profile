"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AllProjectSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const allProjects: {
        title: string;
        year?: string;
        image: string;
    }[] = [
            { title: "Gowok", year: "2020", image: "/assets/checker.png" },
            { title: "Darah Nyai", year: "2020", image: "/assets/darah_nyai.png" },
            {
                title: "Serigala Langit",
                year: "2020",
                image: "/assets/serigala_langit.png",
            },
            {
                title: "Berproses Menuju Sukses",
                year: "2020",
                image: "/assets/checker.png",
            },
            { title: "KLHK", year: "2020", image: "/assets/checker.png" },
            { title: "Tour Tedi", year: "2020", image: "/assets/checker.png" },
            { title: "Tengkorak", year: "2020", image: "/assets/tengkorak.png" },
        ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
            <div className="p-4 sm:p-6 space-y-12 sm:space-y-4">
                <div className="relative mb-8">
                    <h3 className="text-[#F4BB26] mb-12 sm:mb-16 text-center text-3xl sm:text-5xl font-semibold">
                        All Projects
                    </h3>

                    {/* Poster kanan yang berubah sesuai hover */}
                    <div className="hidden lg:block absolute top-24 right-20 w-[16rem]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={hoveredProject !== null ? hoveredProject : activeIndex}
                                src={
                                    hoveredProject !== null
                                        ? allProjects[hoveredProject].image
                                        : allProjects[activeIndex || 0].image
                                }
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                alt="project preview"
                                className="w-full h-[18rem] object-cover rounded"
                            />
                        </AnimatePresence>
                    </div>

                    {/* List Titles */}
                    <div className="flex flex-col items-center justify-center mt-12 sm:mt-20">
                        <ul className="space-y-6 sm:space-y-8 text-center">
                            {allProjects.map((p, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <li
                                        key={p.title + idx}
                                        onClick={() => setActiveIndex(idx)}
                                        onMouseEnter={() => setHoveredProject(idx)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                        className={`flex items-center justify-center cursor-pointer transition duration-300 ease-in-out ${isActive
                                            ? "text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                            : "text-[#FFFFFF]/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                            }`}
                                    >
                                        <span className="headline-2 text-lg sm:text-2xl lg:text-3xl">
                                            {p.title}
                                        </span>
                                        <span
                                            className={`body-reg ml-2 text-sm sm:text-base transition ${isActive ? "text-[#FFFFFF]/80" : "text-[#FFFFFF]/60"
                                                }`}
                                        >
                                            {p.year}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
