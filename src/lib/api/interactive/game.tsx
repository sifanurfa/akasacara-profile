import apiClient from "@/lib/apiClient";
import { InteractiveGame, PortofolioGame } from "@/types/api/types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const InteractiveGameApi = {
  getGames: async () => {
    const res = await apiClient.get("/interactive-games?populate=*");

    return res.data.data.map((item: InteractiveGame) => {
      const url = item.backgroundMedia?.[0]?.url || "";
      const fullUrl = url.startsWith("http")
        ? url
        : `${API_URL}${url.replace("/api/", "/")}`;

      return { ...item, image: fullUrl };
    });
  },

  getPortofolioList: async () => {
    const res = await apiClient.get("/interactive-games?populate=*");

    return res.data.data.map((item: PortofolioGame) => {
      const backgroundMediaUrl = item.backgroundMedia?.[0]?.url || "";
      const backgroundGameUrl = item.backgroundGame?.[0]?.url || "";
      const gameplayMediaUrl = item.gameplayMedia?.[0]?.url || "";
      const homepageGameUrl = item.homepageGame?.[0]?.url || "";

      const fullBackgroundMediaUrl = backgroundMediaUrl
        ? `${API_URL}${backgroundMediaUrl.replace("/api/", "/")}`
        : "";
      const fullBackgroundGameUrl = backgroundGameUrl
        ? `${API_URL}${backgroundGameUrl.replace("/api/", "/")}`
        : "";
      const fullGameplayMediaUrl = gameplayMediaUrl
        ? `${API_URL}${gameplayMediaUrl.replace("/api/", "/")}`
        : "";
      const fullHomepageGameUrl = homepageGameUrl
        ? `${API_URL}${homepageGameUrl.replace("/api/", "/")}`
        : "";

      return { ...item, 
        backgroundMediaImage: fullBackgroundMediaUrl, 
        backgroundGameImage: fullBackgroundGameUrl, 
        gameplayMediaImage: fullGameplayMediaUrl, 
        homepageGameImage: fullHomepageGameUrl}
      ;
    });
  },

  getPopularGame: async () => {
    const res = await apiClient.get("/interactive-games?populate=*&filters[popularGame]=true&pagination[limit]=1");

    const item = res.data.data?.[0];
    if (!item) return null;

    const backgroundMediaUrl = item.backgroundMedia?.[0]?.url || "";
    const backgroundGameUrl = item.backgroundGame?.[0]?.url || "";
    const gameplayMediaUrl = item.gameplayMedia?.[0]?.url || "";
    const homepageGameUrl = item.homepageGame?.[0]?.url || "";

    const fullBackgroundMediaUrl = backgroundMediaUrl
      ? `${API_URL}${backgroundMediaUrl.replace("/api/", "/")}`
      : "";
    const fullBackgroundGameUrl = backgroundGameUrl
      ? `${API_URL}${backgroundGameUrl.replace("/api/", "/")}`
      : "";
    const fullGameplayMediaUrl = gameplayMediaUrl
      ? `${API_URL}${gameplayMediaUrl.replace("/api/", "/")}`
      : "";
    const fullHomepageGameUrl = homepageGameUrl
      ? `${API_URL}${homepageGameUrl.replace("/api/", "/")}`
      : "";

    // return single formatted game
    return {
      ...item,
      fullImage: [
        fullBackgroundMediaUrl,
        fullBackgroundGameUrl,
        fullGameplayMediaUrl,
        fullHomepageGameUrl,
      ]
    };
  },
};
