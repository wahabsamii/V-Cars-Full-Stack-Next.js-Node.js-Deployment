"use client"; // If using Next.js App Router
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SubHero from '@/components/SubHero'
import TeamSection from '@/components/TeamSection';
import WashWork from '@/components/WashWork';
import Image from 'next/image'
import React from 'react'

import { useEffect, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // update every 50ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}
function page() {
  const stats = [
    { number: 15, label: "YEARS OF WASHING EXPERIENCE" },
    { number: 89, label: "CLIENTS SATISFACTION ALL OVER WORLD" },
    { number: 149, label: "TRAINED STAFFS AND TEAM MEMBER" },
  ];
  return (
    <div>
      <Header />
      <SubHero title={"About Us"}/>
       <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 max-w-7xl mx-auto">
      
      {/* Left Image */}
      <div className="flex-1">
        <Image
          src="/service-img.jpg"
          alt="Car Wash Service"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4">
          Best Ever Car Washing & Cleaning Services
        </h2>
        <p className="text-gray-600 mb-4 font-medium">
          Many of the listings also highlight the variety of services that are provided.
        </p>
        <p className="text-gray-600 mb-6">
          Booking a car wash has become increasingly convenient, with various options
          available to suit different preferences.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-red-500 text-xl">✦</span>
            Specialized treatments like ceramic coatings.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 text-xl">✦</span>
            They may also state their mission to provide the best car care services.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 text-xl">✦</span>
            This can build trust and confidence in their services.
          </li>
        </ul>

        <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
          READ MORE
        </button>
      </div>
    </section>

     <section className="py-16 bg-white max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-6xl font-bold flex items-center gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 border-black border-[1px] px-2 rounded-md">
                <Counter end={stat.number} />
              </span>
              <span className="text-red-600 text-6xl">+</span>
            </div>
            <hr className="w-20 border-gray-300 my-4" />
            <p className="text-sm font-semibold uppercase text-gray-900">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>

    <WashWork />
    <TeamSection />
    <BlogSection />
    <Footer />
    </div>
  )
}

export default page