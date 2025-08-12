// /server/utils/fetchBlogPosts.ts
import { contentfulQuery } from './contentful'

export async function fetchBlogPosts() {
  const query = `query GetBlogPosts {
      blogCollection(order: sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
  `

  const response = await contentfulQuery(query)
  return response.blogCollection.items
}