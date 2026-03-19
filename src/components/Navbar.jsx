import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Dumbbell, Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Program', href: '#program' },
  { label: 'Service', href: '#service' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-display text-[22px] sm:text-[26px] tracking-wider leading-none select-none"
        >
          <span
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(232,73,12,0.16)', color: '#E8490C' }}
          >
            <Dumbbell size={16} strokeWidth={2.2} />
          </span>
          FORGE<span style={{ color: '#E8490C' }}>FIT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-item font-body text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 btn-brand font-body text-[13px] font-semibold px-6 py-2.5 rounded-sm tracking-wide"
        >
          Join Now
          <ArrowUpRight size={15} />
        </a>

        <button
          className="md:hidden w-9 h-9 rounded-md flex items-center justify-center"
          style={{
            border: '1px solid rgba(255,255,255,0.12)',
            color: open ? '#E8490C' : '#fff',
          }}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '380px' : '0',
          background: 'rgba(8,8,8,0.98)',
          borderTop: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-5 gap-5">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="btn-brand font-body text-sm font-semibold px-5 py-2.5 rounded-sm text-center mt-1 inline-flex items-center justify-center gap-2"
          >
            Join Now
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  )
}
