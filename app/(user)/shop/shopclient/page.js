// 'use client';

// import React, { useState } from 'react'; 
// import Link from 'next/link';
// import Image from 'next/image';
// import '../../../../Components/styles/shop.css';
// import Sidebar from '../../../../Components/Pages/Sidebar';
// import { FiFilter } from 'react-icons/fi';
// import { FiX } from 'react-icons/fi';
// export default function Shop({ products  }) {
//   const Againcategories = [
//     { name: 'Clothes', image: '/clothes.jpg', slug: 'clothes' },
//     { name: 'Shoes', image: '/nike.jpg', slug: 'shoes' },
//     { name: 'Watches', image: '/watch.jpg', slug: 'watches' },
//     { name: 'Electronics', image: '/phones.jpg', slug: 'electronics' },
//     { name: 'Accessories', image: '/acessories.webp', slug: 'accessories' },
//     { name: 'Men', image: '/men.jpg', slug: 'men' },
//     { name: 'Women', image: '/women.jpg', slug: 'women' },
//   ];

//   return (
//     <div className="shop-container">
//       <Sidebar />
//       <div className="product-area">
//         <div className="product-shop">
//           {Againcategories.map((cat, index) => (
//             <div className="product-cart" key={index}>
//               <Link href={`/shop/${cat.slug}`} className="Link-cart">
//                 <div className="card-shop">
//                   <Image
//                     src={cat.image}
//                     width={50}
//                     height={40}
//                     alt={cat.name}
//                     className="cat-image"
//                   />
//                   <div className="card-content-shop">
//                     <h3>{cat.name}</h3>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="scroll-container2">
//           <div className="products-grid">
//             {products && products.length > 0 ? (
//               products.map((product, i) => (
//                 <Link
//                   key={i}
//                   href={`/shop/${product.currentSlug}`}
//                   className="product-card"
//                 >
//                   <Image
//                     src={product.images?.[0]?.asset?.url || '/placeholder.png'}
//                     alt={product.name}
//                     width={150}
//                     height={100}
//                     className="class-image"
//                   />
//                   <h3>{product.name}</h3>
//                   <p className="description">{product.description}</p>
//                   <p>${product.price}</p>
//                 </Link>
//               ))
//             ) : (
//               <p>No products found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';

import React, { useState , useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../../../Components/Pages/Sidebar';
import { FiFilter, FiX } from 'react-icons/fi';
import Loading from './loading';
import '../../../../Components/styles/shop.css';

export default function Shop({ products }) {

  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
    // Simulate initial load delay (or remove this)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return <div> <Loading/></div> ;
  }


  const categories = [


    { name: 'Clothes', image: '/clothes.jpg', slug: 'clothes' },
    { name: 'Shoes', image: '/nike.jpg', slug: 'shoes' },
    { name: 'Watches', image: '/watch.jpg', slug: 'watches' },
    { name: 'Electronics', image: '/phones.jpg', slug: 'electronics' },
    { name: 'Accessories', image: '/acessories.webp', slug: 'accessories' },
    { name: 'Men', image: '/men.jpg', slug: 'men' },
    { name: 'Women', image: '/redbluejacket.jpeg', slug: 'women' },


  ];




  return (
    <div className="shop-container">
      <button
        className="sidebar-toggle-button"
        onClick={() => setSidebarOpen(true)}
      >
        <FiFilter size={20} />
      </button>

      <div
        className={`sidebar mobile-only ${sidebarOpen ? 'open' : ''}`}
      >
        <button
          className="sidebar-close-button"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX size={24} />
        </button>
        <Sidebar />
      </div>

      <div className="sidebar desktop-only">
        <Sidebar />
      </div>

      <div className="product-area">
        <div className="product-shop">
          {categories.map((cat, idx) => (
            <div className="product-cart" key={idx}>
              <Link href={`/shop/${cat.slug}`} className="Link-cart">
                <div className="card-shop">
                  <Image
                    src={cat.image}
                    width={50}
                    height={40}
                    alt={cat.name}
                    className="cat-image"
                  />
                  <div className="card-content-shop">
                    <h3>{cat.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="scroll-container2">
          <div className="products-grid">
            {products?.map((p, i) => (
              <Link
                key={i}
                href={`/shop/${p.currentSlug}`}
                className="product-card"
              >
                <Image
                  src={p.images?.[0]?.asset?.url || '/placeholder.png'}
                  alt={p.name}
                  width={150}
                  height={100}
                  className="class-image"
                />
                <h3>{p.name}</h3>
                <p className="description">{p.description}</p>
                <p>${p.price}</p>
              </Link>
            )) || <p>No products found</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
