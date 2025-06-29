'use client'

import React, { useEffect } from 'react'
import '../../../Components/styles/AllLoading.css'
import { useRouter } from 'next/navigation'
export default function OrderSuccess() {
const router = useRouter();

useEffect(() => {
  setTimeout(() => {
    router.push('/contact');
}, 2000)});

  return (
    <>

 <div className="what-the-sky-body">
      <div className="tankyuu-card">
        <div className="cloud-melon-checkmark-box">
          <i className="flying-goose-checkmark">✓</i>
        </div>
        <h1 className="banana-burst-heading">Success</h1>
        <p className="potato-chip-message">
          We received your purchase request;<br /> we"ll be in touch shortly!
        </p>
      </div>
    </div>

    </>
  )
}
