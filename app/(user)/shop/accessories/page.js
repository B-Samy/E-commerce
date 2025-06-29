import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import { client } from '../../lib/sanity'; 

// fetch products with category "Accessories"
async function getAccessoriesProducts() {
  const query = `*[_type == "Allproducts" && category == "Accessories"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Accessories() {
  const accessoriesProducts = await getAccessoriesProducts();

  return (

    <div className="container-accessories">
     <div className="sidebar desktop-only">

      <Sidebar />
     </div>

      <div className="overflow-accessories">
        <div className="products-grid-accessories">
          {accessoriesProducts.length > 0 ? (
            accessoriesProducts.map((product, index) => (
              <div key={index} className="product-card-accessories">
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
            <p>No accessories found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
