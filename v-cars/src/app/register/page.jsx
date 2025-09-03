"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function page() {
    const router = useRouter();
    const [form, setForm] = useState({name: '', email: '', password: '', About: ''});
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(form)
        try {
            const res = await fetch('https://v-cars-next-backend.vercel.app/api/user/register', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            // alert(data)
            if(data){
                toast.success('Account Created');
                router.push('/login');
            }
        } catch (error) {
            toast.error(error)
        }
    }
  return (
    <div>
        <Header />
        <section className="flex min-h-screen flex-1 items-center py-6 justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">
            <div className='border-[1px] border-gray-300 p-10 w-[50%] bg-black rounded-xl'>
                <form onSubmit={handleSubmit} className='mt-4 '>
                <div className='flex justify-between flex-col gap-2'>
                    <input onChange={(e) => setForm({...form,name: e.target.value})} className='text-white w-full bg-transparent p-2 rounded-xl border-[1px] border-white active:border-[1px] active:border-red-500' type="text" name="" id="" placeholder='Name'/>
                    <input onChange={(e) => setForm({...form, email: e.target.value})} className='text-white w-full bg-transparent p-2 rounded-xl border-[1px] border-white active:border-[1px] active:border-red-500' type="text" name="" id="" placeholder='Email'/>
                    <input onChange={(e) => setForm({...form, password:e.target.value})} className='text-white w-full bg-transparent p-2 rounded-xl border-[1px] border-white active:border-[1px] active:border-red-500' type="text" name="" id="" placeholder='Password'/>
                    <textarea onChange={(e) => setForm({...form, About:e.target.value})} className='text-white w-full bg-transparent p-2 rounded-xl border-[1px] border-white active:border-[1px] active:border-red-500' placeholder='About You' rows={5}></textarea>
                </div>
                <div className='flex items-center justify-center'>
                <button className='bg-red-500 mt-4 p-2 rounded-full px-4 font-medium w-[30%] text-white'>Register</button>

                </div>
                <Link className='text-white block text-center mt-3' type='submit' href={'/login'}>Already have an account? Login</Link>
            </form>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default page 