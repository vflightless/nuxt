// server/api/slug.ts

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Get slug from query string (e.g., /api/slug?slug=my-post)
  const query = getQuery(event); // cleaner than parsing manually
  const slug = query.slug || '';

  // Use GraphQL variables to avoid injecting into the query string directly
  const graphQuery = `
    query BlogPostBySlug($slug: String!) {
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
  `;

  try {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${config.contentful.spaceId}/environments/master`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.contentful.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: graphQuery,
        variables: { slug }
      })
    });

    const json = await response.json();

    if (!response.ok || json.errors) {
      console.error('GraphQL Error:', json.errors);
      throw new Error(`Contentful GraphQL error`);
    }

    const post = json.data?.blogCollection?.items?.[0];

    if (!post) {
      return { error: 'Post not found' };
    }

    return post;
  } catch (err) {
    console.error('Error fetching blog post:', err);
    event.node.res.statusCode = 500;
    return { error: 'Could not fetch blog post' };
  }
});
