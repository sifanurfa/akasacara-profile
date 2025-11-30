import React from 'react'
import styles from "./Poster.module.css";
import PosterSlider from '@/components/vfx/home/PosterSlider';
import AboutUsSection from './VFXAboutUs';
import ShowcaseSection from './VFXShowcaseSection';
import PortofolioSection from './PortofolioSection';

function VFXHome() {
  return (
    <div className='flex flex-col items-start bg-vfx'>
        <div className={`flex flex-col py-3xl px-4xl items-start gap-2.5 self-stretch aspect-video`}>
            <video 
            src="/assets/video_vfx.mp4" 
            autoPlay 
            loop 
            muted
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className={styles.overlay}></div>
            <div className="absolute top-6 left-6 z-10">
                <img 
                    src="/assets/VFXlogo.png" 
                    alt="VFX Logo" 
                    className="w-64 h-15"
                />
            </div>
        </div>

        {/* hero */}
        <div className="flex flex-col py-section px-container items-end gap-md self-stretch">
            <div className="flex flex-col px-4xl items-start gap-6 self-stretch">
                <div className="headline-1 text-center vfx-text-title self-stretch">Where Tech Powers Art</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Behind the haunting visuals of Darah Nyai, Gowok, and Setan Alas, we shape mystical worlds, breathe life into legends, and craft fear that resonates across the screen.</div>
            </div>
        </div>

        <PortofolioSection/>
        <PosterSlider/>

        <ShowcaseSection/>
        <AboutUsSection/>
    </div>
  )
}

export default VFXHome