"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'
import styles from "./Poster.module.css";
import { VFXApi } from "@/lib/api";
import { VFX } from "@/types/api/types";
import Link from "next/link";

export default function ShowcaseSection() {
    const [VFX, setVFX] = useState<VFX[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const data = await VFXApi.getAll({ limit: 3 });
            setVFX(data);
            } catch (err) {
            console.error("Failed to fetch works:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col py-section px-container items-start gap-xl self-stretch">
            <div className="flex flex-col px-4xl items-center gap-6 self-stretch">
                <div className="headline-1 text-center vfx-text-title self-stretch">Turning Footage Into Reality</div>
                <div className="sub-heading-reg text-center vfx-text-subtitle-1 self-stretch">Discover the journey from raw shots to stunning visuals where imagination meets technical mastery, and every frame is transformed into an experience that transcends reality.</div>
            </div>
            <div className="flex flex-col  items-start self-stretch">
                <div className="flex flex-col py-3xl items-start gap-2xl self-stretch">
                    {VFX.map((item, idx) => (                        
                        <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-l self-stretch">
                            {idx % 2 === 1 ? (
                                <>
                                <div className="flex flex-col justify-center items-start lg:gap-4xl gap-l flex-1">
                                    <div className="flex flex-col items-start gap-s self-stretch">
                                        <span className="headline-2 vfx-text-title self-stretch">{item.title}</span>
                                        <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch line-clamp-4">{item.description}</span>
                                    </div>
                                    <div onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")} className="flex items-center gap-5 cursor-pointer">
                                        <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                        <span className="watch-here vfx-text-title">-&gt;</span>
                                    </div>
                                </div>
                                <div className={`${styles.pictPorto} flex flex-1`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                </>
                            ) : (
                                <>
                                <div className={`${styles.pictPorto} flex flex-1`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start lg:gap-4xl gap-l flex-1">
                                    <div className="flex flex-col items-start gap-s self-stretch">
                                        <span className="headline-2 vfx-text-title self-stretch">{item.title}</span>
                                        <span className="sub-heading-reg vfx-text-subtitle-1 self-stretch line-clamp-4">{item.description}</span>
                                    </div>
                                    <div onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")} className="flex items-center gap-5 cursor-pointer">
                                        <span className="button-secondary vfx-text-title">WATCH HERE</span>
                                        <span className="watch-here vfx-text-title">-&gt;</span>
                                    </div>
                                </div>
                                </>
                            )}
                        </div>
                    ))}                    
                </div>
                <Link href="/showcase" className="flex justify-center items-center gap-m self-stretch cursor-pointer">
                    <span className="button-main text-center vfx-text-title">SEE ALL</span>
                    <span className="see-all vfx-text-title">&gt;</span>
                </Link>
            </div>
        </div>
    )
}