// server/api/blog.ts
import { fetchBlogPosts } from '~/server/utils/fetchBlogPosts'

export default defineEventHandler(async () => {
  try {
    const posts = await fetchBlogPosts()
    return posts
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts',
    })
  }
})
