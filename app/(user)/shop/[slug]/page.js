import Image from 'next/image';
import {client} from '../../lib/sanity'
import '../../../../Components/styles/slug-query.css'
import Link from 'next/link';
import {  FaPlus, FaMinus } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { SiRazorpay } from 'react-icons/si';
import QuantityInput from '@/Components/Pages/QuantityInput';
import Addtocart from '@/Components/Pages/Addtocart';



async function getProduct(slug) {
  const query = `*[_type == "Allproducts" && slug.current == $slug][0]{
   _id,
    name,
    description,
    price,
    images[]{ asset->{ url } }
  }`;
  return await client.fetch(query, { slug });
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);

  

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>

    <div className="slug-container">


    <div className='product-slug'>
      <h3 >{product.name}</h3>

      <Image
        src={product.images?.[0]?.asset?.url || '/placeholder.png'}
        alt={product.name}
        width={300}
        height={300}
        
      />

      <p className='product-desc'>{product.description}</p>
      <hr />

      <p className='product-price'>${product.price}</p>
    </div>


    <div className="slug-review">
      <h1>{product.name}</h1>

   

      <div className="rating-slugs">

   <div className="description-slug">
      <p> <strong>Description :</strong>
      <br />
      <br />
      {product.description}
      </p>
    </div>

<div className="star-rating" aria-label="4.5 star rating">
  <span className="star full">&#9733;</span>
  <span className="star full">&#9733;</span>
  <span className="star full">&#9733;</span>
  <span className="star full">&#9733;</span>
  <span className="star half">&#9733;</span>
  
</div>

<p>359 reviews</p>
      <br />

<h2> <span className='classspan'>$1999</span> &nbsp; &nbsp;  ${product.price}</h2>


{/* color picker  */}
<div className="colors">

 <div className="color-picker">
      <label>
        <input type="radio" name="color" className="color-box color-black" />
      </label>
      <label>
        <input type="radio" name="color" className="color-box color-white" />
      </label>
      <label>
        <input type="radio" name="color" className="color-box color-lime" />
      </label>
      <label>
        <input type="radio" name="color" className="color-box color-navy" />
      </label>
    </div>
<div className="cart-card-style-fle">


<QuantityInput/>
<Addtocart product={product}/>

</div>

</div>

    <div className="secure-payment">
      <p>Delivery Terms & Condition</p>
      <h3> Secure payment with</h3>
      <div className="payment-icons">
        <FaCcMastercard className="icon" />
        <FaCcVisa className="icon" />
        <SiRazorpay className="icon" />
      </div>
    </div>

{/* color picker  */}

      </div>

    </div>

  
    {/* hre above slug review  */}

      

    </div>


</>
  );
}
