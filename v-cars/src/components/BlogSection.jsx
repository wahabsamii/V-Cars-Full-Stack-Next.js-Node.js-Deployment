'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const blogData = [
  {
    img: '/slide1.jpg',
    date: 'AUG 14 2025',
    title: 'Tips for avoiding scratches and marks',
    tag: 'GENERAL',
  },
  {
    img: '/blog2.jpg',
    date: 'AUG 14 2025',
    title: 'What to look for in a reputable car wash',
    tag: 'AUTO DETAILING',
  },
  {
    img: '/blog3.jpg',
    date: 'AUG 14 2025',
    title: 'Interior detailing tips vacuuming, cleaning',
    tag: 'INTERIOR POLISH',
  },
]

function BlogSection() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      <p className="text-center text-[#e51a2c] uppercase font-semibold text-sm tracking-wide">[ Blog & News ]</p>
      <h3 className="text-4xl md:text-5xl font-bold text-center mt-2">Tips and Latest News</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
              {blog.tag}
            </div>

            <div className="absolute bottom-20 left-4 text-white">
              <p className="text-sm">{blog.date}</p>
              <h5 className="text-xl font-semibold">{blog.title}</h5>
            </div>

            <div className="absolute bottom-4 right-4">
              <button className="bg-white text-black p-2 rounded-full shadow hover:scale-110 transition">
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
