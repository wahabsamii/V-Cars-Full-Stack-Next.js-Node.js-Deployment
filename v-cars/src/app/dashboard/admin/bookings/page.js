"use client";

import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import axios from 'axios';
import toast from 'react-hot-toast';

// interface Booking {
//   _id: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   website?: string;
//   date: string;
//   time: string;
//   subject: string;
//   createdAt: string;
// }

export default function page() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch('https://v-cars-next-backend.vercel.app/api/booking');
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

 const deleteBooking = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await axios.delete(`https://v-cars-next-backend.vercel.app/api/booking/delete/${id}`);
      if (res.data) {
        toast.success(res.data.message || "Booking deleted successfully");

        // remove deleted booking from UI
        setBookings((prev) => prev.filter((b) => b._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <DashboardLayout role='admin'>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">All Bookings</h1>
        {loading && <p>Loading bookings...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && bookings.length === 0 && <p>No bookings found.</p>}

        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-center">{b.name}</td>
                    <td className="px-4 py-2 text-center">{b.email}</td>
                    <td className="px-4 py-2 text-center">{b.phone}</td>
                    <td className="px-4 py-2 text-center">{b.date}</td>
                    <td className="px-4 py-2 text-center">{b.time}</td>
                    <td className="px-4 py-2 text-center">{b.subject.slice(0,10)}...</td>
                      <td className="px-4 py-2 text-center">
                        <select
                          value={b.status || "pending"}
                          onChange={async (e) => {
                            const newStatus = e.target.value;
                            try {
                              const res = await axios.put(`https://v-cars-next-backend.vercel.app/api/booking/status/${b._id}`, {
                                status: newStatus,
                              });

                              if (res.data) {
                                toast.success(res.data.message || "Status updated");
                                // update local state so UI refreshes instantly
                                setBookings((prev) =>
                                  prev.map((booking) =>
                                    booking._id === b._id ? { ...booking, status: newStatus } : booking
                                  )
                                );
                              }
                            } catch (err) {
                              toast.error(err.response?.data?.message || "Failed to update status");
                            }
                          }}
                          className="border px-2 py-1 rounded"
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    <td className="px-4 py-2 text-center bg-red-500 cursor-pointer text-white" onClick={() => deleteBooking(b._id)}>Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
