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
        { label: "Showcase", href: "/vfx/showcase" },
        { label: "Our Work", href: "/vfx/ourwork" },
      ];
    }

    if (pathname.startsWith("/interactive")) {
      return [
        { label: "Home", href: "/interactive" },
        { label: "Newsroom", href: "/interactive/seeall" },
        { label: "Our Works", href: "/interactive/collection" },
      ];
    }

    // Default: Akasacara Film (main)
    return [
      { label: "Home", href: "/main" },
      { label: "Newsroom", href: "/main/announcement" },
      { label: "Our Works", href: "/main/ourwork" },
    ];
  };

  const quickLinks = getQuickLinks();

  const getLogoAndBrand = () => {
  if (pathname.startsWith("/interactive")) {
    return {
      logo: "/assets/LogoInteractive.png",        
      alt: "LodhongKrupuk Interactive Logo",
    };
  }
  if (pathname.startsWith("/vfx")) {
    return {
      logo: "/assets/VFXlogo.png",               
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
    <div className="bg-black flex flex-col py-section px-container items-start">
      <div className="self-stretch flex items-center">
        <div className="flex flex-2 flex-col items-start gap-2xl">
          {/* Logo */}
          <img
            src={logo}
            alt={alt}
            className="w-96 h-24 relative"
          />

          {/* Social Media Icons */}
          <div className="h-10 flex items-center gap-l">
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

        <div className="flex-5 flex flex-col justify-center items-end gap-2xl">
          {/* Brand Navigation */}
          <div className="self-stretch flex flex-col justify-center items-end">
            <div className="flex items-center lg:justify-end gap-x-8 gap-y-6 text-white">
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
                    ${isActiveBrand(item.href) ? "text-akasacara-yellow" : "text-white hover:text-akasacara-yellow"}
                  `}
                >
                  {item.label}

                  {/* GARIS ATAS */}
                  <span
                    className={`
                      absolute inset-x-0 top-0 h-px bg-white transition-transform duration-300 origin-left
                      ${isActiveBrand(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />

                  {/* GARIS BAWAH */}
                  <span
                    className={`
                      absolute inset-x-0 bottom-0 h-px bg-white transition-transform duration-300 origin-right
                      ${isActiveBrand(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links & Location */}
          <div className="flex items-start gap-4xl">
            {/* QUICK LINKS - INI YANG TADI SALAH! */}
            <div className="w-60 flex flex-col items-start gap-1">
              <div className="self-stretch text-white text-xl font-medium font-['Poppins'] leading-7">
                Quick Links
              </div>
              <div className="self-stretch pl-7 pr-2.5 py-2.5 flex flex-col items-start gap-2.5">
                <div className="self-stretch flex flex-col items-start gap-1">
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
            <div className="flex flex-col items-start gap-1">
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