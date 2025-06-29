'use client'

import '../styles/slug-query.css';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const Addtocart = ({product}) => {


const { addProducts , quantity , cartItems } = useContext(CartContext);

return (
    <>


  <div className="button-cart-slug">
        <button className="cart-button" onClick={()=> addProducts(product , quantity )}>
          <FaShoppingCart className="cart-icon" />
          Add to Cart
        </button>
    </div>

    </>
)
}


export default Addtocart;