'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useContext } from 'react';
import '../styles/shop.css'
import Link from 'next/link';


import { CartContext } from '../context/CartContext';

  const Cart = () => {

    const [cartHide , setcartHide] = useState(true);
    
    const { cart, setCart , cartItems , removeItem , updateQuantity } = useContext(CartContext);

    const closeCart = () =>{
      setCart(false)
    }

    
  
 return (
    <>

 <div
  className="cart-sidebar"
  aria-modal="true"
  role="dialog"
  tabIndex="-1"
>
// here cart close items updating 

           <button className="cart-close-button" onClick={closeCart}>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="cart-close-icon"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
    

  <div className="cart-body">
    <ul className="cart-items">
      {/* No products here, empty list */}
    </ul>

{/* cart here  */}



<div className="cart-again">
  {cartItems.map((product, index) => (
    <div className="cart-item" key={product._id || index}>
      <div className="cart-image">
        <Image
          src={product.images?.[0]?.asset?.url || '/placeholder.png'}
          alt={product.name}
          width={100}
          height={100}
        />
      </div>

      <div className="cart-details">
        <h2 className="cart-name">{product.name}</h2>

        <div className="cart-qty-controls">
          <button onClick={() => updateQuantity(product._id, product.quantity - 1)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => updateQuantity(product._id, product.quantity + 1)}>+</button>
        </div>

        <p className="cart-meta">Price: ${product.price}</p>

        <button className="remove-btn" onClick={() => removeItem(product._id)}>
          Remove
        </button>
      </div>
    </div>
  ))}
</div>




{/* cart end here  */}


    <div className="cart-actions">

{cartItems.length > 0 ? (
  <div>
      <Link href="/checkout/contact" className="cart-checkout-btn">Checkout</Link> 
  </div>
):(
         <div>
      <Link href="/shop" className="cart-continue-link">Continue shopping</Link> 



  
  
  
        </div>
)}
    </div>
  </div>
</div>

    </>

  );
}


export default Cart;
