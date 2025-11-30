import React from 'react'
import Image from 'next/image'
import styles from "./Poster.module.css";

export default function ShowcaseSection() {
    return (
        <div className="flex flex-col py-section px-container items-start gap-xl self-stretch">
            <div className="flex flex-col px-4xl items-center gap-6 self-stretch">
                <div className="headline-1 text-center vfx-text-title self-stretch">Turning Footage Into Reality</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Discover the journey from raw shots to stunning visuals where imagination meets technical mastery, and every frame is transformed into an experience that transcends reality.</div>
            </div>
            <div className="flex flex-col  items-start self-stretch">
                <div className="flex flex-col py-3xl items-start gap-2xl self-stretch">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-l self-stretch">
                         <div className={`${styles.pictPorto} flex flex-1`}>
                            <Image
                                src="/assets/darah_nyai_2.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start lg:gap-4xl gap-l flex-1">
                            <div className="flex flex-col items-start gap-s self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Darah Nyai</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Darah Nyai</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                <span className="watch-here vfx-text-title">-&gt;</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-l self-stretch">
                        <div className="flex flex-col justify-center items-start lg:gap-4xl gap-l flex-1 order-2 lg:order-1">
                            <div className="flex flex-col items-start gap-s self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Gowok</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Gowok</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                <span className="watch-here vfx-text-title">-&gt;</span>
                            </div>
                        </div>
                        <div className={`${styles.pictPorto} flex flex-1 order-1 lg:order-2`}>
                            <Image
                                src="/assets/gowok2.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-l self-stretch">
                        <div className={`${styles.pictPorto} flex flex-1`}>
                            <Image
                                src="/assets/serigala_langit.png"
                                alt="Portfolio Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start lg:gap-4xl gap-l flex-1">
                            <div className="flex flex-col items-start gap-s self-stretch">
                                <span className="headline-2 vfx-text-title self-stretch">Serigala Langit</span>
                                <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch">Dive behind the scenes of Serigala Langit</span>
                            </div>
                            <div className="flex items-center gap-5">
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
    )
}