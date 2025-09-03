"use client"
import { useAuth } from '@/context/AuthContext';
import React from 'react'

function page() {
    const [auth, setAuth] = useAuth();
    console.log("auth", auth?.user?.name)
  return (
    <div>
        welcome {auth?.user?.name}
    </div>
  )
}

export default page