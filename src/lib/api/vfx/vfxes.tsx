import apiClient from "@/lib/apiClient";
import { VFX } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const VFXApi = {
  getAll: async (options?: { limit?: number; }) => {
    const res = await apiClient.get("/vfxes?populate=*");

    let data: VFX[] = res.data.data.map((item: VFX) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return {
        id: item.id,
        title: item.title,
        link: item.link,
        description: item.description,
        image: fullUrl,
      };
    });

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getHighlightImg: async (options?: { limit?: number; }) => {
    const res = await apiClient.get("/vfxes?populate=*&filters[highlight]=true");

    let data: VFX[] = res.data.data.map((item: VFX) => {
      const url = item.media?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return {
        image: fullUrl,
      };
    });

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
};
