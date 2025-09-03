'use client'; // Important for using hooks in app directory

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function Header() {
 const pathname = usePathname();
 const router = useRouter();
 const [auth] = useAuth();
 const [show, setShow] = useState(false);
 const dashnav = async() => {
    try {
      if (auth?.user.role === "admin") {
        router.push('/dashboard/admin');
      }else{
        router.push('/dashboard/user');
      }
    } catch (error) {
      console.log(error)
    }
 }
 const navItems = [
 { href: '/', label: 'home' },
 { href: '/about', label: 'about us' },
 { href: '/services', label: 'services' },
 { href: '/faqs', label: 'faqs' },
 { href: '/contact', label: 'contact us' }
 ];

 return (
  <>
 <div className='flex bg-white justify-between items-center px-10 py-6'>
 <Image src='/logo-dark.svg' width={200} height={80} alt='Logo' />
 <FaBars className='sm:hidden' onClick={() => setShow(!show)}/>
 {
  show && (
    <div className='absolute sm:hidden top-20 sm:top-0 z-50'>
  <ul className='flex flex-col sm:flex-row space-y-5 sm:space-x-6 uppercase font-semibold text-sm bg-white w-[80vw] p-2 sm:p-0 rounded-lg sm:rounded-none'>
 {navItems.map(({ href, label }) => (
 <li key={href}>
 <Link
 href={href}
 className={pathname === href ? 'text-red-600' : 'text-black hover:text-red-600 '}>
 {label}
 </Link></li>
))}
 </ul>
 </div>
  )
 }
 <div className='hidden sm:flex'>
  <ul className='flex flex-row space-x-6 uppercase font-semibold text-sm bg-white rounded-lg sm:rounded-none'>
 {navItems.map(({ href, label }) => (
 <li key={href}>
 <Link
 href={href}
 className={pathname === href ? 'text-red-600' : 'text-black hover:text-red-600 '}>
 {label}
 </Link></li>
))}
 </ul>
 </div>
 <div className='hidden sm:flex '>
  <Link href={'#appointment'} className='bg-[#e51a2c] p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-105 px-5 text-white font-medium mr-2 flex items-center gap-2'><IoCalendarOutline className='inline text-white'/>Book Appointment</Link>
  {
    auth?.user ? (<button onClick={dashnav} className='bg-[#e51a2c] p-3 transition-all duration-300 ease-in-out hover:scale-105 rounded-full px-5 text-white font-medium flex items-center gap-2'><MdDashboard className='inline text-white'/> Dashboard</button>) : (<Link href={'/login'} className='bg-[#e51a2c] p-3 rounded-full px-5 text-white font-medium flex items-center gap-2'><FaRegUser className='inline text-white'/>Login</Link>)
  }
 </div>
 </div>
 </>
 );
}

export default Header;
