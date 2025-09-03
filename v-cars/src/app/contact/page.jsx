import BookHome from '@/components/BookHome'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SubHero from '@/components/SubHero'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

function page() {
  return (
    <div>
      <Header ></Header>
      <SubHero title={'Contact Us'}/>
      <section className='mt-20'>
        <p className='text-center text-sm font-semibold text-red-500 uppercase mb-4'>[ Contact Us ]</p>
        <h2 className='text-center text-5xl font-semibold'>Get in Touch With us</h2>
        <div className='grid grid-cols-3 gap-5 p-5 mt-4'>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <div className='w-[70px] h-[70px] bg-gray-100 rounded-full flex items-center justify-center'>
                <FaPhoneVolume className='text-3xl text-red-500'/>
               </div>
               <h5 className='text-xl font-semibold my-2'>Phone</h5>
               <p>+12 (3) 456 0000</p>
            </div>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <div className='w-[70px] h-[70px] bg-gray-100 rounded-full flex items-center justify-center'>
                <FaRegEnvelope className='text-3xl text-red-500'/>
               </div>
               <h5 className='text-xl font-semibold my-2'>Email</h5>
               <p>vwash123@gmail.com</p>
            </div>
            <div className='border-[1px] border-gray-200 p-8 rounded-xl'>
               <div className='w-[70px] h-[70px] bg-gray-100 rounded-full flex items-center justify-center'>
                <IoLocationOutline className='text-3xl text-red-500'/>
               </div>
               <h5 className='text-xl font-semibold my-2'>Address</h5>
               <p>Envanto HQ Australia</p>
            </div>
        </div>
      </section>

      <section>
        <div>
          <BookHome />
        </div>
        <div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default page