"use client";
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

function BookingsPage() {
  const [auth, setAuth] = useAuth(); 
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
    } finally {
      setLoading(false);
    }
  };

  // ✅ UseEffect to fetch data on component mount
  useEffect(() => {
    if (auth?.user?._id) {
        console.log("Here auth", auth);
      fetchBookings();
    }
  }, [auth?.user?._id]);

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Subject</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{booking.name}</td>
                <td className="border border-gray-300 p-2">{booking.email}</td>
                <td className="border border-gray-300 p-2">{booking.phone}</td>
                <td className="border border-gray-300 p-2">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="border border-gray-300 p-2">{booking.time}</td>
                <td className="border border-gray-300 p-2">{booking.status}</td>
                <td className="border border-gray-300 p-2">{booking.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DashboardLayout>
  );
}

export default BookingsPage;
