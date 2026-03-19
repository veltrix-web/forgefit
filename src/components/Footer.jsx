import React from 'react'

const LINKS = {
  Company: ['Business', 'Franchise', 'Partnership', 'Network'],
  'About Us': ['Blogs', 'Security', 'Careers'],
  Contact: ['Contact Us', 'Privacy Policy', 'Terms & Conditions', 'BMI Calculator'],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand col */}
          <div>
            <a
              href="#home"
              className="font-display text-[26px] tracking-wider leading-none"
            >
              FORGE<span style={{ color: '#E8490C' }}>FIT</span>
            </a>
            <p className="font-body text-[13px] text-gray-600 mt-4 leading-relaxed max-w-[240px]">
              Take the first step towards a healthier, stronger you. Let's sweat, achieve, and
              conquer together.
            </p>

            {/* Social icons as text buttons */}
            <div className="flex gap-3 mt-6">
              {['FB', 'IG', 'TW'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-md flex items-center justify-center font-body text-[11px] font-bold transition-all duration-300"
                  style={{ background: '#141414', color: '#555', border: '1px solid #242424' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E8490C'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = '#E8490C'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#141414'
                    e.currentTarget.style.color = '#555'
                    e.currentTarget.style.borderColor = '#242424'
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4
                className="font-heading font-bold text-[14px] uppercase tracking-[0.12em] text-white mb-5"
              >
                {cat}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-[13px] text-gray-600 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-body text-[11px] text-gray-700">
            Copyright &copy; 2025 ForgeFit. All rights reserved.
          </p>
          <p
            className="font-body text-[11px] font-semibold"
            style={{ color: 'rgba(232,73,12,0.6)' }}
          >
            Crafted for the 90-Day Challenge
          </p>
        </div>
      </div>
    </footer>
  )
}
