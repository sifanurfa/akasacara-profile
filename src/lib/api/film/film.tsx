import apiClient from "@/lib/apiClient";
import { Film } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const FilmApi = {
  getAll: async (options?: { limit?: number; }) => {
    const res = await apiClient.get("/films?populate=*");

    let data: Film[] = res.data.data.map((item: Film) => {
      const potraitUrl = item.potraitMedia?.[0]?.url || "";
      const landscapeUrl = item.landscapeMedia?.[0]?.url || "";
      
      const fullPotraitUrl = potraitUrl
        ? `${API_URL}${potraitUrl.replace("/api/", "/")}`
        : "";
      const fullLandscapeUrl = landscapeUrl
        ? `${API_URL}${landscapeUrl.replace("/api/", "/")}`
        : "";

      return { 
        id: item.id,
        title: item.title,
        year: item.year,
        description: item.description,
        projectType: item.projectType,
        potraitImage: fullPotraitUrl, 
        landscapeImage: fullLandscapeUrl 
      };
    });

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
  getAwarded: async (options?: { limit?: number; }) => {
    const res = await apiClient.get("/films?populate=*&filters[awardedFilm]=true&pagination[limit]=1");

    let data: Film[] = res.data.data.map((item: Film) => {
      const potraitUrl = item.potraitMedia?.[0]?.url || "";
      const landscapeUrl = item.landscapeMedia?.[0]?.url || "";
      const awardedUrl = item.awardedMedia?.[0]?.url || "";
      
      const fullPotraitUrl = potraitUrl
        ? `${API_URL}${potraitUrl.replace("/api/", "/")}`
        : "";
      const fullLandscapeUrl = landscapeUrl
        ? `${API_URL}${landscapeUrl.replace("/api/", "/")}`
        : "";
      const fullAwardedUrl = awardedUrl
        ? `${API_URL}${awardedUrl.replace("/api/", "/")}`
        : "";

      const genre = item.genre.split(", ");

      return { 
        id: item.id,
        title: item.title,
        year: item.year,
        genreList: genre,
        description: item.description,
        projectType: item.projectType,
        potraitImage: fullPotraitUrl, 
        landscapeImage: fullLandscapeUrl,
        awardedImage: fullAwardedUrl,
      };
    });

    // Batasi jumlah data kalau parameter limit ada
    if (options?.limit) {
      data = data.slice(0, options.limit);
    }

    return data;
  },
};
