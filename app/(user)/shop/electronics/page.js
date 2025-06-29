import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import { client } from '../../lib/sanity'; 

import '../../../../Components/styles/men-product.css'

// Fetch products with category "Electronics"
async function getElectronicsProducts() {
  const query = `*[_type == "Allproducts" && category == "Electronics"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Electronics() {
  const electronicsProducts = await getElectronicsProducts();

  return (
    <div className="container-electronics">

     <div className="sidebar desktop-only">

      <Sidebar />
     </div>

      <div className="overflow-electronics">
        <div className="products-grid-electronics">
          {electronicsProducts.length > 0 ? (
            electronicsProducts.map((product, index) => (
              <div key={index} className="product-card-electronics">
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
            <p>No electronics found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
