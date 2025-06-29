import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import { client } from '../../lib/sanity'; 

import '../../../../Components/styles/men-product.css'

// Fetch products with category "Shoes"
async function getShoesProducts() {
  const query = `*[_type == "Allproducts" && category == "Shoes"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Shoes() {
  const shoesProducts = await getShoesProducts();

  return (
    <div className="container-shoes">

     <div className="sidebar desktop-only">

      <Sidebar />
     </div>

      <div className="overflow-shoes">
        <div className="products-grid-shoes">
          {shoesProducts.length > 0 ? (
            shoesProducts.map((product, index) => (
              <div key={index} className="product-card-shoes">
                <Link href={`/shop/${product.currentSlug}`}>
                  <Image
                    src={product.images?.[0]?.asset?.url || '/placeholder.png'}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                </Link>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
            ))
          ) : (
            <p>No shoes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
