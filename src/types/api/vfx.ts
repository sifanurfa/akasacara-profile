export interface MediaFormat {
  url: string;
  width: number;
  height: number;
};

export interface Media {
  id: number;
  url: string;
  formats?: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
};

export interface BreakdownVFX {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  link: string | null;
  beforeMedia: Media[];
  afterMedia: Media[];
  beforeImage: string; // full URL dari beforeMedia
  afterImage: string;  // full URL dari afterMedia
  date: string;        // tanggal format "Nov 30, 2025"
}
