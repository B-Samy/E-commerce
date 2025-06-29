'use client' 
import '../styles/slug-query.css'
import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from 'react';

const QuantityInput = () =>{
const {quantity , setQuantity , IncreaseQty, DecreaseQty} = useContext(CartContext);

return (

    <>
<div className="cart-increment">
  <button className="decrement-button" onClick={DecreaseQty}>-</button>
  <span className="item-count">{quantity}</span>
  <button className="increment-button" onClick={IncreaseQty}>+</button>
</div>

    </>
)
}


export default QuantityInput;