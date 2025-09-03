'use client';
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
const slides = [
  {
    title: 'Best Ever Car Wash Services',
    subtitle: '[ EXTERIOR WASHING ]',
    image: '/banner01-img01.jpg', // Add this image to public/slider/
  },
  {
    title: 'Car Washing Inside & Outside',
    subtitle: '[ DASHBOARD AND SURFACE SERVICES ]',
    image: '/banner01-img03.jpg', // Add this image to public/slider/
  },
  // Add more slides if needed
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration in ms
  }, []);

  return (
    <div className="relative bg-black h-[100vh] text-white rounded-3xl overflow-hidden m-4 bg-cover" style={{backgroundImage:`url(${slides[current].image})`}}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px]">
        {/* Left Content */}
        <div className="p-10 md:p-16 z-10">
          <p data-aos="fade-right" className="text-sm font-bold uppercase tracking-widest text-white mb-5">{slides[current].subtitle}</p>
          <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold leading-tight mt-3 mb-6">
            {slides[current].title}
          </h1>
          <div data-aos="fade-up" className="flex gap-4 mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold">
              READ MORE
            </button>
            <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-semibold">
              GET APPOINTMENT
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full min-h-[500px] w-full">
          {/* <Image
            src={slides[current].image}
            alt="Car wash"
            layout="fill"
            objectFit="cover"
            className="rounded-l-3xl md:rounded-none"
            priority
          /> */}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-20"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}


// import React from 'react'
// import img from '../../public/slide1.jpg'
// function HomeSlider() {
//   return (
//     <div>
//         <section className='p-10 flex m-4 rounded-xl justify-center flex-col'  style={{ backgroundImage: `url(${img.src})`,backgroundSize: 'cover',backgroundPosition: 'center',height: '100vh',}}>
//             <p className='text-white'>[CAR EXTERIOR CLEANING]</p>
//             <h2 className='text-white text-5xl font-bold'>Car Washing & <br />Interior Cleaning</h2>
//             <div className='mt-3'>
//                 <button className='bg-white text-black px-4 py-2 rounded-full' >Read More</button>
//                 <button className='bg-[#e51a2c] px-4 py-2 rounded-full ml-2 text-white font-medium'>Book Appointment</button>
//             </div>
//         </section>
//     </div>
//   )
// }

// export default HomeSlider