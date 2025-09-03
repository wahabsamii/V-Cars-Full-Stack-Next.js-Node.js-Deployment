import React from 'react'
import { BiSolidCarWash } from "react-icons/bi";
import { FcInspection } from "react-icons/fc";
import { TbFileInvoice } from "react-icons/tb";
import { IoCarSport } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";

function WashWork() {
  return (
    <div className='mt-20'>
        <section className='sm:h-[100vh] relative flex justify-between flex-col rounded-xl m-10 overflow-hidden'>
            <video src="/vwash-video-bg02.mp4"
            autoPlay
            loop
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            ></video>
            <marquee className='text-3xl bg-black text-white p-6' direction="left" scrollamount="5"> HOW IT WORK &nbsp;&nbsp;&nbsp; HOW IT WORK &nbsp;&nbsp;&nbsp; HOW IT WORK &nbsp;&nbsp;&nbsp; HOW IT WORK</marquee>
            <div className='flex flex-col sm:flex-row justify-between px-10 mb-10'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='bg-[rgba(255,255,255,0.3)] p-4 rounded-full'>
                        {/* <img src="/brake.png" width={50} alt="" /> */}
                        <BiSolidCarWash className='text-5xl text-white'/>
                        </div>
                    <h5 className='text-2xl text-white font-semibold text-center'>01. Booking</h5>
                    <p className='text-white text-center'>Some platforms may offer online <br/>booking functionality.</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='bg-[rgba(255,255,255,0.3)] p-4 rounded-full'>
                        {/* <img src="/brake.png" width={50} alt="" /> */}
                        <TbFileInvoice  className='text-5xl text-white'/>
                    </div>
                    <h5 className='text-2xl text-white font-semibold text-center'>02. Inspection</h5>
                    <p className='text-white text-center'>Some platforms may offer online <br/>booking functionality.</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='bg-[rgba(255,255,255,0.3)] p-4 rounded-full'>
                         <IoCarSport className='text-5xl text-white'/>
                    </div>
                    <h5 className='text-2xl text-white font-semibold text-center'>03. Washing</h5>
                    <p className='text-white text-center'>Some platforms may offer online <br/>booking functionality.</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div className='bg-[rgba(255,255,255,0.3)] p-4 rounded-full'>
                         <FaHandsHelping className='text-5xl text-white'/>
                    </div>
                    <h5 className='text-2xl text-white font-semibold text-center'>04. Completion</h5>
                    <p className='text-white text-center'>Some platforms may offer online <br/>booking functionality.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WashWork