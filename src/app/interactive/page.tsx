"use client";

import React, { useEffect, useState } from "react";
import InteractiveDevlog from "@/components/interactive/homepage/DevlogSlider";
import PortofolioList from "./PortofolioList";
import Footer from "@/components/Footer";
import Link from "next/link";
import PlatformGame from "@/components/interactive/PlatformGame";
import { ShowreelInteractiveApi } from "@/lib/api";

const Home = () => {
  const [showreel, setShowreel] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const video = await ShowreelInteractiveApi.getVideo();
        setShowreel(video);
        console.log("Showreel URL:", video);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="relative bg-interactive overflow-hidden">
      {/* SHOWREEL */}
      {showreel && (
        <section className="showreel relative w-screen h-screen overflow-hidden">
          <video
            autoPlay
            loop
            // muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={showreel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-6 left-6 z-10">
            <img
              src="/assets/LogoInteractive.png"
              alt="Akasacara Film Logo"
              className="w-64 h-15"
            />
          </div>
        </section>
      )}

      {/* PORTOFOLIO LIST */}
      <div className="w-full px-container py-section flex flex-col justify-center items-center gap-3xl">
        <div className="self-stretch flex flex-col items-center gap-4">
          <div className="self-stretch flex justify-center items-center gap-m">
            <div className="text-center vfx-text-title headline-1">
              Discover Our Works
            </div>
          </div>
          <div className="self-stretch text-center sub-heading-reg vfx-text-subtitle-1">
            Step into immersive worlds filled with adventure, creativity, and
            stories that come to life through our works.
          </div>
        </div>
        <PortofolioList />
      </div>

      {/* LATEST DEVLOG */}
      <div className="py-section px-container flex flex-col justify-center items-center overflow-visible">
        {/* TITLE + SEE ALL */}
        <div className="flex justify-between items-end self-stretch">
          <div className="headline-1 vfx-text-title">
            LATEST DEVLOG
          </div>

          <div className="px-m py-s outline-[3px] outline-offset-[-3px] outline-white flex justify-center items-center cursor-pointer">
            <Link href="/devlog" className="button-main vfx-text-title">
              See All
            </Link>
          </div>
        </div>
      </div>
      <InteractiveDevlog />

      {/* PLATFORM */}
      <div className="py-section px-container flex flex-col items-center gap-3xl">
        <div className="self-stretch flex flex-col items-center gap-m">
          <div className="self-stretch text-center vfx-text-title headline-1">
            WHERE OUR STUFFS AT
          </div>
          <div className="self-stretch text-center vfx-text-subtitle-1 sub-heading-reg">
            We bring our games to players everywhere, on every platform
          </div>
        </div>
        <PlatformGame />
      </div>

      {/* ABOUTE US */}
      <div className="py-section px-container flex justify-center items-center">
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 items-center gap-xl ">
          <div className="flex-1 vfx-text-title headline-1">
            ABOUT US!
          </div>
          <div className="flex-1 vfx-text-subtitle-1 sub-heading-reg">
            LodhongKrupuk Interactive, a division of Akasacara Film, is
            dedicated to game development. We strive to push the boundaries of
            interactive storytelling by creating immersive 3D video games.
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
