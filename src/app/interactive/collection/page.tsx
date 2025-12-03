"use client";

import React, { useEffect, useState } from "react";
import OurWorkCard from "@/components/interactive/collection/OurWorkCard";
import styles from "./Collection.module.css";
import PopularGame from "@/components/interactive/collection/PopularGame";
import { InteractiveGameApi } from "@/lib/api";
import { InteractiveGame } from "@/types/api/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlatformGame from "@/components/interactive/PlatformGame";

function InteractiveCollection() {
  const [works, setWorks] = useState<InteractiveGame[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InteractiveGameApi.getGames();
        setWorks(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-interactive">
      {/* Navbar */}
      <Navbar/>

      {/* popular game */}
      <PopularGame />

      {/* title */}
      <div className="flex flex-col pt-section px-container items-start self-stretch">
        <div className="flex flex-col items-center gap-l self-stretch">
          <div className="title vfx-text-title text-center self-stretch">
            Discover Our Works
          </div>
          <div className="sub-heading-reg vfx-text-title text-center self-stretch">
            Step into immersive worlds filled with adventure, creativity, and
            stories that come to life through our works.
          </div>
        </div>
      </div>

      {/* portofolio list */}
      <div className="flex flex-col py-section px-container items-center gap-2xl self-stretch">
        {works.map((item) => (
          <OurWorkCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      {/* garis */}
      <div className="flex justify-center items-center self-stretch">
        <div className="h-0.5 bg-white flex-2"></div>
        <div className="flex-1"></div>
        <div className="h-0.5 bg-white flex-10"></div>
      </div>

      {/* platform */}
      <div className="flex flex-col py-section px-container items-center gap-3xl self-stretch">
        <div className="flex flex-col items-center gap-m self-stretch">
          <div className="headline-1 text-center vfx-text-title self-stretch">
            Available On
          </div>
        </div>
        <PlatformGame/>
      </div>
      <Footer/>
    </div>
  );
}

export default InteractiveCollection;
