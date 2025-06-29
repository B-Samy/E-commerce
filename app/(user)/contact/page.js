'use client'

import Loading from "./loading";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import React, { useState , useEffect} from "react";
import '../../../Components/styles/Now-contact.css'

import toast from "react-hot-toast";

export default function Contact() {

  const [loading , setLoading] = useState(true);

  const [name, setname ] = useState('');
  const [email, setemail ] = useState('');
  const [message, setmessage ] = useState('');
  const [currentStatus , setCurrentStatus] = useState('')

    useEffect(() => {
    // Simulate initial load delay (or remove this)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return <div> <Loading/></div> ;
  }

  const handleSubmitForm = async (e) =>{
    e.preventDefault();

    if(!name.trim() || !email.trim() || !message.trim()){
      setCurrentStatus(
        toast.error('Oops! Looks like something"s missing.')
      )
      return;
    }
    
    const res = await fetch('/api/contact',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, message}),
    });

    const data = await res.json();
    
    if(!res.ok){
      console.error('Something went wrong' , data.error)
      setCurrentStatus('Something went wrong')
      return;
    }else{
      console.log('Message sent successfully', data.message)
      setCurrentStatus(
        toast.success('Submission complete. Thanks for reaching out!')
      )
      setname('');
      setemail('');
      setmessage('');

    }
  }





  return (
    <section className="zogwump-bg">
      <div className="flizzle-container">
        <div className="glomp-flex">
          <div className="floop-left">
            <h1 className="blorp-heading">
              Contact us for <br /> more info
            </h1>

            <div className="splork-contact-list">
              <p className="quibber-item">
                <FaMapMarkerAlt className="quibber-icon" />
                <span className="quibber-text">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="quibber-item">
                <FaPhoneAlt className="quibber-icon" />
                <span className="quibber-text">(257) 563-7401</span>
              </p>

              <p className="quibber-item">
                <FaEnvelope className="quibber-icon" />
                <span className="quibber-text">acb@example.com</span>
              </p>
            </div>

            <div className="flibble-follow-us">
              <h3 className="flibble-heading">Follow us</h3>

              <div className="glop-social-links">
                <Link href="#" className="glop-social-icon">
                  <FaTwitter size={32} />
                </Link>
                <Link href="#" className="glop-social-icon">
                  <FaLinkedinIn size={32} />
                </Link>
                <Link href="#" className="glop-social-icon">
                  <FaFacebookF size={32} />
                </Link>
                <Link href="#" className="glop-social-icon">
                  <FaInstagram size={32} />
                </Link>
              </div>
            </div>
          </div>

          <div className="floop-right">
            <div className="bloop-form-wrapper">
              <h1 className="bloop-form-heading">What do you want to ask</h1>

              <form className="bloop-form" onSubmit={handleSubmitForm}>
                <div className="bloop-form-group">
                  <label className="bloop-label">Full Name</label>
                  <input
                  required
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    className="bloop-input"
                  />
                </div>

                <div className="bloop-form-group">
                  <label className="bloop-label">Email address</label>
                  <input
                  required
                    type="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    placeholder="johndoe@example.com"
                    className="bloop-input"
                  />
                </div>

                <div className="bloop-form-group">
                  <label className="bloop-label">Message</label>
                  <textarea
                  required
                  value={message}
                    onChange={(e)=>setmessage(e.target.value)}
                    placeholder="Message"
                    className="bloop-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="bloop-submit-btn">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
