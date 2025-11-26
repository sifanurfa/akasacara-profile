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

export interface InteractiveGame {
  id: number;
  title: string;
  description: string;
  trailer?: string | null;
  media: Media[];
};
