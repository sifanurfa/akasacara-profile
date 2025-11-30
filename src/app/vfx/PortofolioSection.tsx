import React from 'react'
import Image from 'next/image'
import styles from "./Poster.module.css";

export default function PortofolioSection() {
    return (
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
    )
}