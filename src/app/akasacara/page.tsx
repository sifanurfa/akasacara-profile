'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

// Custom Cursor Component
const CustomCursor = ({ isHovering, isHidden }: { isHovering: boolean; isHidden: boolean }) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smoother physics configuration
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 48); // Center the 96px cursor (48px offset)
            cursorY.set(e.clientY - 48);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-9999 mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHidden ? 0 : (isHovering ? 1.5 : 1),
                opacity: isHidden ? 0 : 1
            }}
            transition={{
                scale: { duration: 0.2, ease: "easeInOut" },
                opacity: { duration: 0.2 }
            }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Text Layer */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    <Image
                        src="/assets/cursor-text.svg"
                        alt="Cursor Text"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {/* Static Eye Layer */}
                <div className="absolute w-8 h-8">
                    <Image
                        src="/assets/cursor-eye.svg"
                        alt="Cursor Eye"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default function AkasacaraPage() {
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const [showImages, setShowImages] = useState(false);
    const [visibleImages, setVisibleImages] = useState<number[]>([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isNavHovering, setIsNavHovering] = useState(false);
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);

    // Automatic logo animation - stops after 3.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsLogoVisible(prev => !prev);
        }, 1750); // Toggle every 1.75 seconds

        // After 3.5 seconds, stop logo animation and show images
        const timeout = setTimeout(() => {
            clearInterval(interval);
            setIsLogoVisible(false);
            setTimeout(() => {
                setShowImages(true);
                // Show images one by one - Super fast sequence
                setTimeout(() => setVisibleImages([1]), 50);
                setTimeout(() => setVisibleImages([1, 2]), 200);
                setTimeout(() => setVisibleImages([1, 2, 3]), 350);
            }, 70);
        }, 3500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    const handleNavClick = (section: string) => {
        console.log(`Navigating to: ${section}`);
        // Add your navigation logic here
    };

    return (
        <main className="w-screen h-screen bg-akasacara-yellow relative overflow-hidden cursor-none">
            <CustomCursor isHovering={isHovering || hoveredSection !== null} isHidden={isNavHovering} />

            <style jsx>{`
                .text-navbar {
                    font-family: var(--font-poppins);
                    font-size: var(--text-button-sec);
                    font-style: normal;
                    font-weight: 500;
                    line-height: var(--text-lineheight-button-sec);
                    }
            `}</style>
            {/* Navigation Bar */}
            <nav
                className="absolute z-20 left-1/2 -translate-x-1/2 cursor-auto w-full md:px-xl px-0"
                style={{ top: '65px' }}
                onMouseEnter={() => setIsNavHovering(true)}
                onMouseLeave={() => setIsNavHovering(false)}
            >
                <div className="flex justify-center w-full">
                    <div
                        className="vfx-text-title text-navbar grid grid-cols-1 lg:grid-cols-3 justify-between items-center backdrop-blur-sm py-m px-4xl gap-x-4xl gap-y-l"
                        style={{
                            background: 'rgba(0, 0, 0, 0.15)',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '15px'
                        }}
                    >
                        <Link
                            href="/vfx"
                            className="self-stretch text-center transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)';
                                setIsHovering(true);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.textShadow = '';
                                setIsHovering(false);
                            }}
                        >
                            LodhongKrupuk VFX
                        </Link>
                        <Link
                            href="/film"
                            className="self-stretch text-center transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)';
                                setIsHovering(true);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.textShadow = '';
                                setIsHovering(false);
                            }}
                        >
                            Film.Akasacara
                        </Link>
                        <Link
                            href="/interactive"
                            className="self-stretch text-center transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)';
                                setIsHovering(true);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.textShadow = '';
                                setIsHovering(false);
                            }}
                        >
                            LodhongKrupuk Interactive
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Logo with Enhanced Modern Animation */}
            <div
                className={`flex items-center justify-center h-full transition-opacity duration-1000 ${showImages ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <div
                    className={`relative transition-all duration-1500 ease-out ${isLogoVisible
                        ? 'opacity-100 scale-100 blur-0 rotate-0'
                        : 'opacity-0 scale-95 blur-sm rotate-1'
                        }`}
                    style={{
                        animation: showImages ? 'none' : 'logoEntrance 1.5s ease-out, logoBreathe 3s ease-in-out infinite 1.5s'
                    }}
                >
                    {/* Pulsing glow effect */}
                    <div className="absolute inset-0 animate-[pulse_2.5s_ease-in-out_infinite] opacity-20">
                        <div className="w-full h-full bg-gradient-radial from-white/40 to-transparent rounded-full blur-3xl scale-150"></div>
                    </div>

                    {/* Secondary glow layer */}
                    <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite_0.5s] opacity-15">
                        <div className="w-full h-full bg-white rounded-full blur-2xl scale-125"></div>
                    </div>

                    <Image
                        src="/assets/LOGO_Akasacara3.svg"
                        alt="Akasacara Logo"
                        width={300}
                        height={300}
                        priority
                        className="relative w-[300px] md:w-[280px] sm:w-[200px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-10"
                    />
                </div>
            </div>

            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes logoEntrance {
                    0% {
                        transform: scale(0.3) rotate(-5deg);
                        opacity: 0;
                        filter: blur(20px);
                    }
                    60% {
                        transform: scale(1.05) rotate(2deg);
                        opacity: 1;
                        filter: blur(0px);
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                        filter: blur(0px);
                    }
                }
                
                @keyframes logoBreathe {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.03);
                    }
                }
            `}</style>

            {/* Diagonal Image Grid - PRECISE GEOMETRY: Full screen overlays with clip-paths */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${showImages ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="w-full h-full relative">
                    {/* Section 1 - Left: Top-Left Triangle
                        Clip: (0,0) -> (48.68%, 0) -> (0, 100%)
                        Bottom-left corner is at (0,100)
                    */}
                    <div
                        className={`absolute inset-0 transition-all duration-1000 ease-out cursor-none ${visibleImages.includes(1)
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                            }`}
                        style={{
                            clipPath: 'polygon(0 0, 48.68% 0, 0 100%)',
                            zIndex: hoveredSection === 1 ? 10 : 1
                        }}
                        onMouseEnter={() => setHoveredSection(1)}
                        onMouseLeave={() => setHoveredSection(null)}
                        onClick={() => handleNavClick('LodhongKrupuk VFX')}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/assets/image1.png"
                                alt="LodhongKrupuk VFX"
                                fill
                                className={`object-cover transition-all duration-700 ease-out ${hoveredSection === 1 ? 'scale-110 grayscale-0 brightness-110' : 'scale-100 grayscale brightness-90'
                                    }`}
                            />
                            {/* Overlay for inactive state */}
                            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${hoveredSection === 1 ? 'opacity-0' : 'opacity-100'}`} />
                        </div>
                    </div>

                    {/* Section 2 - Middle: Diagonal Band filling the space
                        Clip: (48.68%, 0) -> (100%, 0) -> (51.32%, 100%) -> (0, 100%)
                        Connects Section 1 and Section 3 perfectly
                    */}
                    <div
                        className={`absolute inset-0 transition-all duration-1000 ease-out cursor-none ${visibleImages.includes(2)
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                            }`}
                        style={{
                            clipPath: 'polygon(48.68% 0, 100% 0, 51.32% 100%, 0 100%)',
                            zIndex: hoveredSection === 2 ? 10 : 2
                        }}
                        onMouseEnter={() => setHoveredSection(2)}
                        onMouseLeave={() => setHoveredSection(null)}
                        onClick={() => handleNavClick('Film.Akasacara')}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/assets/image2.png"
                                alt="Film.Akasacara"
                                fill
                                className={`object-cover transition-all duration-700 ease-out ${hoveredSection === 2 ? 'scale-110 grayscale-0 brightness-110' : 'scale-100 grayscale brightness-90'
                                    }`}
                            />
                            {/* Overlay for inactive state */}
                            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${hoveredSection === 2 ? 'opacity-0' : 'opacity-100'}`} />
                        </div>
                    </div>

                    {/* Section 3 - Right: Bottom-Right Triangle
                        Clip: (100%, 0) -> (100%, 100%) -> (51.32%, 100%)
                        Top-right corner is at (100,0)
                    */}
                    <div
                        className={`absolute inset-0 transition-all duration-1000 ease-out cursor-none ${visibleImages.includes(3)
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                            }`}
                        style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 51.32% 100%)',
                            zIndex: hoveredSection === 3 ? 10 : 3
                        }}
                        onMouseEnter={() => setHoveredSection(3)}
                        onMouseLeave={() => setHoveredSection(null)}
                        onClick={() => handleNavClick('LodhongKrupuk Interactive')}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/assets/image3.png"
                                alt="LodhongKrupuk Interactive"
                                fill
                                className={`object-cover transition-all duration-700 ease-out ${hoveredSection === 3 ? 'scale-110 grayscale-0 brightness-110' : 'scale-100 grayscale brightness-90'
                                    }`}
                            />
                            {/* Overlay for inactive state */}
                            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${hoveredSection === 3 ? 'opacity-0' : 'opacity-100'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
