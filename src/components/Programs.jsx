import React, { useEffect, useRef } from 'react'

const PROGRAMS = [
  {
    code: '01',
    title: 'Strength Training',
    short: 'STR',
    desc: 'Embrace the essence of strength as we delve into its various dimensions — physical, mental, and emotional.',
  },
  {
    code: '02',
    title: 'Physical Fitness',
    short: 'PHY',
    desc: 'A comprehensive range of activities that improve health, strength, flexibility, and overall well-being.',
  },
  {
    code: '03',
    title: 'Fat Loss',
    short: 'FAT',
    desc: 'Through a combination of expert workout routines and nutrition guidance, we empower you to reach your goals.',
  },
  {
    code: '04',
    title: 'Weight Gain',
    short: 'WGT',
    desc: 'An effective, science-backed approach to gaining lean mass and building a powerful physique sustainably.',
  },
]

export default function Programs() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.anim-init')
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-slide-up')
          e.target.classList.remove('anim-init')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="program"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: '#0E0E0E' }}
    >
      <div className="stripe-bg absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="anim-init delay-0 flex items-center gap-3 mb-4">
              <span className="block w-8 h-[2px]" style={{ background: '#E8490C' }} />
              <span
                className="font-body text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#E8490C' }}
              >
                What We Offer
              </span>
            </div>
            <h2
              className="anim-init delay-100 font-display uppercase text-white"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95 }}
            >
              EXPLORE OUR<br />
              <span style={{ color: '#E8490C' }}>PROGRAM</span>
            </h2>
          </div>
          <a
            href="#"
            className="anim-init delay-200 font-body text-sm font-semibold self-start md:self-end pb-1 transition-colors"
            style={{ color: '#E8490C', borderBottom: '1px solid #E8490C' }}
          >
            View All Programs
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((prog, i) => (
            <div
              key={prog.code}
              className={`anim-init delay-${(i + 1) * 100} card-lift p-6 rounded-xl relative overflow-hidden`}
              style={{
                background: '#141414',
                border: '1px solid #242424',
              }}
            >
              {/* Big code watermark */}
              <span
                className="absolute top-3 right-4 font-display text-6xl select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}
              >
                {prog.code}
              </span>

              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'rgba(232,73,12,0.12)' }}
              >
                <span
                  className="font-heading font-bold text-[10px] tracking-widest"
                  style={{ color: '#E8490C' }}
                >
                  {prog.short}
                </span>
              </div>

              <h3
                className="font-heading font-bold text-[20px] uppercase text-white mb-3 leading-tight"
              >
                {prog.title}
              </h3>
              <p className="font-body text-[13px] text-gray-500 leading-relaxed mb-6">
                {prog.desc}
              </p>

              <a
                href="#"
                className="font-body text-[13px] font-semibold flex items-center gap-2 group"
                style={{ color: '#E8490C' }}
              >
                Join Now
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  style={{ fontSize: 18 }}
                >
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
