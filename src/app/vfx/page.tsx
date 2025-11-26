import React from 'react'
import Image from 'next/image'
import styles from "./Poster.module.css";
import PosterSlider from '@/components/vfx/home/PosterSlider';
import Footer from '@/components/Footer';

function VFXHome() {
  return (
    <div className='flex flex-col items-start bg-vfx'>
        <div className={`flex flex-col py-3xl px-4xl items-start gap-[10px] self-stretch aspect-[16/9]`}>
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
            <div className="flex flex-col px-4xl items-start gap-[24px] self-stretch">
                <div className="headline-1 text-center vfx-text-title self-stretch">Where Tech Powers Art</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Behind the haunting visuals of Darah Nyai, Gowok, and Setan Alas, we shape mystical worlds, breathe life into legends, and craft fear that resonates across the screen.</div>
            </div>
        </div>

        {/* portfolio list */}
        <div className="flex flex-col py-section px-container items-start gap-3xl self-stretch">
            <div className="flex justify-between items-end self-stretch">
                <div className="headline-1 vfx-text-title">OUR  WORKS</div>
                <div className="flex justify-center items-end gap-m">
                    <span className="button-main text-center vfx-text-title">SEE ALL</span>
                    <span className="see-all vfx-text-title">&gt;</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-xl">
                <div className="flex flex-col items-start gap-l">
                    <div className={styles.highlightedPoster}>
                        <Image
                            src="/assets/gowok.png"
                            alt="Gowok 2025"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="headline-3 text-white">Gowok 2025</span>
                </div>
                <div className="flex flex-col items-start gap-md">
                    <div className={styles.posterWrapper}>
                        <Image
                            src="/assets/darah_nyai.png"
                            alt="Darah Nyai"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="self-stretch vfx-text-title sub-heading-light">Darah Nyai</div>
                </div>
            </div>
        </div>
        {/* <PosterSlider/> */}

        {/* showcase VFX */}
        <div className="flex flex-col py-section px-container items-start gap-xl self-stretch">
            <div className="flex flex-col px-4xl items-center gap-[24px] self-stretch">
                <div className="headline-1 text-center vfx-text-title self-stretch">Turning Footage Into Reality</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Discover the journey from raw shots to stunning visuals where imagination meets technical mastery, and every frame is transformed into an experience that transcends reality.</div>
            </div>
            <div className="flex flex-col  items-start self-stretch">
                <div className="flex flex-col py-3xl items-start gap-2xl self-stretch">
                    <div className="flex items-center gap-l self-stretch">
                         <div className={`${styles.pictPorto} flex flex-1`}>
                            <Image
                                src="/assets/darah_nyai_2.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4xl flex-1">
                            <div className="flex flex-col items-start gap-m self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Darah Nyai</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Darah Nyai</span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                <span className="watch-here vfx-text-title">-&gt;</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-l self-stretch">
                        <div className="flex flex-col justify-center items-start gap-4xl flex-1">
                            <div className="flex flex-col items-start gap-m self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Gowok</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Gowok</span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                <span className="watch-here vfx-text-title">-&gt;</span>
                            </div>
                        </div>
                         <div className={`${styles.pictPorto} flex flex-1`}>
                            <Image
                                src="/assets/gowok2.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-l self-stretch">
                        <div className={`${styles.pictPorto} flex flex-1`}>
                            <Image
                                src="/assets/serigala_langit.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4xl flex-1">
                            <div className="flex flex-col items-start gap-m self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Serigala Langit</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Serigala Langit</span>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                <span className="watch-here vfx-text-title">-&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-m self-stretch">
                    <span className="button-main text-center vfx-text-title">SEE ALL</span>
                    <span className="see-all vfx-text-title">&gt;</span>
                </div>
            </div>
        </div>

        {/* about */}
        <div className="flex flex-col py-section px-container justify-center items-center gap-3xl self-stretch">
            <div className="flex flex-col items-center self-stretch">
                <div className="headline-1 text-center vfx-text-title">ABOUT  US!</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Conception, Direction, Motion design, Development</div>
            </div>
            <div className="flex flex-col px-l justify-center items-center self-stretch">
                <div className="flex justify-center items-center gap-l self-stretch">
                    <div className={`${styles.about} flex-1`}>
                        <Image
                            src="/assets/about.jpg"
                            alt="Portfolio Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col flex-1 sub-heading-reg vfx-text-title gap-l">
                        <p>LodhongKrupuk VFX is the visual effects division of Akasacara Film, an independent multimedia company based in Yogyakarta, Indonesia. As part of Akasacara’s creative journey,</p>
                        <p>LodhongKrupuk VFX focuses on crafting high-quality VFX to enhance storytelling across film, advertising, animation, and digital media.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-l self-stretch">
                    <div className="flex flex-col flex-1 sub-heading-reg vfx-text-title gap-l">
                        <p>LodhongKrupuk VFX is the visual effects division of Akasacara Film, an independent multimedia company based in Yogyakarta, Indonesia. As part of Akasacara’s creative journey,</p>
                        <p>LodhongKrupuk VFX focuses on crafting high-quality VFX to enhance storytelling across film, advertising, animation, and digital media.</p>
                    </div>
                    <div className={`${styles.about} flex-1`}>
                        <Image
                            src="/assets/about.jpg"
                            alt="Portfolio Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default VFXHome