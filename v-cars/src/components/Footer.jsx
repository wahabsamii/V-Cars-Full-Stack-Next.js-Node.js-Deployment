// components/Footer.jsx
'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <p className="text-lg font-semibold mb-2">Unleash the Road Ahead:</p>
          <p className="text-lg mb-4">your Next Car Awaits</p>
          <p className="text-xl font-bold mb-1">+12 (3) 456 0000</p>
          <p className="mb-4">vwash123@gmail.com</p>
          <div className="flex gap-4 text-white text-xl mt-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2 - Pages */}
        <div>
          <h3 className="font-bold text-lg mb-3">Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">HOME</Link></li>
            <li><Link href="#">BLOG CLASSIC</Link></li>
            <li><Link href="#">ABOUT US</Link></li>
            <li><Link href="#">BLOG GRID</Link></li>
            <li><Link href="#">OUR TEAM</Link></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">HELP CENTER</Link></li>
            <li><Link href="#">TREATS PROGRAM</Link></li>
            <li><Link href="#">CAREERS</Link></li>
            <li><Link href="#">CHARITIES</Link></li>
            <li><Link href="#">PRIVACY</Link></li>
          </ul>
        </div>

        {/* Column 4 - Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">ENGINE CLEANING</Link></li>
            <li><Link href="#">CRYSTAL SHINE</Link></li>
            <li><Link href="#">DIAGNOSTIC TESTS</Link></li>
            <li><Link href="#">INTERIOR CLEANING</Link></li>
            <li><Link href="#">ENGINE SERVICE</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Copyright By Vwash. © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
