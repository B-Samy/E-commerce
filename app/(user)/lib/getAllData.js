import { client } from './sanity';

export async function getAllProducts() {
  return await client.fetch(`*[_type == "Allproducts "] | order(_createdAt asc){
    name,
    'currentSlug':slug.current,
    images[]{ asset->{ url } },
    description,
    price
  }`);
}
