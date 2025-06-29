import { client } from './sanity';

// Fetch all products
export async function getAllProducts() {
  const query = `*[_type == "Allproducts"]{
    name,
    'currentSlug': slug.current,
    images[]{ asset->{ url } },
    description,
    price,
    category
  }`;
  return await client.fetch(query);
}

// Fetch products by category
export async function getProductsByCategory(category) {
  const query = `*[_type == "Allproducts" && category == $category]{
    name,
    'currentSlug': slug.current,
    images[]{ asset->{ url } },
    description,
    price,
    category
  }`;
  return await client.fetch(query, { category });
}
