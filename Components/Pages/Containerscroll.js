import React from 'react'
import '../styles/style3.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Containerscroll() {

  const RecommendedData = [
    {
      title: 'Nike Air More Uptempo 96 Men Basketball Shoes',
      image: '/nike.jpg',
      description:'The Nike Air More Uptempo 96 brings back a bold 90s design with its iconic oversized "AIR" branding. Built with a durable leather upper and full-length Max Air cushioning',
      price: 'Explore the Collection',
    },
    {
      title:'Regular Fit Coated Jacket H&M',
      image:'/men.jpg', 
      description:'A sleek, lightweight jacket with a coated finish for a water-repellent effect. Designed in a regular fit for easy layering, it features a zip front, stand-up collar, and snap-button cuffs',
      price: 'Own the Outfit',
    },
    {
      title:'Men Regular Fit Sweatpants',
      image:'/clothes.jpg',
      description:'Comfort meets everyday style. These sweatpants feature a regular fit with a straight-leg cut, an elastic waistband with drawstring, and side pockets for convenience.',
      price: 'Style It Your Way',
    },
    {
      title:'Rolex Deepsea Sea-Dweller 116660',
      image:'/watch.jpg',
      description:'Engineered for extreme depths, the Rolex Deepsea Sea-Dweller 116660 is a professional-grade dive watch built to withstand underwater pressure up to 3,900 meters (12,800 feet).',
      price: 'Step Into Luxury',
    },
    {
      title:'A daring scent that unveils layers of smoky amber and deep jasmine, leaving behind a trail of intrigue',

      image:'/perfume.jpg',
      description:'A bold, masculine fragrance crafted for the modern man. Aris The Expensive One opens with fresh citrus and spicy notes, blending into a warm heart of woods and amber,',
      price: 'Uncover the Essence',
    }
  ]

  return (

    <>

<div className="container-jitter">
  <div className="container-scroll">
  <h1 className='text-jitter'>UNVIEL THE POWER OF <span className='bento-jitter'>BENTO</span></h1>
    <div className="jitter_id">
      <video src='/mockup.mp4'   
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className='video-jitter'

  ></video>
    </div>

    </div>

    <div className="scroller-jitter">
<h1 className='jitter-4'>Recommended Just for You</h1>
    {RecommendedData.map((item, index) => (
      <div key={index} className="item-jitter">
      <Image
      src={item.image}
      alt={item.title}
      className='image-card-jitter'
      width={200}
      height={150}
      />
        <h3 className='title-jitter'>{item.title}</h3>
        <p className='desc-jitter'>{item.description}</p>
        <button className='class-button'>
        <Link href={'/'} className='class-child-button'>{item.price}</Link>
        </button>

      </div>
    ))}
    </div>
   
</div>
    </>
  )
}
