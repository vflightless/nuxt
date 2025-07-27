// ~/server/utils/fetchBlogPostBySlug.ts
export async function fetchBlogPostBySlug(slug: string) {
  const config = useRuntimeConfig()

  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${config.contentful.spaceId}/environments/master`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.contentful.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query ($slug: String!) {
          blogCollection(where: { slug: $slug }, limit: 1) {
            items {
              title
              slug
              content
              sys {
                firstPublishedAt
              }
            }
          }
        }
      `,
      variables: { slug }
    })
  })

  const json = await res.json()

  if (!res.ok || json.errors) {
    console.error('Contentful GraphQL error:', json.errors)
    return null
  }

  return json.data.blogCollection.items[0]
}
