'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Fungsi untuk menentukan quick links berdasarkan divisi
  const getQuickLinks = () => {
    if (pathname.startsWith("/vfx")) {
      return [
        { label: "Home", href: "/vfx" },
        { label: "Our Works", href: "/vfx#works" },
        { label: "Showcase", href: "/vfx#showcase" },
      ];
    }

    if (pathname.startsWith("/interactive")) {
      return [
        { label: "Home", href: "/interactive" },
        { label: "Portfolio", href: "/interactive#portfolio" },
        { label: "Devlog", href: "/interactive#devlog" },
      ];
    }

    // Default: Akasacara Film (main)
    return [
      { label: "Home", href: "/main" },
      { label: "Newsroom", href: "/main#announcement" },
      { label: "Our Works", href: "/main#works" },
    ];
  };

  const quickLinks = getQuickLinks();

  const getLogoAndBrand = () => {
  if (pathname.startsWith("/interactive")) {
    return {
      logo: "/assets/LogoInteractive.png",        // Logo Interactive
      alt: "LodhongKrupuk Interactive Logo",
    };
  }
  if (pathname.startsWith("/vfx")) {
    return {
      logo: "/assets/LogoVFX.png",                // Logo VFX (pastikan filenya ada!)
      alt: "LodhongKrupuk VFX Logo",
    };
  }
  // Default: Akasacara Film
  return {
    logo: "/assets/LogoAkasacara.png",
    alt: "Akasacara Film Logo",
  };
};

const { logo, alt } = getLogoAndBrand();

  const isActiveBrand = (href: string) => {
    if (href === "/main") return pathname === "/" || pathname === "/main";
    return pathname.startsWith(href);
  };

  return (
    <div className="w-full px-24 py-24 bg-black inline-flex flex-col justify-start items-start">
      <div className="self-stretch inline-flex justify-start items-center">
        <div className="inline-flex flex-col justify-start items-start gap-14">
          {/* Logo */}
          <img
            src={logo}
            alt={alt}
            className="w-96 h-24 relative"
          />

          {/* Social Media Icons */}
          <div className="w-72 h-10 inline-flex justify-start items-center gap-8">
            {["Linkedin", "X", "Facebook", "Instagram", "Youtube"].map((social) => (
              <img
                key={social}
                src={`/assets/${social}.png`}
                alt={`${social} Logo`}
                className="w-8 h-8 relative"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 inline-flex flex-col justify-center items-end gap-14">
          {/* Brand Navigation */}
          <div className="self-stretch flex flex-col justify-center items-end">
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-8 gap-y-6 text-white">
              {[
                { label: "Akasacara Film", href: "/main", bold: true },
                { label: "LodhongKrupuk VFX", href: "/vfx", bold: false },
                { label: "LodhongKrupuk Interactive", href: "/interactive", bold: false },
                { label: "Inquiries", href: "/inquery", bold: false },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    group relative px-4 py-3 text-lg md:text-xl leading-7 transition-all duration-300
                    ${item.bold ? "font-normal" : "font-light"}
                    ${isActiveBrand(item.href) ? "text-yellow-400" : "text-white hover:text-yellow-400"}
                  `}
                >
                  {item.label}
                  <span className="absolute inset-x-0 top-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute inset-x-0 bottom-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Location */}
          <div className="w-[805px] inline-flex justify-start items-start gap-20">
            {/* QUICK LINKS - INI YANG TADI SALAH! */}
            <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch text-white text-xl font-medium font-['Poppins'] leading-7">
                Quick Links
              </div>
              <div className="self-stretch pl-7 pr-2.5 py-2.5 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  {quickLinks.map((link, index) => (
                    <div key={link.label}>
                      <div className="self-stretch text-white text-xl font-light font-['Poppins'] leading-7">
                        <Link href={link.href}>{link.label}</Link>
                      </div>
                      {index < quickLinks.length - 1 && (
                        <div className={`w-48 h-0 outline outline-1 outline-offset-[-0.50px] ${
                          index === 0 ? "outline-white" : "outline-white/50"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch text-white text-xl font-medium font-['Poppins'] leading-7">
                Location
              </div>
              <div className="pl-7 pr-2.5 py-2.5">
                <div className="w-96 text-white text-xl font-light font-['Poppins'] leading-7">
                  Jalan Patuk Ngoro Oro, KM 0.4, No. 207, Patuk, Patuk, Gunungkidul, D.I. Yogyakarta 55862
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}