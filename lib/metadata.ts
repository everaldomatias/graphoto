import { fetchSiteInfo } from "@/lib/fetchSiteInfo";

export async function generateMetadata() {
    const data = await fetchSiteInfo();
    return {
        title: data.name || "",
        description: data.description || "",
    };
}
