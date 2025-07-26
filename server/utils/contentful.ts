// server/utils/contentful.ts
export async function contentfulQuery(query: string, variables: Record<string, any> = {}) {
  const config = useRuntimeConfig()

  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${config.contentful.spaceId}/environments/master`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.contentful.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (!res.ok || json.errors) {
    console.error('Contentful GraphQL error:', json.errors)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch from Contentful',
      data: json.errors,
    })
  }

  return json.data
}
