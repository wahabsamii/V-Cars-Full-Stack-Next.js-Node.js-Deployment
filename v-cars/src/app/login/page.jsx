"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Header from "@/components/Header";
import toast from "react-hot-toast";
function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [auth, setAuth] = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://v-cars-next-backend.vercel.app/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      } else {
        await localStorage.setItem("user", JSON.stringify({
          user:data.user,
          token: data.token
        }));
        // setAuth(res.data.user);
        // alert(data.message);
        toast.success(data.message);
        setAuth({user: data.user, token: data.token});
        if (data.user.role === "customer") {
            router.push("/dashboard/user");
        }else{
            router.push("/dashboard/admin");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Header />
    <div className=" flex flex-col">
     
      {/* Login Form Section */}
      <section className="flex min-h-screen flex-1 items-center py-6 justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">
        <div className="w-full max-w-md bg-black/70 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-white text-3xl font-bold text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-full border border-gray-500 bg-transparent text-white focus:outline-none focus:border-red-500 transition"
            />

            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-full border border-gray-500 bg-transparent text-white focus:outline-none focus:border-red-500 transition"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold hover:scale-105 transform transition shadow-lg"
            >
              Login
            </button>
          </form>

          <p className="text-gray-300 mt-4 text-center">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-red-400 hover:text-red-500 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}

export default LoginPage;
