export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${config.contentful.spaceId}/environments/master`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.contentful.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            blogCollection(limit: 5) {
              items {
                title
                slug
                sys {
                  firstPublishedAt
                }
              }
            }
          }
        `,
      }),
    }
  )

  const json = await res.json()

  //console.log('Contentful response:', JSON.stringify(json, null, 2))

  if (!res.ok || json.errors) {
    console.error('GraphQL error:', json.errors)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch from Contentful',
      data: json.errors
    })
  }

  return json.data
})
