"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

function BookHome() {
  const [auth] = useAuth();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    date: '',
    time: '',
    subject: '',
    user: '' // initialize empty
  });

  // ✅ Update user field when auth changes
  useEffect(() => {
    if (auth?.user?._id) {
      setForm(prev => ({ ...prev, user: auth.user._id }));
    }
  }, [auth?.user?._id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://v-cars-next-backend.vercel.app/api/booking', form);
      toast.success(res.data.message || 'Booking submitted successfully!')
      setForm({
        name: '',
        email: '',
        phone: '',
        website: '',
        date: '',
        time: '',
        subject: '',
        user: auth?.user?._id || '' 
      });
    } catch (error) {
      console.error(error);
      alert('Failed to submit booking!');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row gap-5 m-10' id='appointment'>
      <div className='sm:w-1/2 rounded-xl overflow-hidden'>
        <img src="/slide1.jpg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='bg-[#19191b] sm:w-1/2 text-white p-10 rounded-xl'>
        <p className='mb-2 text-sm uppercase text-red-500 font-semibold'>[ Book an Appointment ]</p>
        <h3 className='text-5xl font-semibold'>Apply for a Car Wash</h3>

        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='flex justify-between gap-2'>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
              type="text" name="name" placeholder='Full Name' value={form.name} onChange={handleChange}/>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
              type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange}/>
          </div>

          <div className='flex justify-between gap-2 mt-2'>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
              type="text" name="phone" placeholder='Phone no' value={form.phone} onChange={handleChange}/>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
              type="text" name="website" placeholder='Website' value={form.website} onChange={handleChange}/>
          </div>

          <div className='flex justify-between gap-2 mt-2'>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
              type="date" name="date" value={form.date} onChange={handleChange}/>
            <input className='w-1/2 bg-transparent p-3 rounded-full border border-gray-700 focus:outline-none focus:border-red-500 hover:border-red-500' 
              type="time" name="time" value={form.time} onChange={handleChange} />
          </div>

          <textarea className='w-full bg-transparent p-3 mt-2 rounded-xl border border-gray-700 focus:border-red-500 focus:outline-none hover:border-red-500' 
            name="subject" rows={5} placeholder='Subject' value={form.subject} onChange={handleChange}></textarea>

          <button type='submit' className='bg-red-600 p-3 px-5 uppercase font-semibold rounded-full px-4 mt-2 hover:bg-red-600'>
            Get Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookHome;
