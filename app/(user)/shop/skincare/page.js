import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import '../../../../Components/styles/men-product.css';  // Skincare CSS
import { client } from '../../lib/sanity';

// Fetch skincare products
async function getSkincareProducts() {
  const query = `*[_type == "Allproducts" && category == "Skincare"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Skincare() {
  const skincareProducts = await getSkincareProducts();

  return (
    <div className="container-skincare">

     <div className="sidebar desktop-only">

      <Sidebar />
     </div>

      <div className="overflow-skincare">
        <div className="products-grid-skincare">
          {skincareProducts.length > 0 ? (
            skincareProducts.map((product, index) => (
              <div key={index} className="product-card-skincare">
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
            <p>No skincare products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
