'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import '../../../../Components/styles/Now-contact.css'
import Loading from './loading';

const allowedAdmins = ['shaheerrangrej@gmail.com', 'another.admin@domain.com'];

export default function AdminContactPage() {
  const { user, isLoaded } = useUser();
  const [contacts, setContacts] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (isLoaded && user && allowedAdmins.includes(user.primaryEmailAddress.emailAddress)) {
      setLoadingData(true);
      fetch('/api/contact-list')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch contacts');
          return res.json();
        })
        .then((data) => {
          setContacts(data.contacts || []);
          setLoadingData(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoadingData(false);
        });
    }
  }, [isLoaded, user]);

  if (!isLoaded) return Loading();

  if (!user || !allowedAdmins.includes(user.primaryEmailAddress.emailAddress)) {
    return <p>Access denied. You are not an admin.</p>;
  }

  const deleteContact = async (id) => {
    try {
      const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete contact');
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert('Error deleting contact: ' + err.message);
    }
  };

  return (
    <div className="spicy-beans-container">
    <h1 className="dragon-title">Admin Dashboard</h1>

    {loadingData && Loading()}
    {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    <ul className="lizard-list">
      {contacts.map((c) => (
        <li key={c._id} className="toaster-card">
          <h2 className="watermelon-header">{c.name}</h2>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Message:</strong> {c.message}</p>
          <p><strong>Date:</strong> {new Date(c.createdAt).toLocaleString()}</p>
          <button
            className="banana-blast-button"
            onClick={() => deleteContact(c._id)}
          >
            Delete
          </button>
        </li>
      ))}
      {contacts.length === 0 && !loadingData && <p>No contacts found.</p>}
    </ul>
  </div>
  );
}
