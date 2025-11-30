import apiClient from "@/lib/apiClient";
import { InteractiveGame, Media } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const InteractiveGameApi = {
  getGames: async () => {
    const res = await apiClient.get("/interactive-games?populate=*");

    return res.data.data.map((item: InteractiveGame) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return { ...item, image: fullUrl };
    });
  },

  getPopularGame: async () => {
    const res = await apiClient.get(
      "/interactive-games?populate=media&filters[popularGame]=true&pagination[limit]=1"
    );

    const item = res.data.data?.[0];
    if (!item) return null;

    // base URL image
    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "") || "";

    // ambil semua media dan format URL-nya
    const media = (item.media || []).map((m: Media) => ({
      id: m.id,
      url: m.url.startsWith("http") ? m.url : `${API_URL}${m.url}`,
      formats: m.formats,
    }));

    return {
      id: item.id,
      title: item.title,
      description: item.description,
      trailer: item.trailer,
      media,
    };
  },

};
