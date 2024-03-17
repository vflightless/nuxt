import { defineEventHandler } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
    const urlParts = event.node.req.url.split('?');
    const queryParams = urlParts[1];
    const slug = new URLSearchParams(queryParams).get('slug') || '';

    const query = `query {
        blogCollection(where: { slug: "${slug}" }) {
          items {
            title
            slug
            content
            sys { firstPublishedAt }
          }
        }
      }`;
    console.log('Contentful Query:', query);


    try {
        const response = await fetch('https://graphql.contentful.com/content/v1/spaces/04mek96kpy2l/environments/master', {
            method: "POST",
            headers: {
                Authorization: `Bearer 2BygiAT16cOfcK4hTFPjacyJ3QuHJan8modlZfrWV1g`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `query {
                    blogCollection(where: { slug: "${slug}" }) {
                      items {
                      title
                      slug
                      content
                      sys { firstPublishedAt }
                      }
                    }
                  }`
            })
        });
        if (!response.ok) {
            throw new Error(`Error fetching Contentful data: ${response.status}`);
        }

        const data = await response.json();
        const post = data.data.blogCollection.items[0];
        
        return post;
    } catch (err) {
        console.error('Error fetching blog post:', err);
        event.node.res.statusCode = 500;
        return { error: 'Could not fetch blog post' };
    }
}); 
