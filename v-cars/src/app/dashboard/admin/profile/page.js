"use client";
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import toast from 'react-hot-toast';

function Page() {
  const [auth] = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({});
  const fileInputRef = useRef(null);

  // ✅ Fetch user data
  const getInfo = async () => {
    try {
      const res = await axios.get(`https://v-cars-next-backend.vercel.app/api/user/user/${auth.user._id}`);
      setProfile(res.data.userDetails);
      setFormData(res.data.userDetails);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth?.user?._id) getInfo();
  }, [auth?.user?._id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData({ ...formData, profile: file });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("role", formData.role);
    form.append("About", formData.About);
    if (formData.profile instanceof File) {
      form.append("profile", formData.profile); // File upload
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/user/update/${auth.user._id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // alert("Profile updated successfully!");
      toast.success("Profile updated successfully!");
      setProfile(res.data.updatedUser);
      setPreviewImage(null);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  if (loading) return <DashboardLayout><p>Loading profile...</p></DashboardLayout>;
  if (!profile) return <DashboardLayout><p>No profile data found.</p></DashboardLayout>;

  return (
    <DashboardLayout role={'admin'}>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Profile Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side - Photo & Password */}
          <div className="flex flex-col items-center bg-white shadow rounded-2xl p-6">
            <img
              src={previewImage || profile.profile}
              alt="Profile"
              className="w-40 h-40 rounded-xl object-cover mb-4"
            />
            <button
              className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium mb-6"
              onClick={handleUploadClick}
            >
              Upload Photo
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            {/* Password Section */}
            <div className="w-full">
              <label className="block text-sm font-medium">Old Password</label>
              <input type="password" className="w-full border rounded-lg p-2 mb-3" />
              <label className="block text-sm font-medium">New Password</label>
              <input type="password" className="w-full border rounded-lg p-2 mb-4" />
              <button className="bg-red-500 text-white w-full py-2 rounded-lg font-medium">
                Change Password
              </button>
            </div>
          </div>

          {/* Right Side - Profile Info */}
          <div className="md:col-span-2 bg-white shadow rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Username"
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                name="role"
                value={formData.role}
                disabled
                placeholder="Role"
                className="border rounded-lg p-2"
              />
            </div>

            {/* Bio */}
            <h2 className="text-lg font-semibold mb-4">About the User</h2>
            <textarea
              name="About"
              rows={4}
              value={formData.About}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button
              onClick={handleSave}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Page;
