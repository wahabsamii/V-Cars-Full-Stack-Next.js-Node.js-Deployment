"use client";
import { useState } from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide a wide range of services including car washing, detailing, engine cleaning, interior cleaning, and diagnostic tests.',
  },
  {
    question: 'How long does a full car wash take?',
    answer: 'A complete car wash and interior detailing typically take between 45 minutes to 1.5 hours depending on the size and condition of the vehicle.',
  },
  {
    question: 'Do I need to make an appointment?',
    answer: 'Appointments are recommended to ensure availability, but walk-ins are also welcome depending on current workload.',
  },
  {
    question: 'What products do you use?',
    answer: 'We use high-quality, eco-friendly cleaning products that are safe for your vehicle’s surfaces and the environment.',
  },
  {
    question: 'Can I reschedule my booking?',
    answer: 'Yes, you can reschedule by contacting us at least 24 hours before your appointment time.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 transition-all duration-200 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
