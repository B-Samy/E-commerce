'use client'

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
import { FaCcPaypal, FaCcVisa, FaCcAmex, FaCcMastercard } from 'react-icons/fa';
import '../styles/footer.css'
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="footer-contact footer-section">
          <h6>Contact Us</h6>
          <p className="one">
            Hi, we are always open for cooperation and suggestions,
            <br /> contact us in one of the ways below
          </p>
          <div className="footer-details">
            <div>
              <p>Phone number</p>
              <span><a href="tel:+18000600730">+1 (800)060-07-30</a></span>
            </div>
            <div>
              <p>Email address</p>
              <span><a href="mailto:us@example.com">us@example.com</a></span>
            </div>
            <div>
              <p>Our location</p>
              <span>751 Fake Street, New York<br />10021 USA</span>
            </div>
            <div>
              <p>Working hours</p>
              <span>Mon-Sat 10:00am - 7:00pm</span>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <h6>Information</h6>
          <p><Link href="#">About Us</Link></p>
          <p><Link href="#">Delivery Information</Link></p>
          <p><Link href="#">Privacy Policy</Link></p>
          <p><Link href="#">Brands</Link></p>
          <p><Link href="#">Contact Us</Link></p>
          <p><Link href="#">Returns</Link></p>
          <p><Link href="#">Site Map</Link></p>
        </div>

        <div className="footer-account">
          <h6>My Account</h6>
          <p><Link href="#">Store Location</Link></p>
          <p><Link href="#">Order History</Link></p>
          <p><Link href="#">Wish List</Link></p>
          <p><Link href="#">Newsletter</Link></p>
          <p><Link href="#">Special Offers</Link></p>
          <p><Link href="/admin/dashboard">Admin Dashboard</Link></p>
          <p><Link href="#">Affiliate</Link></p>
        </div>

        <div className="footer-newsletter">
          <h6>Newsletter</h6>
          <p>
            Enter your email address below to subscribe to our newsletter
            <br /> and keep up to date with discounts and special offers
          </p>
          <input type="email" name="email" placeholder="user@example.com" />
          <button>Subscribe</button>
          <p>Follow us on social networks</p>
          <div className="social-icons">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="https://rss.com" target="_blank" rel="noopener noreferrer">
              <FaRss />
            </Link>
          </div>
        </div>
      </footer>

      <div className="footer-2">
<p>
  © {new Date().getFullYear()} <span className='bento-grid-mate'>BENTO</span> – Your Trusted E-Commerce Partner
</p>

        <div className="icons">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaCcPaypal size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaCcVisa size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaCcAmex size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaCcMastercard size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
