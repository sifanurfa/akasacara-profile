import apiClient from "@/lib/apiClient";
import { InteractiveGame } from "@/types/api/types";

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
};
