import NewsSection from '@/components/NewsSection';
import HiglightSection from '@/components/HiglightSection';
import ShowreelSlider from '@/components/ShowrellSlider'; 
import React from 'react';
import Footer from '@/components/Footer';

const Announcement = () => {
    return (
        <div className="relative bg-vfx flex flex-col justify-start items-start gap-[23px] overflow-hidden">
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