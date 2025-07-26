// server/utils/fetchBlogPosts.ts
import { contentfulQuery } from './contentful'

export async function fetchBlogPosts(limit = 5, skip = 0, order: 'ASC' | 'DESC' = 'DESC') {
  const query = `
    query GetBlogPosts($limit: Int!, $skip: Int!, $order: [BlogOrder]) {
      blogCollection(limit: $limit, skip: $skip, order: $order) {
        items {
          title
          slug
          sys {
            firstPublishedAt
          }
        }
        total
      }
    }
  `

  const orderKey = order === 'ASC' ? 'sys_firstPublishedAt_ASC' : 'sys_firstPublishedAt_DESC'

  return contentfulQuery(query, {
    limit,
    skip,
    order: orderKey,
  })
}
