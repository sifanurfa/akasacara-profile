// types/api/devlog.ts
export interface OurWorkMediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface OurWorkMedia {
  id: number;
  url: string;
  formats?: {
    thumbnail?: OurWorkMediaFormat;
    small?: OurWorkMediaFormat;
    medium?: OurWorkMediaFormat;
    large?: OurWorkMediaFormat;
  };
}

export interface OurWorkVFX {
  id: number;
  title: string;
  year: string;
  image: string;
  media?: {
    url: string;
    formats?: any;
  };
}
