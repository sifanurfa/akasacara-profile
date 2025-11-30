import apiClient from "@/lib/apiClient";
import { BreakdownVFX } from "@/types/api/vfx";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace("/api", "");

export const BreakdownVFXApi = {
  getAll: async (options?: { limit?: number; sort?: "asc" | "desc" }) => {
    const res = await apiClient.get("/breakdown-vfxes?populate=*");

    let data: BreakdownVFX[] = res.data.data.map((item: BreakdownVFX) => {
        // ambil url dari beforeMedia & afterMedia
        const beforeUrl = item.beforeMedia?.[0]?.url || "";
        const afterUrl = item.afterMedia?.[0]?.url || "";

        const fullBeforeUrl = beforeUrl.startsWith("http")
        ? beforeUrl
        : `${API_URL}${beforeUrl.replace("/api/", "/")}`;

        const fullAfterUrl = afterUrl.startsWith("http")
        ? afterUrl
        : `${API_URL}${afterUrl.replace("/api/", "/")}`;

        return {
        ...item,
        beforeImage: fullBeforeUrl,
        afterImage: fullAfterUrl,
        };
    });

    // Batasi jumlah data kalau ada limit
    if (options?.limit) {
        data = data.slice(0, options.limit);
    }

    return data;
    },
};
