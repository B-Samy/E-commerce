import Sidebar from '@/Components/Pages/Sidebar'
import React from 'react'
import '../../../../Components/styles/men-product.css'
import {client} from '../../lib/sanity'
import Link from 'next/link';
import Image from 'next/image';

async function getWomenProducts() {
  const query = `*[_type == "Allproducts" && category == "Women"]{
    name,
    'currentSlug': slug.current,
    description,
    price,
    images[]{ asset->{ url } }
  }`; 

  return await client.fetch(query);
}




export default async function Women() {
  const womenProducts = await getWomenProducts();
  console.log(womenProducts);

  return (
    <>
    <div className="container-women">

 <div className="sidebar desktop-only">

    <Sidebar/>
 </div>



<div className="overflow-container">

      <div className="women-product-grid2">
        {womenProducts.length > 0 ? (
          womenProducts.map((product, index) => (
            <div key={index} className="women-product-card2">
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
          <p>No mens products found.</p>
        )}
      </div>
</div>

    </div>
    </>
  )
}
