'use client';

import { useState , useRef , useEffect, useContext } from 'react';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';

import Image from 'next/image';
import { FiBox, FiShoppingBag, FiSmartphone, FiBookOpen, FiWatch, FiCpu, FiGift, FiHeart , FiTag , FiSearch } from 'react-icons/fi';


import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';

import Cart from '../Pages/Cart';
import toast from 'react-hot-toast';

const Navbar = () => {


  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);


  const {cart , setCart , cartItems} = useContext(CartContext);
  const toggleCart = () => {
    setCart(true)
  }

 const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);



  const categories = [
  'men',
  'women',
  'accessories',
  'clothing',
  'shoes',
  'electronics',
  'gadgets',
  'watches',
  'bags',
  'skincare',

];



const iconMap = {
  men: FiShoppingBag,
  women: FiShoppingBag,
  accessories: FiGift,
  clothing: FiShoppingBag,
  shoes: FiShoppingBag,
  electronics: FiSmartphone,
  furniture: FiBox,
  books: FiBookOpen,
  gadgets: FiCpu,
  gaming: FiCpu,
  outdoors: FiHeart,
  kitchenware: FiBox,
  watches: FiWatch,
  bags: FiShoppingBag,
  skincare: FiHeart,
  fitness: FiHeart,
  toys: FiGift,
  pets: FiHeart,
  'car accessories': FiBox,
  'office supplies': FiBox,
  'art & craft': FiGift,
  'baby care': FiHeart,
  'home decor': FiBox,
};



  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const term = searchTerm.trim().toLowerCase();
      if (categories.includes(term)) {
        router.push(`${term}`);
      } else {
        toast.error('Category not found!');
      }
    }
  }

  function handleSelect(e) {
    const category = e.target.value;
    if (category) {
      router.push(`${category}`);
    }
  }


 const inputRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0, width: 0 });

  useEffect(() => {
    function updatePosition() {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        setDropdownPos({ left: rect.left, top: rect.bottom + 8, width: rect.width });
      }
    }

    updatePosition();

    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);



  return (
    <>

{cart && <Cart/>   }

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="logo-nav">
          <Link href="/" className="bento">BENTO</Link>
        </div>

        <main>
          <select onChange={handleSelect} defaultValue="">
            <option value="" disabled>ALL CATEGORY</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
          </select>
        </main>
  
<div className="search-container">
  <input
  ref={inputRef}
    type="text"
    placeholder="Search category..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={handleKeyDown}
    aria-label="Search category"
  />
  <span className="search-icon"><FiSearch /></span>

  {searchTerm && (
    
    <ul className="search-suggestions">

      {categories
        .filter((category) =>
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((match, index) => (
          <li
            key={index}
            className="suggestion-item"
            onClick={() => {
              router.push(`shop/${match.replace(/\s+/g, '-').toLowerCase()}`);
              setSearchTerm('');
            }}
          >
            <FiTag className="suggestion-icon" />
            {match.charAt(0).toUpperCase() + match.slice(1)}
          </li>
        ))}
    </ul>
  )}
</div>


      <div className="cart-icon">
      <button className={`cart ${itemCount > 0 ? 'has-items' : ''}`} onClick={toggleCart}>
        <IoCartOutline size={18} />
        <span className='cart-num'>{itemCount > 0 ? itemCount : 0}</span>
      </button>
    </div>




        <div className="clerk-env">
          <SignedOut>
            <SignInButton>
              <button className="round-icon-button" aria-label="Sign In">
                <FiUser size={18} />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.header>

      {/* Nav Links - always visible on desktop */}
      <nav className={`nav-header ${menuOpen ? 'open' : ''}`}>
        <hr className="center-line" />
        <ul className="nav-list">
          <li><Link href="/">HOME</Link></li>


          <li><Link href="/shop">SHOP/PRODUCTS</Link></li>
      {/* menubar  */}


    {/* menubar  */}


          <li><Link href="/deals">DEALS/OFFER</Link></li>


    {/* menu bar  */}

          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/admin/dashboard">DASHBOARD</Link></li>
          <p className="use-user">
            {isSignedIn
              ? `Hey, ${user.firstName || user.username || 'user'} 👋`
              : 'Welcome! Sign in for a better experience.'}
          </p>
        </ul>
      </nav>

      {/* Animated mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-header mobile-only"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
            >
              {[
                { label: 'HOME', href: '/' },
                { label: 'SHOP/PRODUCTS', href: '/shop' },
                { label: 'DEALS/OFFER', href: '/deals' },
                { label: 'CONTACT', href: '/about' },
                { label: 'TESTIMONIALS', href: '/testimonials' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.li>
              ))}

              <motion.p
                className="use-user"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {isSignedIn
                  ? `Hey, ${user.firstName || user.username || 'user'} 👋`
                  : 'Welcome! Sign in for a better experience.'}
              </motion.p>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>


    </>
  );
}


export default Navbar;