import React, { useState, useEffect } from 'react'

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
        background: scrolled
          ? 'rgba(8,8,8,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-[26px] tracking-wider leading-none select-none">
          FORGE<span style={{ color: '#E8490C' }}>FIT</span>
        </a>

        {/* Desktop Nav */}
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

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden md:block btn-brand font-body text-[13px] font-semibold px-6 py-2.5 rounded-sm tracking-wide"
        >
          Join Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-[2px] bg-white rounded transition-all duration-300 origin-center"
            style={{
              width: open ? '100%' : '100%',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[2px] bg-white rounded transition-all duration-300"
            style={{ opacity: open ? 0 : 1, width: '70%' }}
          />
          <span
            className="block h-[2px] bg-white rounded transition-all duration-300 origin-center"
            style={{
              width: '100%',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '320px' : '0',
          background: 'rgba(8,8,8,0.98)',
          borderTop: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-5 gap-5">
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
            className="btn-brand font-body text-sm font-semibold px-5 py-2.5 rounded-sm text-center mt-1"
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  )
}
