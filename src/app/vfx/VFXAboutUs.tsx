import React from 'react'
import Image from 'next/image'
import styles from "./Poster.module.css";

export default function AboutUsSection() {
    return (
        <div className="flex flex-col py-section px-container justify-center items-center gap-3xl self-stretch">
            <div className="flex flex-col items-center self-stretch">
                <div className="headline-1 text-center vfx-text-title">ABOUT  US!</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Conception, Direction, Motion design, Development</div>
            </div>
            <div className="flex flex-col px-l justify-center items-center self-stretch">
                <div className="justify-center items-center gap-l grid grid-cols-1 lg:grid-cols-2 self-stretch">
                    <div className={`${styles.about} flex-1`}>
                        <Image
                            src="/assets/vfx/about1.png"
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
                <div className="justify-center items-center gap-l grid grid-cols-1 lg:grid-cols-2 self-stretch pt-l lg:pt-0">
                    <div className="flex flex-col flex-1 sub-heading-reg vfx-text-title gap-l order-2 lg:order-1">
                        <p>From narrative and documentary films to commercials, trailers, games, and immersive digital content, LodhongKrupuk VFX combines imagination with technical expertise to transform raw ideas into captivating visuals.</p>
                        <p>As a creative extension of Akasacara Film, we bring together artistry and innovation—building visual experiences that not only support the story, but also leave a lasting impression on audiences worldwide.</p>
                    </div>
                    <div className={`${styles.about} flex-1 order-1 lg:order-2`}>
                        <Image
                            src="/assets/vfx/about2.png"
                            alt="Portfolio Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}