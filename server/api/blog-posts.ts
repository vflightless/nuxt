import { defineEventHandler } from 'h3';
import fetch from 'node-fetch'; // Or another HTTP client library

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: `query { blogCollection { items { title slug sys { firstPublishedAt } } } }` })
    });

    if (!response.ok) {
      throw new Error(`Error fetching Contentful data: ${response.status}`);
    } 

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    event.node.res.statusCode = 500; // Set a server error status code
    return { error: 'Could not fetch blog posts' };  // Return an error object
  }
});                
