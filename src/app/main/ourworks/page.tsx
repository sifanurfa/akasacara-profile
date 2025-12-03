"use client";

import VideoProjectSection from "./VideoProjectSection";
import FilmProjectSection from "./FilmProjectSection";
import AllProjectSection from "./AllProjectSection";
import AwardedSection from "./AwardedSection";

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-white pb-20 font-sans">
            {/* Awarded Films */}
            <AwardedSection/>

            {/* Film Projects */}
            <FilmProjectSection/>

            {/* Video / Ads Projects */}
            <VideoProjectSection/>
            
            {/* ALL PROJECTS */}
            <AllProjectSection/>
        </main >
    );
}
