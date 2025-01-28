const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function apiClient(endpoint: string = '', options = {}) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options)

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
    }

    return response.json()
}