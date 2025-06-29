'use client'

import Link from 'next/link'
import React from 'react'
import '../../styles/styles2.css'
import Image from 'next/image';

// ICONS 

import { IoShirtSharp } from "react-icons/io5";
import { PiPantsFill , PiHoodieDuotone  } from "react-icons/pi";
import { GiUnderwearShorts ,  GiConverseShoe , GiSkirt  } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";








export default function Niche() {


    const wearItems = [
        {
            title:'Summer Collection',
            image:'/summer.jpg',
            link:'/summer'
        },
        {
            title:'Winter Collection',
           image:'/winter.jpg',
            link:'/winter'
        },
        {
            title:'Shoes Galore',
           image:'/shoes.jpg',
            link:'/autumn'
        },
        {
            title:'Accessories',
            image:'/perfume.jpg',
            link:'/accessories'
        },
               {
            title:'Summer Collection',
            image:'/summer.jpg',
            link:'/summer'
        },
   


        
    ]


const SecondWearItems = [
    {
        title: 'Electronics Deals',
        image: '/watche-clock.png',
        link: '/shop/electronics'
    },
    {
        title: 'Luxury Collection',
        image: '/acessories.webp',
        link: '/shop/accessories'
    },
    {
        title: 'Top Brands',
        image: '/nike.jpg',
        link: '/shop/shoes'
    },
    {
        title: 'New Arrivals',
        image: '/bronsonwatch.webp',
        link: '/shop'
    },
    {
        title: 'Weekly Highlights',
        image: '/clothes.jpg',
        link: '/shop'
    }
];


        const ThirdWearItems = [
    {
        title: 'Smart Phones ',
        image: '/phone16.webp',
        link: '/shop/electronics'
    },
    {
        title: 'Smart Watches',
        image: '/watchesmen.webp',
        link: '/shop/watches'
    },
    {
        title: 'Casual Wear Men',
        image: '/baggy.webp',
        link: 'shop/men'
    },
    {
        title: 'Ethnic Wear Women',
        image: '/redbluejacket.jpeg',
        link: '/shop/women'
    },
    {
        title: 'Sneaker Zone',
        image: '/backnike.webp',
        link: '/shop/shoes'
    }
];
 


  return (


    <>

<div className="niche">
    <div className="niche-div">
        <h1>NICHE   PRODUCT</h1>
    </div>



<div className="main-catalogdiv">

    
<div className="container"></div>
  <ul id="cards">
    <li className="card" id="card">
      <div className="card-body">






    <div className="div-block-superbig">

<div className="wears">

      <div className="wear-item">
        <Link href="/shop/men" className="shirt-wear">
          <IoShirtSharp size={38} />
        </Link>
        <div className="label"><p>T-SHIRT WEAR</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/men" className="pant-wear">
          <PiPantsFill size={38} />
        </Link>
        <div className="label"><p>PANT'S</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/men" className="shorts-wear">
          <GiUnderwearShorts size={38} />
        </Link>
        <div className="label"><p>SHORT'S WEAR</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/men" className="hoodie-wear">
          <PiHoodieDuotone size={38} />
        </Link>
        <div className="label"><p>HOODIE'S</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/shoes" className="shoes-wear">
          <GiConverseShoe size={38} />
        </Link>
        <div className="label"><p>SHOE WEAR'S</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/women" className="skirts-wear ">
          <GiSkirt size={38} />
        </Link>
        <div className="label"><p>SKIRT'S</p></div>
      </div>

      <div className="wear-item">
        <Link href="/shop/women" className="women-wear hide-onMobile">
          <GrRestroomWomen size={38} />
        </Link>
        <div className="label"><p>WOMEN'S WEAR</p></div>
      </div>

    </div>


    {/* cards  */}



   <div className="wear-grid">

      {wearItems.map((item, index) => (
        <div key={index} className="wear-card">
          <div className="wear-card-image">
               <Image
     src={item.image}
    alt={item.title}
    fill
    style={{ objectFit: 'cover' }}
    className="card-img"
  />
          </div>
          <div className="wear-card-content">
            <h3>{item.title}</h3>
            <Link href={item.link} className="go-button">View Collections</Link>
          </div>
        </div>
      ))}


    </div>


    </div>




      </div>
    </li>


    <li className="card" id="card">
      <div className="card-body">




    <div className="div-block-superbig">



    {/* cards  */}



   <div className="wear-grid">

      {SecondWearItems.map((item, index) => (
        <div key={index} className="wear-card">
          <div className="wear-card-image">
               <Image
     src={item.image}
    alt={item.title}
    fill
    style={{ objectFit: 'cover' }}
    className="card-img"
  />
          </div>
          <div className="wear-card-content">
            <h3>{item.title}</h3>
            <Link href={item.link} className="go-button">View Collections</Link>
          </div>
        </div>
      ))}


    </div>


    </div>


      </div>
    </li>   <li className="card" id="card">
      <div className="card-body">




    <div className="div-block-superbig">



    {/* cards  */}



   <div className="wear-grid">

      {ThirdWearItems.map((item, index) => (
        <div key={index} className="wear-card">
          <div className="wear-card-image">
               <Image
     src={item.image}
    alt={item.title}
    fill
    style={{ objectFit: 'cover' }}
    className="card-img"
  />
          </div>
          <div className="wear-card-content">
            <h3>{item.title}</h3>
            <Link href={item.link} className="go-button">View Collections</Link>
          </div>
        </div>
      ))}


    </div>


    </div>


      </div>
    </li>
  </ul>





{/* main catalog div here below  */}
</div>


</div>

    </>


  )
}
