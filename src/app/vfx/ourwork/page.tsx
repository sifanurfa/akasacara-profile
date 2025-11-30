"use client";

import React from 'react';
import PosterShowcase from '@/components/vfx/ourwork/PosterShowcase'
import ProjectList from '@/components/vfx/ourwork/ProjectList';


const OurWork = () => {

    return (
        <div className="bg-vfx">
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
                <div className="flex flex-col self-stretch ">
                    <img src="/assets/GanyangSetanAlas.jpg" alt="About Us Akasacara" className="w-full card-pictporto" />
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
                <PosterShowcase/>
            </div>
            {/* JUDUL */}
            <div className="flex py-section justify-center items-center self-stretch gap-2.5">
                <h1 className="vfx-text-title text-center headline-1 uppercase">ALL PROJECT</h1>
            </div>   
            {/* PROJECT LIST */}
            <div>
                <ProjectList/>
            </div>
        </div>
    );
};

export default OurWork;