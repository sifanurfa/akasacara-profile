import apiClient from "@/lib/apiClient";
import { AnnouncementFilm } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const AnnouncementFilmApi = {
  getAll: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-films?populate=media");

    interface ArticleWithRawDate extends AnnouncementFilm {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementFilm) => {
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
        urlMedia: item.urlMedia,
        title: item.title,
        announceType: item.announceType,
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
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=news");

    return res.data.data.map((item: AnnouncementFilm) => {
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
        urlMedia: item.urlMedia,
        title: item.title,
        announceType: item.announceType,
        image: fullUrl, 
        date: formattedDate 
      };
    });
  },
  getPress: async () => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=press");

    return res.data.data.map((item: AnnouncementFilm) => {
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
        urlMedia: item.urlMedia,
        title: item.title,
        announceType: item.announceType,
        image: fullUrl, 
        date: formattedDate 
      };
    });
  },
  getBlogs: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[announceType]=blog");

    interface ArticleWithRawDate extends AnnouncementFilm {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementFilm) => {
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

      return { ...item, image: fullUrl, date: formattedDate };
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
  getArticlebyId: async (documentId: string) => {
    const res = await apiClient.get(`/announcement-films/${documentId}`);

    const item: AnnouncementFilm = res.data.data;
    const url = item.media?.[0]?.url || "";
    const fullUrl = url.startsWith("http") ? url : `${API_URL}${url.replace("/api/", "/")}`;

    const formattedDate = item.date
      ? new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

    return { ...item, image: fullUrl, date: formattedDate };
  },
  getHighlight: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/announcement-films?populate=media&filters[highlight]=true");

    interface ArticleWithRawDate extends AnnouncementFilm {
      image: string;
      date: string;
      rawDate: string;
    }

    let data: ArticleWithRawDate[] = res.data.data.map((item: AnnouncementFilm) => {
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

      return { ...item, image: fullUrl, date: formattedDate };
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
