// Type declarations for importing CSS files (including node_modules side-effect CSS)
// This prevents TypeScript error: "Cannot find module or type declarations for side-effect import of '...css'"

declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Explicit declarations for slick-carousel CSS (optional but keeps editor happy)
declare module 'slick-carousel/slick/slick.css';
declare module 'slick-carousel/slick/slick-theme.css';

// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

// swiper.d.ts
declare module "swiper/css";
declare module "swiper/css/scrollbar";
declare module "swiper/css/navigation";
declare module "swiper/css/thumbs";
declare module "swiper/css/free-mode";

