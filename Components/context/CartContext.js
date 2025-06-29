'use client';
import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on first mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage when cartItems change also using getcart items and setitems in local.hos


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const IncreaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const DecreaseQty = () => {
    setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const addProducts = (product, qty = 1) => {
    if (!product || !product._id) return;

    const exist = cartItems.find((item) => item._id === product._id);

    if (exist) {
      toast.success(`${product.name} added to cart!`)
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
        ? { ...item, quantity: item.quantity + qty }
        : item
      )
    );
    } else {
    toast.success(`${product.name} added to cart!`)
      setCartItems([...cartItems, { ...product, quantity: qty }]);
    }
  };


  const removeItem = (_id) => {
  setCartItems(cartItems.filter(item => item._id !== _id));
};

const updateQuantity = (_id, newQty) => {
  if (newQty < 1) return;
  setCartItems(cartItems.map(item =>
    item._id === _id ? { ...item, quantity: newQty } : item
  ));
};


  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <CartContext.Provider
      value={{
         cart,
    setCart,
    quantity,
    setQuantity,
    IncreaseQty,
    DecreaseQty,
    addProducts,
    removeItem,
    updateQuantity,
    cartItems,
    setCartItems,
    totalItems,
    totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
