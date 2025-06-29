import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import '../../../../Components/styles/men-product.css';  
import { client } from '../../lib/sanity';

// Fetch watch products from Sanity
async function getWatchProducts() {
  const query = `*[_type == "Allproducts" && category == "Watches"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Watch() {
  const watchProducts = await getWatchProducts();

  return (


    <div className="container-watch">

     <div className="sidebar desktop-only">

      <Sidebar />
     </div>

      <div className="overflow-watch">
        <div className="products-grid-watch">
          {watchProducts.length > 0 ? (
            watchProducts.map((product, index) => (
              <div key={index} className="product-card-watch">
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
            <p>No watch products found.</p>
          )}
        </div>
      </div>
    </div>



  );
}
