import { fetchBlogPostBySlug } from '~/server/utils/fetchBlogPostBySlug'

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event)
  if(!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const post = await fetchBlogPostBySlug(slug)
  if(!post) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

  return post
})