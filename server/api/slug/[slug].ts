// /server/api/blog/[slug].ts
import { fetchBlogPostBySlug } from '~/server/utils/fetchBlogPostBySlug'

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event)
  console.log('slug', slug) // Debugging line to check slug value
  
  if(!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const post = await fetchBlogPostBySlug(slug)
  if(!post) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

  return post
})