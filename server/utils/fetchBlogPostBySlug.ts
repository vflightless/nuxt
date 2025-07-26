import { contentfulQuery } from './contentful'

export async function fetchBlogPostBySlug(slug: string) {
    const query = `query GetBlogPostBySlug($slug: String!) {
        blogCollection(where: { slug: $slug }, limit: 1) {
            items {
                title
                slug
                body
                sys { firstPublishedAt }
            }
        }
    }`

    const data = await contentfulQuery(query, { slug })
    return data.blogCollection.items[0] || null
}