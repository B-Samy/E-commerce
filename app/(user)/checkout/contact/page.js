'use client'

import toast from 'react-hot-toast';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../Components/context/CartContext';
import Image from 'next/image';
import { FaBox, FaCheck, FaCreditCard } from 'react-icons/fa';
import '../../../../Components/styles/checkout.css';
import { useRouter } from 'next/navigation';

// Razorpay script loader helper
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-script')) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function CheckoutContact() {
  const { cartItems } = useContext(CartContext);

  const totalAmount = parseFloat(
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !city || !code || !address) {
       toast.error('Oops! Looks like something"s missing.')
      return;
    }
    alert('Form submitted! You can now proceed to payment.');
  };

  const handleRazorpayPayment = async () => {
    if (!name || !email || !phone || !address || !city || !code) {
   toast.error('Oops! Looks like something"s missing.')
      return;
    }

    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalAmount }),
    });

    const data = await res.json();

    if (!data.orderId) {
      toast.error('Failed to initiate payment');
      return;
    }

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error('Failed to load Razorpay SDK. Please check your connection.');
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: Math.round(totalAmount * 100),
      currency: 'INR',
      name: 'Bento Pay',
      description: 'Order Payment',
      order_id: data.orderId,
      prefill: {
        name,
        email,
        contact: phone,
      },
      notes: {
        address: `${address}, ${city}, ${code}`,
      },
      theme: {
        color: '#000',
      },
      handler: function (response) {
        console.log('Payment success:', response);
        router.push('/order-success');
        toast.success('Payment successful! ✅');
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <div className="checkout-page-container">
        <div className="order-summary-section" style={{ padding: '2rem' }}>
          <h1>
            <FaBox /> BENTO PAY
          </h1>
          <h3>Order Summary</h3>

          <ul className="order-summary-list">
            {cartItems.map((item) => (
              <li key={item._id} className="order-summary-item">
                <Image
                  src={item.images?.[0]?.asset?.url || '/placeholder.png'}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="order-summary-image"
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Price: ${item.price} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="total-due">Total due : ${totalAmount.toFixed(2)}</h3>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group-email">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
            />
          </div>

          <h4>Shipping Address</h4>

          <div className="form-group-name">
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group-phone">
            <label>Phone</label>
            <input
              type="number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876543210"
            />
          </div>

          <div className="form-group-city">
            <label>City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Mumbai"
            />
          </div>

          <div className="form-group-postal-code">
            <label>Postal Code</label>
            <input
              type="number"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="12345"
            />
          </div>

          <div className="form-group-address">
            <label>Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street address, apartment, suite, etc."
            />
          </div>

          <div className="billing-address-checkbox">
            <input type="checkbox" id="billing-same" />
            <label htmlFor="billing-same">Billing address same as shipping</label>
          </div>

          <button type="submit" className="form-submit-btn">
            <FaCheck style={{ marginRight: '0.5rem' }} />
            Submit Form
          </button>

          <button
            type="button"
            className="pay-button"
            onClick={handleRazorpayPayment}
          >
            <FaCreditCard style={{ marginRight: '0.5rem' }} />
            Bento Pay
          </button>
        </form>
      </div>
    </>
  );
}
