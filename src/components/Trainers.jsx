import React, { useEffect, useRef } from 'react'

const TRAINERS = [
  { initials: 'RS', name: 'Raj Sharma', role: 'Strength & Power', exp: '8 Years' },
  { initials: 'PM', name: 'Priya Mehta', role: 'Yoga & Flexibility', exp: '6 Years' },
  { initials: 'AP', name: 'Arjun Patel', role: 'Cardio & Endurance', exp: '10 Years' },
  { initials: 'SK', name: 'Sneha Kapoor', role: 'Nutrition & Wellness', exp: '5 Years' },
]

export default function Trainers() {
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
      id="about"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: '#0E0E0E' }}
    >
      <div className="stripe-bg absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="anim-init delay-0 flex items-center gap-3 mb-4">
              <span className="block w-8 h-[2px]" style={{ background: '#E8490C' }} />
              <span
                className="font-body text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#E8490C' }}
              >
                Meet The Experts
              </span>
            </div>
            <h2
              className="anim-init delay-100 font-display uppercase text-white"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95 }}
            >
              OUR<br />
              <span style={{ color: '#E8490C' }}>TRAINERS</span>
            </h2>
          </div>
          <a
            className="anim-init delay-200 font-body text-sm font-semibold self-start md:self-end pb-1"
            href="#"
            style={{ color: '#E8490C', borderBottom: '1px solid #E8490C' }}
          >
            View All Trainers
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((t, i) => (
            <div
              key={t.name}
              className={`anim-init delay-${(i + 1) * 100} card-lift rounded-xl overflow-hidden group`}
              style={{ background: '#141414', border: '1px solid #242424' }}
            >
              {/* Photo placeholder */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1C1C1C, #200e00)',
                }}
              >
                <div
                  className="font-display text-7xl select-none"
                  style={{ color: 'rgba(232,73,12,0.15)' }}
                >
                  {t.initials}
                </div>
                <p className="absolute bottom-3 font-body text-[10px] text-gray-700">
                  Replace with trainer photo
                </p>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(232,73,12,0.3) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-[20px] uppercase text-white leading-tight">
                  {t.name}
                </h3>
                <p
                  className="font-body text-[13px] mt-1 font-medium"
                  style={{ color: '#E8490C' }}
                >
                  {t.role}
                </p>
                <p className="font-body text-[11px] text-gray-600 mt-1 uppercase tracking-wider">
                  {t.exp} Experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
