"use client";

import React, { useEffect, useState } from "react";
import ServiceCard from '@/components/film/home/ServiceCard';
import PressCard from '@/components/film/home/PressCard';
import WorkCard from '@/components/film/home/WorkCard';
import Image from 'next/image';
import Link from 'next/link';
import { AnnouncementFilmApi } from "@/lib/api";
import { FilmApi } from "@/lib/api";
import { ShowreelFilmApi } from "@/lib/api";
import { AnnouncementFilm } from "@/types/api/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Film } from "@/types/api/types";

const services = [
  {
    category: "Film",
    caption: "Creating movies, encompasing various stages such as",
    image: "/assets/tengkorak.png",
    details: [
      "Scriptwriting",
      "Casting",
      "Directing",
      "Editing",
      "Visual Effect",
    ]
  },
  {
    category: "Animation",
    caption: "Bringing static images or object to life through movement.",
    image: "/assets/SerigalaLangitAfter.png",
    details: [
      "Scriptwriting",
      "Voice recording",
      "Storyboarding",
      "Illustration",
      "Animate",   
    ]
  },
  {
    category: "Games",
    caption: "Create interactive video game 2d or 3d.",
    image: "/assets/game.png",
    details: [
      "Scriptwriting",
      "Voice recording",
      "Storyboarding",
      "Illustration",
      "Animate",    
    ]
  },
];

function AkasacaraHome() {
  const [showreel, setShowreel] = useState<string | null>(null);
  const [press, setPress] = useState<AnnouncementFilm[]>([]);
  const [film, setFilm] = useState<Film[]>([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AnnouncementFilmApi.getHighlight({ limit:3, sort:"desc" });
        setPress(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const video = await ShowreelFilmApi.getVideo();
        setShowreel(video);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FilmApi.getAll({ limit:6 });
        setFilm(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
        <div className='flex flex-col items-start bg-akasacara'>
          {/* Navbar */}
          <Navbar/>

          {/* showreel */}
          {showreel && (
            <div className="relative flex flex-col pb-section items-start self-stretch aspect-video overflow-hidden">
              <div className="absolute top-6 left-6 z-10">
                <img
                  src="/assets/LogoAkasacara.png"
                  alt="Akasacara Film Logo"
                  className="w-64 h-15"
                />
              </div>
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
            </div>
          )}

          {/* services */}
          <div className="flex flex-col py-section px-container justify-center items-start gap-section self-stretch">
              <div className="flex flex-col items-start self-stretch">
                  <div className="sub-heading-reg vfx-text-title text-center self-stretch">WHAT WE DO !</div>
                  <div className="headline-1 text-center self-stretch text-akasacara-yellow">Crafting Visual Journeys</div>
              </div>

              <div className="flex flex-col items-start gap-l self-stretch">
                  {services.map((item, index) => (
                    <ServiceCard
                      key={item.category}
                      category={item.category}
                      image={item.image}
                      caption={item.caption}
                      details={item.details}
                      isLast={index === services.length - 1}
                    />
                  ))}                
              </div>
          </div>

          {/* announcement */}
          <div className="flex py-section px-container flex-col items-start gap-3xl self-stretch bg-akasacara-yellow">
            <div className="flex items-end justify-between self-stretch">
              <div className="headline-1 aka-text-title self-stretch">OUR <span className="italic">PRESS</span></div>
              <Link href="/main/announcement" className="flex justify-end items-center gap-m aka-text-title">
                <span className="button-main">SEE ALL</span>
                <span className="see-all">&gt;</span>
              </Link>            
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-start gap-6 self-stretch">
              {press.map((item) => (
                  <PressCard
                      key={item.id}
                      documentId={item.documentId}
                      title={item.title}
                      announceType={item.announceType}
                      urlMedia={item.urlMedia}
                      image={`${baseURL?.replace(
                        "/api",
                        ""
                      )}${item.media?.[0]?.url.replace("/api/", "/")}`}
                      date={item.date}
                  />
              ))}
            </div>
          </div>

          {/* portofolio list */}
          <div className="flex flex-col p-container justify-center items-start gap-section self-stretch">
            <div className="flex items-end justify-between self-stretch">
              <div className="headline-1 text-akasacara-yellow">OUR <span className="italic">WORKS</span></div>
              <div className="flex justify-end items-center gap-m text-akasacara-yellow">
                <span className="button-main">SEE ALL</span>
                <span className="see-all">&gt;</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-xl self-stretch">
              {film.map((item, index) => (
                <WorkCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  year={item.year}
                  image={item.landscapeImage}
                  description={item.description}
                  type={item.projectType}
                  isLast={index === film.length - 1}
                />
              ))}
            </div>
          </div>

          {/* about */}
          <div className="flex flex-col py-section px-container items-start self-stretch group hover:bg-akasacara-yellow transition-all duration-500">
            <div className="flex flex-col items-start gap-xl self-stretch">
              <div className="headline-1 text-akasacara-yellow self-stretch group-hover:text-black">ABOUT  US !</div>
              <div className="items-center self-stretch grid grid-cols-1 lg:grid-cols-2 gap-xl">
                <div className="flex-1 relative aspect-4/3 overflow-hidden">
                  <Image
                      src="/assets/film/about.png"
                      alt="Portfolio Image"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="about-caption flex flex-col flex-1 justify-center items-center gap-l sub-heading-reg vfx-text-subtitle-1 text-justify">
                  <p>Akasacara Film is a small independent multimedia company based in Yogyakarta, Indonesia. Akasacara Film has a role to provide creative innovation in multimedia.</p>
                  <p>Akasacara Film produced a film and distributed it to film festivals and cinemas. The creations which have been produced by Akasacara Film include narrative films, </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default AkasacaraHome