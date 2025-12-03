import apiClient from "@/lib/apiClient";
import { Showreel } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const ShowreelInteractiveApi = {
  getVideo: async () => {
    const res = await apiClient.get(`/showreel-interactives?populate=*`);

    const item: Showreel = res.data.data?.[0];
    const url = item.media?.[0]?.url || "";
    const videoUrl = url.startsWith("http") ? url : `${API_URL}${url.replace("/api/", "/")}`;

    return videoUrl;
  },
};
