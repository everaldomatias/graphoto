import { apiClient } from "@/lib/apiClient"

export async function fetchSiteInfo() {
    const response = await apiClient()
    return response
}