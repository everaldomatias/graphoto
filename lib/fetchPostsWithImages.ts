import { apiClient } from "@/lib/apiClient"

export async function fetchPostsWithImages() {
    try {
        const posts = await apiClient("wp/v2/posts?_embed")

        const formattedPosts = await Promise.all(
            posts.map(async (post: any) => {
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null

                const contentImages = extractImagesFromContent(post.content.rendered)

                const relatedImages = await fetchMediaForPost(post.id)

                return {
                    id: post.id,
                    title: post.title.rendered,
                    featuredImage,
                    images: [...new Set([...contentImages, ...relatedImages])],
                }
            })
        )

        return formattedPosts
    } catch (error) {
        console.error("Erro ao buscar posts:", error)
        return []
    }
}

function extractImagesFromContent(content: string): string[] {
    const imageRegex = /<img[^>]+src="([^">]+)"/g
    const images: string[] = []
    let match

    while ((match = imageRegex.exec(content)) !== null) {
        images.push(match[1])
    }
    
    console.log(images);
    

    return images
}

async function fetchMediaForPost(postId: number): Promise<string[]> {
    try {
        const media = await apiClient(`wp/v2/media?parent=${postId}`)
        console.log("Media:", media)
        return media.map((item: any) => item.source_url)
    } catch (error) {
        console.error(`Erro ao buscar mídias relacionadas ao post ${postId}:`, error)
        return []
    }
}
