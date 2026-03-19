import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyJoinUs from './components/WhyJoinUs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

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
    </div>
  )
}
