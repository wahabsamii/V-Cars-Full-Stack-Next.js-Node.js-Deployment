"use client";
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// import Link from 'next/link';
import { FaUsers, FaClipboardList, FaClock, FaServicestack } from "react-icons/fa";


function page() {
  const [auth] = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // ✅ Fetch bookings function
  const fetchBookings = async () => {
    try {
      const res = await axios.get(`https://v-cars-next-backend.vercel.app/api/booking/${auth?.user?._id}`);
      setBookings(res.data || []);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load bookings.');
      // toast.error(err)
    } finally {
      setLoading(false);
    }
  };

  // ✅ UseEffect to fetch data on component mount
  useEffect(() => {
    if (auth?.user?._id) {
      fetchBookings();
    }
  }, [auth?.user?._id]);


  const ApprovedServices = bookings.filter((b) => b.status == "approved").length;
  const PendingServices = bookings.filter((b) => b.status == "pending").length;

  const summary = [
    { title: 'Total Bookings', value: bookings.length, icon: <FaUsers className="text-red-500 w-6 h-6" /> },
    { title: 'Completed Services', value: ApprovedServices,  icon: <FaClipboardList className="text-green-600 w-6 h-6" /> },
    { title: 'Pending Services', value: PendingServices,  icon: <FaClock className="text-yellow-500 w-6 h-6" /> },
  ];

  return (
    <DashboardLayout role={'user'}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, {auth?.user?.name || 'User'} 👋
          </h1>
          <p className="text-gray-500">Here’s a summary of your recent activity.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {summary.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 border hover:shadow-md transition"
            >
              <div className="p-3 mb-2 bg-gray-100 rounded-full w-[50px] h-[50px] flex items-center justify-center">
              {item.icon}
            </div>
              <h2 className="text-gray-600 text-sm">{item.title}</h2>
              <p className="text-2xl font-semibold text-red-600">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Bookings Preview */}
        <div className="bg-white rounded-lg shadow-sm p-6 border mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Upcoming Bookings</h3>
            {/* <Link href="/dashboard/user/bookings">
              <a className="text-red-500 hover:underline text-sm">View All</a>
            </Link> */}
          </div>

          {/* Placeholder for bookings */}
          <ul className="space-y-2">
            <li className="text-sm text-gray-700">
              🚗 Toyota Corolla - Oil Change on Aug 8, 2025
            </li>
            <li className="text-sm text-gray-700">
              🚙 Honda Civic - Tire Rotation on Aug 14, 2025
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-4">
          {/* <Link href="/dashboard/user/bookings/new">
            <a className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Book a Service
            </a> */}
          {/* </Link> */}
          {/* <Link href="/dashboard/user/vehicles">
            <a className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
              View My Vehicles
            </a>
          </Link> */}
          {/* <Link href="/dashboard/user/profile">
            <a className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
              Update Profile
            </a>
          </Link> */}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;
