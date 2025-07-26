// server/api/blog.ts
import { fetchBlogPosts } from '~/server/utils/fetchBlogPosts'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const limit = parseInt(query.limit as string) || 5
  const page = parseInt(query.page as string) || 1
  const order = (query.order as string)?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'

  const skip = (page - 1) * limit

  const data = await fetchBlogPosts(limit, skip, order)

  return {
    items: data.blogCollection.items,
    total: data.blogCollection.total,
    page,
    limit,
    order,
  }
})
