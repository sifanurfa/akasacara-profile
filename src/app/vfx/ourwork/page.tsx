"use client";

import React from 'react';
// import PosterShowcase from '@/components/vfx/ourwork/PosterShowcase'
import ProjectList from '@/components/vfx/ourwork/ProjectList';
import Footer from '@/components/Footer';
import Showcase from '@/components/vfx/ourwork/Showcase';
import Navbar from "@/components/Navbar";


const OurWork = () => {

    return (
        <div className="bg-vfx">
            {/* Navbar */}
            <Navbar/>

             {/* JUDUL */}
            <div className="py-section px-container">
                <div className="inline-flex flex-col justify-center text-center gap-md">
                    <h3 className="vfx-text-title sub-heading-reg">OUR WORKS</h3>
                    <h1 className="vfx-text-title title px-section">Showcasing Excellence in Post & VFX</h1>
                </div>
            </div>
            {/* BREAKDOWN */}
            <div className="flex flex-col items-start self-stretch py-section gap-3xl">
                <div className="flex px-container justify-center items-start self-stretch gap-[397px]">
                    <div className="flex justify-between items-center flex-1">
                        <div className="gap-s text-center">
                            <h3 className="vfx-text-subtitle-1 sub-heading-light">Title</h3>
                            <h3 className="vfx-text-title sub-heading-light">Darah Nyai</h3>
                        </div>
                        <div className="gap-s text-center">
                            <h3 className="vfx-text-subtitle-1 sub-heading-light">Project Type</h3>
                            <h3 className="vfx-text-title sub-heading-light">Film </h3>
                        </div>
                        <div className="gap-s text-center">
                            <h3 className="vfx-text-subtitle-1 sub-heading-light">Efect Categories</h3>
                            <h3 className="vfx-text-title sub-heading-light">CGI Integration</h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[810px] overflow-hidden">
                   <video 
                        src="/assets/video_vfx.mp4" 
                        autoPlay 
                        loop 
                        muted
                        playsInline 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
            {/*SUBTITLE */}
            <div className="flex flex-col py-section px-container">
                <div className="inline-flex flex-col justify-center">
                    <h1 className="vfx-text-title headline-2">We&apos;ve helped shape visual <br/>
                    storytelling by crafting <br/>
                    groundbreaking VFX experiences.</h1>
                </div>
            </div>
            {/* POSTER SHOWCASE */}
            <div className="flex flex-col pb-10">
                {/* <PosterShowcase/> */}
                <Showcase/>
            </div>
            {/* JUDUL */}
            <div className="flex py-section justify-center items-center self-stretch gap-2.5">
                <h1 className="vfx-text-title text-center headline-1 uppercase">ALL PROJECT</h1>
            </div>   

            {/* PROJECT LIST */}
            <ProjectList/>

            {/* FOOTER */}
            <Footer/>
        </div>
    );
};

export default OurWork;