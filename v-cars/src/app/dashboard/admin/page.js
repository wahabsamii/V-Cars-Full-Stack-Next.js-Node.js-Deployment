"use client";
import DashboardLayout from '@/components/DashboardLayout';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Import icons
import { FaUsers, FaClipboardList, FaClock, FaServicestack } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';

function page() {
  const [allusers, setAllUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const fetchUsers = async() => {
      try {
        const users = await axios.get('https://v-cars-next-backend.vercel.app/api/user');
        setAllUsers(users.data);
      } catch (error) {
        toast.error(error);
      }
  }

  const fetchBookings = async() => {
    try {
      const response = await axios.get('http://localhost:5000/api/booking');
      setBookings(response.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const fetchRecents = async() => {
    try {
      const res = await axios.get('http://localhost:5000/api/user/recent');
      if (res.data) {
        setRecentUsers(res.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUsers();
    fetchBookings();
    fetchRecents()
  }, []);

 const pendingCount = bookings.filter((p) => p.status == "pending").length;
 const approvedCount = bookings.filter((p) => p.status == "approved").length;
 const stats = [
    { label: 'Total Users', value: allusers.length , icon: <FaUsers className="text-red-500 w-6 h-6" /> },
    { label: 'Total Bookings', value: bookings.length, icon: <FaClipboardList className="text-green-600 w-6 h-6" /> },
    { label: 'Pending Approvals', value: pendingCount, icon: <FaClock className="text-yellow-500 w-6 h-6" /> },
    { label: 'Approved Services', value: approvedCount, icon: <FaServicestack className="text-purple-600 w-6 h-6" /> },
  ];

  // const recentUsers = [
  //   { name: 'Ayesha Khan', joined: 'Aug 1, 2025' },
  //   { name: 'Bilal Ahmad', joined: 'Jul 29, 2025' },
  //   { name: 'Maria Naveed', joined: 'Jul 28, 2025' },
  // ];

  return (
    <DashboardLayout role={'admin'}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Admin</h1>
          <p className="text-gray-500">Here’s what’s happening with the platform.</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <div className="p-3 mb-2 bg-gray-100 rounded-full w-[50px] h-[50px] flex items-center justify-center">
              {item.icon}
            </div>
              <h2 className="text-sm text-gray-600">{item.label}</h2>
              <p className="text-2xl font-semibold text- red-600">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Users */}
        <div className="bg-white border rounded-lg shadow-sm p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Recently Joined Users</h3>
            <Link href="/dashboard/admin/users">
              <p className="text-sm text-red-500 hover:underline">Manage Users</p>
            </Link>
          </div>
          <ul className="space-y-2">
            {recentUsers.map((user, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                👤 {user.name} — Joined on {new Date(user.createdAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/dashboard/admin/services">
            <p className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Manage Services
            </p>
          </Link>
          <Link href="/dashboard/admin/bookings">
            <p className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
              View All Bookings
            </p>
          </Link>
          <Link href="/dashboard/admin/users">
            <p className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
              User Management
            </p>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;
