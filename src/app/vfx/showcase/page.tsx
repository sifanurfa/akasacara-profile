"use client";

import React from 'react'
import styles from "./Showcase.module.css";
import ContentCard from '@/components/vfx/showcase/ContentCard';
import LatestBreakdown from './LatestBreakdownSection';
import Breakdown from '@/components/vfx/showcase/Breakdown';

const announcements = [
  {
    id: 1,
    title: "Gowok",
    content: "Contributed to the visual effects for Gowok",
    image: "/assets/gowok.png",
  },
  {
    id: 2,
    title: "Serigala Langit",
    content: "Contributed to the visual effects for the action feature film Serigala Langit, focusing on realistic aerial and military sequences.",
    image: "/assets/serigala_langit.png",
  },
  {
    id: 3,
    title: "Darah Nyai",
    content: "Film Darah Nyai Sebuah pembunuhan memicu amarah Laut Selatan. Nyai muncul dan memilih Rara untuk menjadi alat pembalasan dendam.",
    image: "/assets/darah_nyai.png",
  },
  {
    id: 4,
    title: "Berproses Meraih Sukses",
    content: "Iklan pendek untuk program MSIB Merdeka Belajar dari Kemendikbud RI.",
    image: "/assets/berproses_meraih_sukses.png",
  },
  {
    id: 5,
    title: "Tour Tedi",
    content: "Aplikasi Tour TEDI ini merupakan aplikasi berbasis Virtual Reality yang penggunanya dapat berjalan-jalan di kawasan Kampus Universitas Gadjah Mada khususnya di Departemen TEDI (Teknik Elektro Dan Informatika",
    image: "/assets/tour_TEDI.png",
  },
  {
    id: 6,
    title: "KLHK",
    content: "Sebuah video animasi 2D yang menjelaskan tentang SIMONTANA. Sistem Monitoring Hutan Nasional (SIMONTANA) merupakan sistem yang sudah berlangsung cukup lama sejak tahun 1990.",
    image: "/assets/KLHK.png",
  },
];

function VFXShowcase() {
  return (
    <div className="flex flex-col items-center gap-[26px] bg-vfx">
        <div className="flex py-section px-container justify-center items-center self-stretch">
            <div className={`flex-1 vfx-text-title text-center ${styles.tagline}`}>How is <span className={styles.cinematic}>cinematic illusion</span> crafted through <span className={styles.cinematic}>light and layers</span> ?</div>
        </div>

        {/* slider */}
        <div className="flex pb-section justify-center items-center gap-4xl self-stretch overflow-hidden">
            <LatestBreakdown/>
        </div>

        <div className="flex px-container pt-section justify-between items-center self-stretch">
            <div className="headline-1 vfx-text-title">Breakdown Series</div>
        </div>

        {/* interactice breakdown */}
        <Breakdown/>

        {/* list content */}
        <div className="flex py-section px-container flex-col items-start gap-2xl self-stretch">
            <div className="grid grid-cols-2 gap-2xl items-start self-stretch">
                {announcements.map((item) => (
                    <ContentCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default VFXShowcase