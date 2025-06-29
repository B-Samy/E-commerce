// 'use client'

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import '../../../Components/styles/shop.css';

// export default function Shop() {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [price, setPrice] = useState(1000);

//   const rangeRef = useRef(null);

//   useEffect(() => {
//     const range = rangeRef.current;
//     if (range) {
//       const percent = (price / 5000) * 100;
//       range.style.background = `linear-gradient(to right, #333 ${percent}%, #ccc ${percent}%)`;
//     }
//   }, [price]);

//   const categories = [
//     'All Products',
//     'Men',
//     'Women',
//     'Accessories',
//     'Shoes',
//     'Electronics',
//     'Outdoors',
//     'Watches',
//     'Skincare',
//     'Books',
//     'Home Decor',
//     'Gaming',
//   ];

//   const Againcategories = [
//     { name: 'Clothes', image: '/clothes.jpg', slug: 'clothes' },
//     { name: 'Shoes', image: '/nike.jpg', slug: 'shoes' },
//     { name: 'Watches', image: '/watch.jpg', slug: 'watches' },
//     { name: 'Electronics', image: '/phones.jpg', slug: 'electronics' },
//     { name: 'Accessories', image: '/acessories.webp', slug: 'accessories' },
//     { name: 'Men', image: '/men.jpg', slug: 'men' },
//     { name: 'Women', image: '/women.jpg', slug: 'women' },
//   ];

//   const filters = ['New Arrivals', 'On Sale', 'Top Rated', 'In Stock'];

//   return (
//     <div className="shop-container">
//       <div className="sidebar">
//         <h3>Categories</h3>
//         {categories.map((category) => {
//           const urlSlug = category.toLowerCase().replace(/\s+/g, '-');
//           return (
//             <label key={category}>
//               <input
//                 type="radio"
//                 name="category"
//                 value={category}
//                 checked={selectedCategory === category}
//                 onChange={() => setSelectedCategory(category)}
//               />
//               <Link href={`/shop/${urlSlug}`} className="category-link">
//                 {category}
//               </Link>
//             </label>
//           );
//         })}

//         <h3>Filters</h3>
//         {filters.map((filter) => (
//           <label key={filter}>
//             <input type="checkbox" />
//             {filter}
//           </label>
//         ))}

//         <h3>Price Range</h3>
//         <div className="price-range">
//           <label>Up to ${price}</label>
//           <input
//             type="range"
//             min="0"
//             max="5000"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//             ref={rangeRef}
//             className="thin-range"
//           />
//         </div>
//       </div>

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
//       </div>
//     </div>
//   );
// }
import { getAllProducts } from '../lib/getProducts';
import ShopClient from './shopclient/page';

export default async function ShopPage() {
  const products = await getAllProducts();

  return <ShopClient products={products} />;
}
