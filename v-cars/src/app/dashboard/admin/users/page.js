"use client";

import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import axios from 'axios';
import toast from 'react-hot-toast';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   role: 'admin' | 'user';
//   createdAt: string;
// }

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://v-cars-next-backend.vercel.app/api/user');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const DeleteUser = async(id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/user/delete/${id}`);
      if(res.data){
        toast.success(res.data.message);
        setUsers((prev) => prev.filter((b) => b._id != id));
      }
    } catch (error) {
      console.log(error);
      toast.error("some went wrong")
    }
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        {loading && <p>Loading users...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && users.length === 0 && <p>No users found.</p>}

        {!loading && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead className=" text-left">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Joined</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2 capitalize">{user.role}</td>
                    <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-center bg-red-500 cursor-pointer text-white" onClick={() => DeleteUser(user._id)}>Delete</td>
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
