import React, { useEffect, useRef } from 'react'
import { BadgeCheck, Instagram, Linkedin } from 'lucide-react'

const TRAINERS = [
  {
    name: 'Raj Sharma',
    role: 'Strength & Power',
    exp: '8 Years',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Priya Mehta',
    role: 'Yoga & Flexibility',
    exp: '6 Years',
    image:
      'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Arjun Patel',
    role: 'Cardio & Endurance',
    exp: '10 Years',
    image:
      'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Nutrition & Wellness',
    exp: '5 Years',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
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
                Meet The Experts
              </span>
            </div>
            <h2
              className="anim-init delay-100 font-display uppercase text-white"
              style={{ fontSize: 'clamp(32px, 9vw, 72px)', lineHeight: 0.95 }}
            >
              OUR<br />
              <span style={{ color: '#E8490C' }}>TRAINERS</span>
            </h2>
          </div>
          <a
            className="anim-init delay-200 font-body text-sm font-semibold self-start md:self-end pb-1 inline-flex items-center gap-2"
            href="#"
            style={{ color: '#E8490C', borderBottom: '1px solid #E8490C' }}
          >
            View All Trainers
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRAINERS.map((t, i) => (
            <div
              key={t.name}
              className={`anim-init delay-${(i + 1) * 100} card-lift rounded-xl overflow-hidden group`}
              style={{ background: '#141414', border: '1px solid #242424' }}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.25) 55%, rgba(8,8,8,0.1) 100%)',
                  }}
                />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
                  style={{ background: 'rgba(8,8,8,0.75)', border: '1px solid rgba(232,73,12,0.24)' }}
                >
                  <BadgeCheck size={13} style={{ color: '#E8490C' }} />
                  <span className="font-body text-[10px] text-gray-200 uppercase tracking-wide">Certified</span>
                </div>

                <div className="absolute top-3 right-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {[Instagram, Linkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-8 h-8 rounded-md flex items-center justify-center"
                      style={{ background: 'rgba(8,8,8,0.72)', color: '#E8490C', border: '1px solid rgba(232,73,12,0.25)' }}
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-[20px] uppercase text-white leading-tight">
                  {t.name}
                </h3>
                <p className="font-body text-[13px] mt-1 font-medium" style={{ color: '#E8490C' }}>
                  {t.role}
                </p>
                <p className="font-body text-[11px] text-gray-500 mt-1 uppercase tracking-wider">
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
