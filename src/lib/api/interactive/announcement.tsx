import apiClient from "@/lib/apiClient";
import { AnnouncementInteractive } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const AnnouncementInteractiveApi = {
  getAll: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-interactives?populate=media");

    interface ArticleWithRawDate extends AnnouncementInteractive {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementInteractive) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
        ? new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        urlMedia: item.urlMedia,
        image: fullUrl,
        date: formattedDate 
      };
    });

    // Urutkan data kalau parameter sort ada
    if (options?.sort) {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return options.sort === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getNews: async () => {
    const res = await apiClient.get("/announcement-interactives?populate=media&filters[announceType]=news");

    return res.data.data.map((item: AnnouncementInteractive) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        urlMedia: item.urlMedia,
        image: fullUrl,
        date: formattedDate 
      };
    });
  },
  getDevlog: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-interactives?populate=media&filters[announceType]=devlog");

    interface ArticleWithRawDate extends AnnouncementInteractive {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementInteractive) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        urlMedia: item.urlMedia,
        image: fullUrl,
        date: formattedDate 
      };
    });

    // Urutkan data kalau parameter sort ada
    if (options?.sort) {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return options.sort === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getVideos: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-interactives?populate=media&filters[announceType]=videos");

    interface ArticleWithRawDate extends AnnouncementInteractive {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementInteractive) => {
      const formattedDate = item.date
        ? new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        urlMedia: item.urlMedia,
        ytChannel: item.ytChannel,
        date: formattedDate 
      };
    });

    // Urutkan data kalau parameter sort ada
    if (options?.sort) {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return options.sort === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getHighlightVideo: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-interactives?populate=media&filters[announceType]=videos&filters[highlight]=true");

    interface ArticleWithRawDate extends AnnouncementInteractive {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementInteractive) => {
      const formattedDate = item.date
        ? new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      const genre = item.genre.split(", ");

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        item: item.item,
        urlMedia: item.urlMedia,
        date: formattedDate,
        genreList: genre,
      };
    });

    // Urutkan data kalau parameter sort ada
    if (options?.sort) {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return options.sort === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getHighlightDevlog: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-interactives?populate=media&filters[announceType]=devlog&filters[highlight]=true");

    interface ArticleWithRawDate extends AnnouncementInteractive {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementInteractive) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      const formattedDate = item.date
        ? new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "";

      return {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        urlMedia: item.urlMedia,
        item: item.item,
        image: fullUrl,
        date: formattedDate 
      };
    });

    // Urutkan data kalau parameter sort ada
    if (options?.sort) {
      data = data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return options.sort === "desc" ? dateB - dateA : dateA - dateB;
      });
    }

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
};
