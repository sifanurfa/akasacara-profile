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

    if (pathname.startsWith("/inquiry")) {
      return [
        { label: "Home", href: "/inquiry" },
      ];
    }

    // Default: Akasacara Film (main)
    return [
      { label: "Home", href: "/main" },
      { label: "Newsroom", href: "/main/announcement" },
      { label: "Our Works", href: "/main/ourworks" },
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
    if (pathname.startsWith("/inquiry")) {
      return {
        logo: "/assets/LogoAkasacara.png",
        alt: "Akasacara Film Logo",
      };
    }
    // Default: Akasacara Film
    return {
      logo: "/assets/LogoAkasacara.png",
      alt: "Akasacara Film Logo",
    };
  };
  const { logo, alt } = getLogoAndBrand();

  const getSocialLinks = () => {
    // Bisa diganti dengan URL asli masing-masing akun
    if (pathname.startsWith("/interactive")) {
      return [
        { platform: "Instagram", url: "https://www.instagram.com/akasacarafilm", icon: "/assets/Instagram.png" },
        { platform: "Youtube", url: "https://www.youtube.com/Akasacarafilm", icon: "/assets/Youtube.png" },
      ];
    }

    if (pathname.startsWith("/vfx")) {
      return [
        { platform: "Instagram", url: "https://www.instagram.com/lodhongkrupuk.interactive", icon: "/assets/Instagram.png" },
        { platform: "Youtube", url: "https://www.youtube.com/Akasacarafilm", icon: "/assets/Youtube.png" },
        { platform: "Itch.io", url: "http://lodhongkrupukinteractive.itch.io", icon: "/assets/Itch.io.png" },
      ];
    }

    if (pathname.startsWith("/inquiry")) {
      return [
        { platform: "Linkedin", url: "https://linkedin.com/company/akasacara-film", icon: "/assets/Linkedin.png" },
        { platform: "X", url: "https://x.com/akasacarafilm", icon: "/assets/X.png" },
        { platform: "Facebook", url: "https://facebook.com/akasacarafilm", icon: "/assets/Facebook.png" },
        { platform: "Instagram", url: "https://instagram.com/akasacarafilm", icon: "/assets/Instagram.png" },
        { platform: "Youtube", url: "https://youtube.com/@akasacarafilm", icon: "/assets/Youtube.png" },
      ];
    }

    // Default: Akasacara Film (main)
    return [
      { platform: "Linkedin", url: "https://www.linkedin.com/company/akasacarafilm/?originalSubdomain=id", icon: "/assets/Linkedin.png" },
      { platform: "X", url: "https://x.com/akasacarafilm", icon: "/assets/X.png" },
      { platform: "Facebook", url: "https://www.facebook.com/akasacara/", icon: "/assets/Facebook.png" },
      { platform: "Instagram", url: "https://www.instagram.com/akasacarafilm", icon: "/assets/Instagram.png" },
      { platform: "Youtube", url: "https://www.youtube.com/Akasacarafilm", icon: "/assets/Youtube.png" },
    ];
  };
  const socialLinks = getSocialLinks();

  const isActiveBrand = (href: string) => {
     if (
    href === "/main" ||
    href === "/vfx" ||
    href === "/interactive" ||
    href === "/inquiry"
  ) {
    // main punya pengecualian: "/" juga dianggap main
    if (href === "/main") return pathname === "/main" || pathname === "/";
    return pathname === href; // EXACT MATCH SAJA!
  }

  // untuk halaman child
  return pathname === href || pathname.startsWith(href + "/");
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
          <div className="w-96 h-10 inline-flex justify-start items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={`${social.platform} Logo`}
                  className="w-10 h-10 relative"
                />
              </a>
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
                { label: "Inquiry", href: "/inquiry", bold: false },
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

          <div className="w-[805px] inline-flex justify-start items-start gap-20">
            <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
              <div className="self-stretch text-white text-xl font-medium font-['Poppins'] leading-7">
                Quick Links
              </div>
              <div className="self-stretch pl-7 pr-2.5 py-2.5 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  {quickLinks.map((link) => {
                  // Fix logika aktif — pastikan hanya 1 yang benar-benar aktif
                  const isActive =
                    link.href === "/main"
                      ? pathname === "/" || pathname === "/main"
                      : pathname === link.href || pathname.startsWith(link.href + "/");

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`
                        relative text-xl font-light leading-7 transition-all duration-300
                        ${isActive ? "text-yellow-400" : "text-white"}
                      `}
                    >
                      {link.label}

                      {/* Garis panjang abu-abu permanen */}
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/30" />

                      {/* Garis putih yang muncul saat hover atau aktif */}
                      <span
                        className={`
                          absolute -bottom-1 left-0 h-px bg-white origin-left
                          transition-transform duration-400
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      />
                    </Link>
                  );
                })}
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