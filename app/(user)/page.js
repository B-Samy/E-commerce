'use client';
import {  useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Ghost from '../../public/facenext.jpeg';
import PersonDivSoc from '../../public/facenext2.jpeg';
import GlassSpec from '../../public/Glass.jpeg';

import { useUser } from '@clerk/nextjs';
import Niche from '@/Components/Pages/Niche/page';
import Containerscroll from '../../Components/Pages/Containerscroll';
import Marquee from '@/Components/Pages/Marquee';
import Cart from '@/Components/Pages/Cart';
import { CartContext } from '../../Components/context/CartContext';

export default  function Home() {
  const [mainImage, setMainImage] = useState(Ghost);

  
  
  return (
    <>

    <div className="homepage">


      <motion.div
        id="image-gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main Image with fast fade-in */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={mainImage}
            alt="Main display"
            width={1400}
            height={800}
            className="main-image"
            priority
          />
        </motion.div>

        {/* Thumbnail Section */}
        <motion.div
          className="stackdiv"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h1>BENSHI</h1>

          {/* Thumbnails */}
          <motion.ul
            className="thumbnails"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05, // very fast stagger
                },
              },
            }}
          >
            {[Ghost, PersonDivSoc, GlassSpec].map((img, idx) => (
              <motion.li
                key={idx}
                onClick={() => setMainImage(img)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Image src={img} alt={`Thumb ${idx + 1}`} width={300} height={200} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Optional: Quick fade-in for other sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <Niche />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
      </motion.div>
    </div>

        <Containerscroll />
        <Marquee/>

    </>
  );
}
