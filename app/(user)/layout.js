
import { Instrument_Serif } from 'next/font/google';
import '../../Components/styles/style.css';
import '../../Components/styles/styles2.css';
import Navbar from '../../Components/Hero-ui/Navbar';
import { ClerkProvider , ClerkLoaded , ClerkLoading } from '@clerk/nextjs';
import Footer from '@/Components/Hero-ui/Footer';

import { Toaster } from 'react-hot-toast';

import { CartProvider } from '../../Components/context/CartContext';
import Loading from './loading';



const instrumentSerif = Instrument_Serif({
  weight: '400',
  variable: '--font-instrument-serif',
  subsets: ['latin'],
});

export const metadata = {
  title: ' Bento - Commerce',
  description: 'Using Instrument Serif in Next.js',
};

export default function RootLayout({ children }) {
  return (

    
    <ClerkProvider>
    <html lang="en">

      <body className={instrumentSerif.variable}>
    <CartProvider>
      < Navbar />
        {children}
        <Toaster position='top-center'
        />


    </CartProvider>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
