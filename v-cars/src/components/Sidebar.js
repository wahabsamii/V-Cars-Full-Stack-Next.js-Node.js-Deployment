'use client'

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {
  FaHome,
  FaClipboardList,
  FaUserCircle,
  FaCog,
} from 'react-icons/fa';
import { FaArrowRightFromBracket } from "react-icons/fa6";


export default function Sidebar({ role = 'user' }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useAuth();
  const logout = async() => {
    try {
      setAuth({user: null, token: ''});
      localStorage.removeItem("user");
      router.push('/login');
    } catch (error) {
      toast.error(error);
    }
  }
  const navItems = {
    user: [
      { name: 'Dashboard', path: '/dashboard/user', icon: FaHome },
      { name: 'My Bookings', path: '/dashboard/user/bookings', icon: FaClipboardList },
      { name: 'Profile', path: '/dashboard/user/profile', icon: FaUserCircle },
    ],
    admin: [
      { name: 'Dashboard', path: '/dashboard/admin', icon: FaHome },
      { name: 'Bookings', path: '/dashboard/admin/bookings', icon: FaClipboardList },
      { name: 'Manage Users', path: '/dashboard/admin/users', icon: FaUserCircle },
      { name: 'Services', path: '/dashboard/admin/services', icon: FaCog },
      { name: 'Profile', path: '/dashboard/admin/profile', icon: FaUserCircle }
    ],
  }

  return (
    <div className={`bg-white border-r h-screen p-4 w-64 fixed top-0 left-0 z-40 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-red-600">Vcars</h2>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <span className="text-gray-600 text-xl">{open ? '×' : '☰'}</span>
        </button>
      </div>

      <div className='flex justify-between flex-col h-[86%]'>
        <nav className="space-y-2">
        {(navItems[role] || []).map((item) => (
          <Link key={item.name} href={item.path}>
            <div
              className={`flex items-center my-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-100 transition text-gray-700 ${
                typeof window !== 'undefined' && window.location.pathname === item.path ? 'bg-red-500 text-white' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
      <div onClick={logout}>
        <Link key={'logout'} href={'/logout'}>
            <div
              className={`flex items-center my-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-100 transition text-gray-700 ${
                typeof window !== 'undefined' && window.location.pathname === '/logout' ? 'bg-red-500 text-white' : ''
              }`}
            >
              <FaArrowRightFromBracket className="h-5 w-5 mr-3" />
              {'logout'}
            </div>
          </Link>
      </div>
      </div>
    </div>
  )
}
