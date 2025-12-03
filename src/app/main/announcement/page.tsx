import NewsSection from './NewsSection';
import HiglightSection from './HiglightSection';
import ShowreelSlider from './ShowrellSlider'; 
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Announcement = () => {
    return (
        <>
            <div className="relative bg-black flex flex-col justify-start items-start gap-[23px] overflow-hidden">
                {/* Navbar */}
                <Navbar/>

                {/* SHOWRELL */}
                <ShowreelSlider/>

                {/* HIGHTLIGHT */}
                <HiglightSection/>
                
                {/* NEWS */}
                <NewsSection/>
            </div>
            {/* FOOTER */}
            <Footer/>
        </>

    );
};

export default Announcement;