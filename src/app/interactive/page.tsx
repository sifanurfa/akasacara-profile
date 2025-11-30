"use client";

import React from "react";
import InteractiveDevlog from "@/components/interactive/homepage/DevlogSlider";
import PortofolioList from "./PortofolioList";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div className="relative bg-interactive overflow-hidden">
      {/* SHOWREEL */}
      <section className="showreel relative w-screen h-screen overflow-hidden">
        <img
          src="/assets/InteractiveShowrell.png"
          alt="Showreel Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-6 left-6 z-10">
          <img
            src="/assets/LogoInteractive.png"
            alt="Akasacara Film Logo"
            className="w-64 h-15"
          />
        </div>
      </section>

      {/* PORTOFOLIO LIST */}
      <div className="w-full px-24 py-24 inline-flex flex-col justify-center items-center gap-16">
        <div className="self-stretch px-24 inline-flex flex-col justify-start items-center gap-4">
          <div className="self-stretch inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-6xl font-bold font-['Playfair_Display'] leading-[72px]">
              Discover Our Works
            </div>
          </div>
          <div className="self-stretch text-center justify-start text-stone-300 text-3xl font-normal font-['Poppins'] leading-9">
            Step into immersive worlds filled with adventure, creativity, and
            stories that come to life through our works.
          </div>
          <div className="w-full max-w-7xl mx-auto">
            <PortofolioList />
          </div>
        </div>
      </div>

      {/* LATEST DEVLOG */}
      <div className="max-w-[1440px] w-full mx-auto py-24 flex flex-col justify-center items-center gap-14 overflow-visible">
        {/* TITLE + SEE ALL */}
        <div className="max-w-[1231px] w-full flex justify-between items-end">
          <div className="text-white text-6xl font-bold font-['Playfair_Display'] leading-[72px]">
            LATEST DEVLOG
          </div>

          <div className="px-4 py-2 outline outline-[3px] outline-offset-[-3px] outline-white flex justify-center items-center cursor-pointer">
            <div className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
              See All
            </div>
          </div>
        </div>
        <InteractiveDevlog />
      </div>

      {/* PLATFORM */}
      <div className="px-section flex flex-col justify-start items-center gap-3xl">
        <div className="self-stretch flex flex-col justify-start items-center gap-m">
          <div className="self-stretch text-center justify-start vfx-text-title headline-1">
            WHERE OUR STUFFS AT
          </div>
          <div className="self-stretch text-center justify-start vfx-text-subtitle-1 sub-heading-reg">
            We bring our games to players everywhere, on every platform
          </div>
        </div>
        <div className="self-stretch px-section inline-flex justify-between items-center">
          <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5">
            <img
              src="/assets/Itch.io.png"
              alt="Itch.io"
              className="w-24 object-contain"
            />
            <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">
              Itch.io
            </div>
          </div>
          <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5">
            <img
              src="/assets/Steam.png"
              alt="Itch.io"
              className="w-24 object-contain"
            />
            <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">
              Steam
            </div>
          </div>
          <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5">
            <img
              src="/assets/PlayStore.png"
              alt="Itch.io"
              className="w-24 object-contain"
            />
            <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">
              Play Store
            </div>
          </div>
        </div>
      </div>

      {/* ABOUTE US */}
      <div className="py-section px-container flex justify-center items-center gap-xl">
        <div className="flex-1 flex justify-start items-center gap-xl">
          <div className="flex-1 justify-start vfx-text-title headline-1">
            ABOUT US!
          </div>
          <div className="flex-1 justify-start vfx-text-subtitle-1 sub-heading-reg">
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
