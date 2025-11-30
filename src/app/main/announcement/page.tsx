import NewsSection from './NewsSection';
import HiglightSection from './HiglightSection';
import ShowreelSlider from './ShowrellSlider'; 
import React from 'react';
import Footer from '@/components/Footer';

const Announcement = () => {
    return (
        <div className="relative bg-black flex flex-col justify-start items-start gap-[23px] overflow-hidden">
            {/* SHOWRELL */}
            <ShowreelSlider/>

            {/* HIGHTLIGHT */}
            <HiglightSection/>
            
            {/* NEWS */}
            <NewsSection/>

            {/* FOOTER */}
            <Footer/>
        </div>

    );
};

export default Announcement;