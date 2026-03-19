import React, { useEffect, useRef } from 'react'
import { ArrowRight, Dumbbell, Flame, HeartPulse, Scale } from 'lucide-react'

const PROGRAMS = [
  {
    code: '01',
    title: 'Strength Training',
    desc: 'Embrace the essence of strength as we delve into its various dimensions - physical, mental, and emotional.',
    icon: Dumbbell,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: '02',
    title: 'Physical Fitness',
    desc: 'A comprehensive range of activities that improve health, strength, flexibility, and overall well-being.',
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: '03',
    title: 'Fat Loss',
    desc: 'Through expert workout routines and nutrition guidance, we empower you to hit your fat-loss goals faster.',
    icon: Flame,
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: '04',
    title: 'Weight Gain',
    desc: 'An effective science-backed approach to gaining lean mass and building a powerful physique sustainably.',
    icon: Scale,
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
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
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#0E0E0E' }}
    >
      <div className="stripe-bg absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-12 md:mb-16">
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
              style={{ fontSize: 'clamp(32px, 9vw, 72px)', lineHeight: 0.95 }}
            >
              EXPLORE OUR<br />
              <span style={{ color: '#E8490C' }}>PROGRAM</span>
            </h2>
          </div>
          <a
            href="#"
            className="anim-init delay-200 font-body text-sm font-semibold self-start md:self-end pb-1 transition-colors inline-flex items-center gap-2"
            style={{ color: '#E8490C', borderBottom: '1px solid #E8490C' }}
          >
            View All Programs
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((prog, i) => {
            const Icon = prog.icon

            return (
              <div
                key={prog.code}
                className={`anim-init delay-${(i + 1) * 100} card-lift rounded-xl relative overflow-hidden group`}
                style={{
                  background: '#141414',
                  border: '1px solid #242424',
                }}
              >
                <span
                  className="absolute top-3 right-4 font-display text-5xl sm:text-6xl select-none pointer-events-none z-20"
                  style={{ color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}
                >
                  {prog.code}
                </span>

                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.88), rgba(8,8,8,0.16))' }}
                  />
                </div>

                <div className="p-5 sm:p-6 pt-5">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: 'rgba(232,73,12,0.14)', color: '#E8490C' }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="font-heading font-bold text-[20px] uppercase text-white mb-3 leading-tight">
                    {prog.title}
                  </h3>
                  <p className="font-body text-[13px] text-gray-500 leading-relaxed mb-6">{prog.desc}</p>

                  <a
                    href="#"
                    className="font-body text-[13px] font-semibold flex items-center gap-2 group/link"
                    style={{ color: '#E8490C' }}
                  >
                    Join Now
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
