import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyJoinUs from './components/WhyJoinUs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const WHATSAPP_LINK = 'https://wa.me/919876543210'

export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Programs />
      <WhyJoinUs />
      <Trainers />
      <Pricing />
      <Footer />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 md:right-7 md:bottom-7 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[60]"
        style={{
          background: '#25D366',
          boxShadow: '0 16px 32px rgba(37, 211, 102, 0.38)',
        }}
      >
        <FaWhatsapp size={26} color="#fff" aria-hidden="true" />
      </a>
    </div>
  )
}
