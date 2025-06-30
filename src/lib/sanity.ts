import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ENVS } from "../../config";

console.log("Checking environment variables for Sanity...");
for (const key in ENVS) {
  if (!(ENVS as { [key: string]: any })[key]) {
    throw new Error(
      `Environment variable ${key} is not set. Please set it to use Sanity.`
    );
  }
}

export const client = createClient({
  projectId: "2r4yml3y", // Replace with your Sanity project ID
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  // use current date (YYYY-MM-DD) to target the latest API version
  apiVersion: new Date().toISOString().split("T")[0],
  token: ENVS.SANITY_API_TOKEN, // Use an environment variable for the API token
});

// Helper function for generating image URLs with the Sanity Image pipeline
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper function to fetch data from Sanity
export async function fetchSanityData(query: any, params = {}) {
  console.log(
    "Fetching data from Sanity with query:",
    query,
    "and params:",
    params
  );
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return null;
  }
}

// Fetch all posts or a single post by slug
export async function getPosts(slug?: string) {
  let query;
  if (slug) {
    query = `*[_type == "post" && slug.current == $slug]{
      _id,
      title,
      slug,
      body,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      author->{
        name,
        image
      }
    }`;
  } else {
    query = `*[_type == "post"]{
      _id,
      title,
      slug,
      body,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      author->{
        name,
        image
      }
    }`;
  }
  const posts = await fetchSanityData(query, { slug });
  if (!posts) {
    return [];
  }

  return posts;
}
