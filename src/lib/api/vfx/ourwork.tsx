// lib/api/devlogApi.ts atau ourworkApi.ts

import apiClient from "@/lib/apiClient";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

// lib/api/ourworkApi.ts atau devlogApi.ts

export const OurWorkVFXApi = {
  getOurWork: async () => {
    const res = await apiClient.get("/vfx-displays?populate=media");

    return res.data.data.map((item: any) => {
      const media = item.media;

      // Ambil yang paling bagus & pasti lowercase
      const rawUrl =
        media?.formats?.large?.url ||
        media?.formats?.medium?.url ||
        media?.formats?.small?.url ||
        media?.url ||
        "";

      const fullImageUrl = rawUrl
        ? rawUrl.startsWith("http")
          ? rawUrl
          : `${API_URL}${rawUrl}`
        : "https://placehold.co/600x900/111/fff?text=No+Image";

      return {
        id: item.id,
        title: item.title,
        year: item.year,
        image: fullImageUrl,
      };
    });
  },
};