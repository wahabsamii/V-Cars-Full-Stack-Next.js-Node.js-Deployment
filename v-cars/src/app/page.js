"use client";
import HomeSlider from '@/components/HomeSlider'
import React, { useEffect } from 'react';
import '../globals.css'
import CircleGallery from '@/components/CircleGallery';
import WashWork from '@/components/WashWork';
import BookHome from '@/components/BookHome';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { HiSparkles } from "react-icons/hi2";
 // you can change FaStar to any icon from react-icons
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
   const items = [
    "Specialized treatments like ceramic coatings.",
    "They may also state their mission to provide the best car care services.",
    "This can build trust and confidence in their services.",
  ];

  useEffect(() => {
      AOS.init({ duration: 1200 }); // duration in ms
    }, []);

  return (
    <>
    <Header />
      <HomeSlider />
      <section className='flex flex-col sm:flex-row justify-between gap-5 p-5 my-5' data-aos="fade-up">
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <img src='/station.png' width={50}/>
               <h5 className='text-xl font-semibold my-2'>Touchless Wash</h5>
               <p>Uses high-pressure water and detergents automatic.</p>
            </div>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <img src='/check-up.png' width={50}/>
               <h5 className='text-xl font-semibold my-2'>Interior Cleaning</h5>
               <p>Uses high-pressure water and detergents automatic.</p>
            </div>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <img src='/brake.png' width={50}/>
               <h5 className='text-xl font-semibold my-2'>Automatic Wash</h5>
               <p>Uses high-pressure water and detergents automatic.</p>
            </div>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <img src='/steering-wheel.png' width={50}/>
               <h5 className='text-xl font-semibold my-2'>Waxing & Sealing</h5>
               <p>Uses high-pressure water and detergents automatic.</p>
            </div>
      </section>

      {/* about  */}
      <section className='flex flex-col sm:flex-row justify-between items-center gap-5 p-5 my-5 overflow-hidden'>
        <div className='w-full sm:w-1/2' data-aos="fade-right">
          <img src='/after-img.png'/>
        </div>
        <div className='w-full sm:w-1/2' data-aos="fade-left">
          <p className='font-semibold text-red-500'>[ ABOUT US ]</p>
          <h3 className='text-5xl font-semibold my-6'>
            Best Ever Car Washing<br></br> & Cleaning Services
          </h3>
          <p className='text-gray-800'>Booking a car wash has become increasingly convenient, with various options available to suit different preferences.</p>
          
          <ul className="space-y-2 my-4 text-gray-800">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <HiSparkles className="w-5 h-5 text-red-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

          <div className='mt-6 flex'>
              <button className='bg-black py-3 px-8 hover:bg-red-500 rounded-full font-semibold text-white'>READ MORE</button>
              <div className='flex gap-2 ml-4'>
                <img src='/Call-icon.png'/>
                <div>
                  <p>Call for Inquiry</p>
                  <p>+0 123456789</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* workshoup  */}
      <section className='my-5'>
        <div className='mb-6'>
          <p className='text-center text-[#e51a2c] font-semibold text-sm' data-aos="fade-up">[ WORKSHOP GALLERY ]</p>
          <h3 className='text-center text-5xl font-bold mb-3' data-aos="fade-up">Workshop and Gallery</h3>
        </div>
        <CircleGallery />
      </section>

      {/* how it wash  */}
      <WashWork />

      {/* Book  */}.
      <BookHome />

      <BlogSection />

      {/* foot  */}
      <Footer/>
    </>
  )
}

export default Home