"use client";

import React, { useEffect, useState } from "react";
import styles from "./Poster.module.css";
import AboutUsSection from './VFXAboutUs';
import ShowcaseSection from './VFXShowcaseSection';
import PortofolioSection from './PortofolioSection';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import { ShowreelVFXApi } from "@/lib/api";

function VFXHome() {
    const [showreel, setShowreel] = useState<string | null>(null);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const video = await ShowreelVFXApi.getVideo();
            setShowreel(video);
            console.log("Showreel URL:", video);
        } catch (err) {
            console.error("Failed to fetch works:", err);
        }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar/>
            <div className='flex flex-col items-start bg-vfx'>
                {showreel &&  (
                    <div className={`flex flex-col py-3xl px-4xl items-start gap-2.5 self-stretch aspect-video`}>
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
                        <div className={styles.overlay}></div>
                        <div className="absolute top-6 left-6 z-10">
                            <img 
                                src="/assets/VFXlogo.png" 
                                alt="VFX Logo" 
                                className="w-64 h-15"
                            />
                        </div>
                    </div>                
                )}

                {/* hero */}
                <div className="flex flex-col py-section px-container items-end gap-md self-stretch">
                    <div className="flex flex-col px-4xl items-start gap-6 self-stretch">
                        <div className="headline-1 text-center vfx-text-title self-stretch">Where Tech Powers Art</div>
                        <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Behind the haunting visuals of Darah Nyai, Gowok, and Setan Alas, we shape mystical worlds, breathe life into legends, and craft fear that resonates across the screen.</div>
                    </div>
                </div>

                <PortofolioSection/>

                <ShowcaseSection/>
                <AboutUsSection/>
            </div>
            <Footer/>
        </>
    )
}

export default VFXHome