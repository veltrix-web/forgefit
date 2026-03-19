import React, { useEffect, useRef } from 'react'

const FEATURES = [
  {
    num: '01',
    title: 'Expert Trainers',
    desc: 'Certified professionals who design personalized workout plans tailored to your unique goals and fitness level.',
  },
  {
    num: '02',
    title: 'Modern Equipment',
    desc: 'State-of-the-art machines and free weights, regularly maintained and updated to support every training style.',
  },
  {
    num: '03',
    title: 'Flexible Timing',
    desc: 'Open 6 AM to 11 PM, seven days a week — train when it works for you, not when it works for us.',
  },
  {
    num: '04',
    title: 'Real Community',
    desc: 'A diverse, welcoming membership base that keeps you accountable, motivated, and always coming back.',
  },
]

export default function WhyJoinUs() {
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
      id="service"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,73,12,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="anim-init delay-0 flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[2px]" style={{ background: '#E8490C' }} />
            <span
              className="font-body text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#E8490C' }}
            >
              Our Advantages
            </span>
            <span className="block w-8 h-[2px]" style={{ background: '#E8490C' }} />
          </div>
          <h2
            className="anim-init delay-100 font-display uppercase text-white mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95 }}
          >
            WHY JOIN <span style={{ color: '#E8490C' }}>US?</span>
          </h2>
          <p className="anim-init delay-200 font-body text-[15px] text-gray-500 max-w-[500px] mx-auto leading-relaxed">
            Our diverse membership base creates a friendly and supportive atmosphere where you can
            make friends and stay motivated every single day.
          </p>
        </div>

        {/* Banner image placeholder */}
        <div
          className="anim-init delay-300 relative w-full rounded-2xl overflow-hidden mb-16"
          style={{
            height: 'clamp(240px, 35vw, 420px)',
            background: 'linear-gradient(135deg, #141414, #1e0900, #141414)',
            border: '1px solid rgba(232,73,12,0.15)',
          }}
        >
          {/* Decorative horizontal lines */}
          {[30, 50, 70].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 right-0 h-[1px]"
              style={{ top: `${pct}%`, background: 'rgba(255,255,255,0.03)' }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <p className="font-body text-gray-700 text-sm">Full-Width Action Banner Image</p>
            <p className="font-body text-gray-800 text-xs mt-1">
              Replace with high-resolution gym photo
            </p>
          </div>
          {/* Overlay gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(8,8,8,0.5), transparent, rgba(8,8,8,0.5))',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.num}
              className={`anim-init delay-${(i + 1) * 100} card-lift p-6 rounded-xl`}
              style={{ background: '#0E0E0E', border: '1px solid #1C1C1C' }}
            >
              <div
                className="font-display text-5xl mb-4 select-none"
                style={{ color: 'rgba(232,73,12,0.2)' }}
              >
                {feat.num}
              </div>
              <h3 className="font-heading font-bold text-[18px] uppercase text-white mb-2">
                {feat.title}
              </h3>
              <p className="font-body text-[13px] text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
