'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import '../styles/shop.css'

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [price, setPrice] = useState(1000);
  const rangeRef = useRef(null);

  useEffect(() => {
    const range = rangeRef.current;
    if (range) {
      const percent = (price / 5000) * 100;
      range.style.background = `linear-gradient(to right, #333 ${percent}%, #ccc ${percent}%)`;
    }
  }, [price]);

  const categories = [
    '/', 'Men', 'Women', 'Accessories', 'Shoes',
    'Electronics', 'Outdoors', 'Watches', 'Skincare',
    'Books', 'Home Decor', 'shop',
  ];

  const filters = ['New Arrivals', 'On Sale', 'Top Rated', 'In Stock'];

  return (
    <div className="shop-container">
      <div className="sidebar">
        <h3>Categories</h3>
        {categories.map((category) => {
          const urlSlug = category.toLowerCase().replace(/\s+/g, '-');
          return (
            <div key={category} className="category-item">
              <label>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <Link href={`/shop/${urlSlug}`} className="category-link">
                  {category}
                </Link>
              </label>
            </div>
          );
        })}

        <h3>Filters</h3>
        {filters.map((filter) => (
          <label key={filter}>
            <input type="checkbox" />
            {filter}
          </label>
        ))}

        <h3>Price Range</h3>
        <div className="price-range">
          <label>Up to ${price}</label>
          <input
            type="range"
            min="0"
            max="5000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            ref={rangeRef}
            className="thin-range"
          />
        </div>
      </div>
    </div>
  );
}
