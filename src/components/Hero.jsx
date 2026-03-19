import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, BadgeCheck, Clock3, Dumbbell, Play, Sparkles, Users } from 'lucide-react'

const STATS = [
  { value: '500+', label: 'Active Members', icon: Users },
  { value: '20+', label: 'Expert Trainers', icon: BadgeCheck },
  { value: '50+', label: 'Programs', icon: Dumbbell },
]

const HERO_IMAGE =
  'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1200'
const HERO_IMAGE_FALLBACK =
  'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1200'

export default function Hero() {
  const ref = useRef(null)
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE)

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
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div
        className="absolute top-[18%] left-[12%] w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none animate-pulse2"
        style={{ background: 'radial-gradient(circle, rgba(232,73,12,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-10 right-[8%] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,73,12,0.07) 0%, transparent 70%)' }}
      />

      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] hidden sm:block"
        style={{ background: 'linear-gradient(to bottom, transparent, #E8490C, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-14 sm:pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="anim-init delay-0 inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-7">
              <span
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(232,73,12,0.12)', color: '#E8490C' }}
              >
                <Sparkles size={14} />
              </span>
              <span
                className="font-body text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase"
                style={{ color: '#E8490C' }}
              >
                Best Fitness In The Town
              </span>
            </div>

            <div className="anim-init delay-100 mb-2">
              <h1
                className="font-display uppercase leading-[0.9] text-stroke block"
                style={{ fontSize: 'clamp(56px, 16vw, 140px)' }}
              >
                MAKE
              </h1>
            </div>
            <div className="anim-init delay-200 mb-1">
              <h1
                className="font-display uppercase leading-[0.9] text-white block"
                style={{ fontSize: 'clamp(56px, 16vw, 140px)' }}
              >
                YOUR
              </h1>
            </div>
            <div className="anim-init delay-300 mb-6 sm:mb-8">
              <h1
                className="font-display uppercase leading-[0.9] text-white block"
                style={{ fontSize: 'clamp(42px, 11vw, 100px)' }}
              >
                BODY <span style={{ color: '#E8490C' }}>SHAPE</span>
              </h1>
            </div>

            <p className="anim-init delay-400 font-body text-[14px] sm:text-[15px] text-gray-400 leading-relaxed max-w-[420px] mb-8 sm:mb-10">
              Unleash your potential and embark on a journey towards a stronger, fitter, and more
              confident you. Witness the incredible transformation your body is capable of.
            </p>

            <div className="anim-init delay-500 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
              <a
                href="#program"
                className="btn-brand inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-7 sm:px-8 py-3.5 rounded-sm tracking-wide"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
              <a
                href="#service"
                className="btn-ghost inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-7 sm:px-8 py-3.5 rounded-sm tracking-wide"
              >
                <Play size={15} />
                Learn More
              </a>
            </div>

            <div
              className="anim-init delay-600 grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label}>
                  <p className="font-display text-3xl sm:text-4xl leading-none" style={{ color: '#E8490C' }}>
                    {value}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 sm:gap-2 font-body text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-[0.16em] sm:tracking-widest">
                    <Icon size={12} />
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="anim-init delay-300 relative flex justify-center lg:justify-end">
            <span
              className="absolute font-display select-none pointer-events-none hidden sm:block"
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

            <div
              className="relative w-full max-w-[360px] sm:max-w-[430px] rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '3/4',
                border: '1px solid rgba(232,73,12,0.2)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), inset 0 0 60px rgba(232,73,12,0.04)',
              }}
            >
              <img
                src={heroSrc}
                alt="Athlete performing battle rope workout"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 24%' }}
                onError={() => {
                  setHeroSrc((prev) => (prev === HERO_IMAGE_FALLBACK ? prev : HERO_IMAGE_FALLBACK))
                }}
              />

              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.82), rgba(8,8,8,0.14))' }}
              />

              <div
                className="absolute top-3 left-3 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg"
                style={{
                  background: 'rgba(8,8,8,0.72)',
                  border: '1px solid rgba(232,73,12,0.3)',
                }}
              >
                <BadgeCheck size={14} style={{ color: '#E8490C' }} />
                <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-200">
                  Verified Coaches
                </span>
              </div>
            </div>

            <div
              className="absolute left-2 bottom-3 sm:left-0 sm:bottom-8 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl max-w-[85%] sm:max-w-none"
              style={{
                background: 'rgba(20,20,20,0.9)',
                border: '1px solid rgba(232,73,12,0.3)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="font-body text-[11px] sm:text-xs text-gray-400 inline-flex items-center gap-1.5 sm:gap-2">
                <Clock3 size={13} />
                Next class starts in
              </p>
              <p className="font-display text-xl sm:text-2xl mt-0.5" style={{ color: '#E8490C' }}>
                2 HRS 30 MIN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
      />
    </section>
  )
}
