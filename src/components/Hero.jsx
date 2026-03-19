import React, { useEffect, useRef } from 'react'

const STATS = [
  { value: '500+', label: 'Active Members' },
  { value: '20+', label: 'Expert Trainers' },
  { value: '50+', label: 'Programs' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.anim-init')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
            entry.target.classList.remove('anim-init')
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden noise"
      style={{ background: 'linear-gradient(135deg, #080808 0%, #120800 60%, #080808 100%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Orange glow orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse2"
        style={{ background: 'radial-gradient(circle, rgba(232,73,12,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,73,12,0.07) 0%, transparent 70%)' }}
      />

      {/* Vertical orange line accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, transparent, #E8490C, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div>
            {/* Eyebrow */}
            <div
              className="anim-init delay-0 inline-flex items-center gap-3 mb-7"
            >
              <span
                className="block w-8 h-[2px]"
                style={{ background: '#E8490C' }}
              />
              <span
                className="font-body text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#E8490C' }}
              >
                Best Fitness In The Town
              </span>
            </div>

            {/* Main headline */}
            <div className="anim-init delay-100 mb-2">
              <h1
                className="font-display uppercase leading-[0.9] text-stroke block"
                style={{ fontSize: 'clamp(80px, 12vw, 140px)' }}
              >
                MAKE
              </h1>
            </div>
            <div className="anim-init delay-200 mb-1">
              <h1
                className="font-display uppercase leading-[0.9] text-white block"
                style={{ fontSize: 'clamp(80px, 12vw, 140px)' }}
              >
                YOUR
              </h1>
            </div>
            <div className="anim-init delay-300 mb-8">
              <h1
                className="font-display uppercase leading-[0.9] text-white block"
                style={{ fontSize: 'clamp(56px, 8vw, 100px)' }}
              >
                BODY{' '}
                <span style={{ color: '#E8490C' }}>SHAPE</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="anim-init delay-400 font-body text-[15px] text-gray-400 leading-relaxed max-w-[420px] mb-10"
            >
              Unleash your potential and embark on a journey towards a stronger, fitter, and more
              confident you. Witness the incredible transformation your body is capable of.
            </p>

            {/* Buttons */}
            <div className="anim-init delay-500 flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#program"
                className="btn-brand font-body font-semibold text-sm px-8 py-3.5 rounded-sm tracking-wide"
              >
                Get Started
              </a>
              <a
                href="#service"
                className="btn-ghost font-body font-semibold text-sm px-8 py-3.5 rounded-sm tracking-wide"
              >
                Learn More
              </a>
            </div>

            {/* Stats row */}
            <div className="anim-init delay-600 flex gap-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="font-display text-4xl"
                    style={{ color: '#E8490C' }}
                  >
                    {value}
                  </p>
                  <p className="font-body text-[11px] text-gray-500 uppercase tracking-widest mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Image placeholder ── */}
          <div className="anim-init delay-300 relative flex justify-center">
            {/* Big background watermark text */}
            <span
              className="absolute font-display select-none pointer-events-none"
              style={{
                fontSize: 'clamp(60px, 14vw, 160px)',
                color: 'rgba(255,255,255,0.03)',
                bottom: -20,
                right: -20,
                letterSpacing: '0.04em',
              }}
            >
              FITNESS
            </span>

            {/* Image frame */}
            <div
              className="relative w-full max-w-[420px] rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(145deg, #141414, #1e0900)',
                border: '1px solid rgba(232,73,12,0.2)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), inset 0 0 60px rgba(232,73,12,0.04)',
              }}
            >
              {/* Corner brackets */}
              {[
                'top-4 left-4 border-t-2 border-l-2',
                'top-4 right-4 border-t-2 border-r-2',
                'bottom-4 left-4 border-b-2 border-l-2',
                'bottom-4 right-4 border-b-2 border-r-2',
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-8 ${cls}`}
                  style={{ borderColor: '#E8490C' }}
                />
              ))}

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="font-display text-9xl font-normal opacity-10"
                  style={{ color: '#E8490C' }}
                >
                  FF
                </div>
                <p className="font-body text-[11px] text-gray-700 mt-3">
                  Replace with hero athlete photo
                </p>
              </div>

              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}
              />
            </div>

            {/* Floating tag */}
            <div
              className="absolute bottom-8 left-0 px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(20,20,20,0.9)',
                border: '1px solid rgba(232,73,12,0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="font-body text-xs text-gray-400">Next class starts in</p>
              <p
                className="font-display text-2xl mt-0.5"
                style={{ color: '#E8490C' }}
              >
                2 HRS 30 MIN
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
      />
    </section>
  )
}
