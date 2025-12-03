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
  image: string;
  trailer: string;
  link: string;
  media: Media[];
  fullImage: string[];
  backgroundMedia: Media[];
  backgroundGame: Media[];
  gameplayMedia: Media[];
  homepageGame: Media[];
};

export interface PortofolioGame {
  id: number;
  title: string;
  description: string;
  image: string;
  trailer?: string | null;
  link?: string | null;
  rate: number;
  progres: string;
  media: Media[];
  backgroundMedia: Media[];
  backgroundGame: Media[];
  gameplayMedia: Media[];
  homepageGame: Media[];
  backgroundMediaImage: string;
  backgroundGameImage: string;
  gameplayMediaImage: string;
  homepageGameImage: string;
};

export interface InteractiveGamePortofolio {
  id: number;
  title: string;
  description: string;
  trailer?: string | null;
  link?: string | null;
  rate: number;
  progres: string;
  media: Media[];
};

export interface AnnouncementFilm {
  id: number;
  documentId: string;
  identifier: string;
  urlMedia: string;
  image: string;
  title: string;
  announceType: string;
  item: string;
  date: string;
  media: Media[];
};

export interface HighlightAnnouncement {
  id: number;
  documentId: string;
  urlMedia: string;
  title: string;
  announceType: string;
  date: string;
  media: Media[];
};

export interface Film {
  id: number;
  documentId: string;
  title: string;
  description: string;
  genre: string;
  genreList: string[];
  link: string;
  potraitImage: string;
  landscapeImage: string;
  awardedImage: string;
  trailer: string;
  awardedFilm: boolean;
  projectType: string;
  year: number;
  potraitMedia: Media[];
  awardedMedia: Media[];
  landscapeMedia: Media[];
}

export interface Video {
  id: number;
  documentId: string;
  title: string;
  description: string;
  type: string;
  image: string;
  year: number;
  media: Media[];
}

export interface VFX {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  trailer: string;
  projectType: string;
  image: string;
  year: number;
  media: Media[];
}

export interface AnnouncementInteractive {
  id: number;
  documentId: string;
  identifier: string;
  urlMedia: string;
  title: string;
  ytChannel: string;
  image: string;
  announceType: string;
  genre: string;
  genreList: string[];
  item: string;
  date: string;
  media: Media[];
};

export interface Showreel {
  id: number;
  media: Media[];
};