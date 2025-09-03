"use client"
import Header from '@/components/Header';
import React, { useState } from 'react'

function page() {
    const [activeTab, setActiveTab] = useState('Crystal Shine');
    const serviceContent = {
  'Engine Cleaning': {
    description: 'Thorough engine cleaning to keep your car performing at its best.',
    image: '/engine-cleaning.jpg',
  },
  'Crystal Shine': {
    description: 'Give your car a glossy, polished look with our Crystal Shine service.',
    image: '/crystal-shine.jpg',
  },
  'Diagnostic Tests': {
    description: 'Advanced diagnostic tests to identify issues in your vehicle.',
    image: '/diagnostic-tests.jpg',
  },
  'Interior Cleaning': {
    description: 'Deep cleaning of your car interior for a fresh, clean feel.',
    image: '/interior-cleaning.jpg',
  },
  'Engine Service': {
    description: 'Comprehensive engine servicing to improve longevity and performance.',
    image: '/engine-service.jpg',
  },
  'Exterior Washing': {
    description: 'Gentle and effective exterior washing to remove dirt and grime.',
    image: '/exterior-washing.jpg',
  },
}


  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar for Services */}
          <div className="col-span-1 bg-white shadow-lg rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-bold">Our Service</h3>
            <div className="space-y-2">
              {['Engine Cleaning', 'Crystal Shine', 'Diagnostic Tests', 'Interior Cleaning', 'Engine Service', 'Exterior Washing'].map((service) => (
                <button
                  key={service}
                  className={`w-full text-left p-2 rounded-md hover:bg-red-100 ${activeTab === service ? 'bg-red-600 text-white' : 'text-gray-800'}`}
                  onClick={() => setActiveTab(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Image and Description */}
          <div className="col-span-3">
            <div className="flex items-center justify-between">
              <div className="w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  The General History and Evolution of Car Washes
                </h1>
                <p className="text-gray-700 mb-6">
                  Keep your car sparkling clean with our professional car wash services! We offer a range of options, from basic washes to detailed cleanings.
                </p>

                <div className="border-t pt-6 mt-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{activeTab}</h2>
                  <div className=" justify-center">
                    <p>
                      {serviceContent[activeTab].description}
                    </p>
                   <div className="flex justify-center">
                  <img
                    src={serviceContent[activeTab]?.image}
                    alt={activeTab}
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default page