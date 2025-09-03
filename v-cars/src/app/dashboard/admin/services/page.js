'use client';
import DashboardLayout from '@/components/DashboardLayout';
import React from 'react';

function Page() {
  return (
    <DashboardLayout role={'admin'}>
      <div className="space-y-8 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bookings */}
          <div className="p-6 bg-white border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📅 Manage Bookings</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>View, confirm, or cancel user bookings</li>
              <li>Assign booking status</li>
              <li>Reschedule bookings</li>
            </ul>
          </div>

          {/* Users */}
          <div className="p-6 bg-white border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">👥 Manage Users</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>View customer & admin list</li>
              <li>Change user roles</li>
              <li>Deactivate or delete accounts</li>
            </ul>
          </div>

          {/* Services */}
          <div className="p-6 bg-white border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">🛠️ Manage Services</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Add or remove car services</li>
              <li>Set pricing and durations</li>
              <li>Enable/disable specific services</li>
            </ul>
          </div>

          {/* Reports */}
          <div className="p-6 bg-white border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Reports & Analytics</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>View booking statistics</li>
              <li>Check revenue trends</li>
              <li>Track service popularity</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Page;
