"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FilmApi } from "@/lib/api";
import { Film } from "@/types/api/types";

export default function AwardedSection() {
    const [awarded, setAwarded] = useState<Film[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await FilmApi.getAwarded();
            setAwarded(data);
          } catch (err) {
            console.error("Failed to fetch works:", err);
          }
        };
        fetchData();
    }, []);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Animation Transforms
    // Title: Starts top-left of container (approx 20% top to be above images), Ends centered vertically, left of images
    const titleTop = useTransform(scrollYProgress, [0, 1], ["calc(2% - 350px)", "47%"]);
    const titleLeft = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const titleX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    // const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]); // Removed vertical movement

    // Images: Start at edges (0% left, 0% right), End clustered to the right
    // Left Image: Starts 0% left. Ends ~35% left (pushing right).
    const img1Left = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    // Right Images: Starts 0% right. Ends ~5% right (pushing left slightly or staying).
    const imgRightPos = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);

    const item = awarded[0];
    // if (!item) {
    //     return null; // or a loading indicator
    // }

    return (
        <div className="flex flex-col py-section px-container">
            {/* --- SCROLL ANIMATION SECTION --- */}
            <div ref={containerRef} className="h-[210vh] relative">
                <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

                    {/* Container to match original max-w-7xl layout */}
                    <div className="w-full max-w-7xl mx-auto relative h-full">

                        {/* Title */}
                        <motion.h2
                            style={{
                                top: titleTop,
                                left: titleLeft,
                                x: titleX,
                                y: titleY,
                                scale: titleScale,
                                position: "absolute",
                            }}
                            className="text-akasacara-yellow headline-1 z-20 whitespace-nowrap mb-2xl"
                        >
                            Awarded Films
                        </motion.h2>

                        {/* Center Text (Fades Out) */}
                        <motion.div
                            style={{
                                top: "50%",
                                left: "50%",
                                x: "-50%",
                                y: "-50%",
                                opacity: textOpacity,
                                // translateY: textY, // Removed
                                position: "absolute",
                            }}
                            className="px-4xl text-center space-y-2 z-10"
                        >
                            {item && (
                                <>
                                    <h3 className="headline-2">{item.title}</h3>
                                    <p className="caption-reg vfx-text-title">
                                        {item.genreList?.filter(Boolean).join(" | ")}
                                    </p>
                                    <p className="body-reg text-start mt-xl">
                                        {item.description}
                                    </p>
                                </>
                            )}
                        </motion.div>

                        {/* Left Image */}
                        {item && (
                            <motion.div
                                style={{
                                top: "50%",
                                left: img1Left,
                                y: "-50%",
                                position: "absolute",
                                backgroundImage: `url(${item.potraitImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                }}
                                className="w-[28%] h-[400px]"
                            >
                            </motion.div>
                        )}

                        {/* Right Images */}
                        {item && (
                            <motion.div
                                style={{
                                    top: "50%",
                                    right: imgRightPos,
                                    y: "-50%",
                                    position: "absolute",
                                }}
                                className="w-[28%] h-[400px] flex flex-col justify-between"
                            >
                                <div 
                                    className="w-full h-[48%] bg-cover"
                                    style={{
                                        backgroundImage: `url(${item.landscapeImage})`,
                                    }}
                                ></div>
                                <div 
                                    className="w-full h-[48%] bg-cover"
                                    style={{
                                        backgroundImage: `url(${item.awardedImage})`,
                                    }}
                                ></div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}
