import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import Link from 'next/link';
import '../../../../Components/styles/men-product.css';
import { client } from '../../lib/sanity'; 
import { FiX , FiMenu } from 'react-icons/fi';
// fetch products with category "Men"
async function getMenProducts() {
  const query = `*[_type == "Allproducts" && category == "Men"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query);
}

export default async function Men() {
  const menProducts = await getMenProducts();

  return (
    <div className="container-men">



      {/* Desktop Sidebar */}
      <div className="sidebar desktop-only">
        <Sidebar />
      </div>

<div className="overflow-container">

      <div className="products-grid2">
        {menProducts.length > 0 ? (
          menProducts.map((product, index) => (
            <div key={index} className="product-card2">
              <Link href={`/shop/${product.currentSlug}`}>
                <Image
                  src={product.images?.[0]?.asset?.url || '/placeholder.png'}
                  alt={product.name}
                  width={100}
                  height={100}
                  
                />
              </Link>
              <h3>{product.name}</h3>
              <p className='product-price'>${product.price}</p>
              <p className='product-description'>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No mens products found.</p>
        )}
      </div>
</div>
    </div>
  );
}
