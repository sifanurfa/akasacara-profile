// types/api/devlog.ts
export interface DevlogMediaFormat {
  url: string;
  width: number;
  height: number;
}

export interface DevlogMedia {
  id: number;
  url: string;
  formats?: {
    thumbnail?: DevlogMediaFormat;
    small?: DevlogMediaFormat;
    medium?: DevlogMediaFormat;
    large?: DevlogMediaFormat;
  };
}

export interface DevlogInteractives {
  id: number;
  title: string;
  content?: string | null;
  date: string;
  media: DevlogMedia[];
  image?: string; // final processed src
}
