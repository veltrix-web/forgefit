import React, { useEffect, useRef, useState } from 'react'
import { Clock3, Dumbbell, ShieldCheck, Users } from 'lucide-react'

const FEATURES = [
  {
    num: '01',
    title: 'Expert Trainers',
    desc: 'Certified professionals who design personalized workout plans tailored to your unique goals and fitness level.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'Modern Equipment',
    desc: 'State-of-the-art machines and free weights, regularly maintained and updated to support every training style.',
    icon: Dumbbell,
  },
  {
    num: '03',
    title: 'Flexible Timing',
    desc: 'Open 6 AM to 11 PM, seven days a week - train when it works for you, not when it works for us.',
    icon: Clock3,
  },
  {
    num: '04',
    title: 'Real Community',
    desc: 'A diverse, welcoming membership base that keeps you accountable, motivated, and always coming back.',
    icon: Users,
  },
]

const BANNER_IMAGE =
  'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1800'
const BANNER_FALLBACK =
  'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1800'

export default function WhyJoinUs() {
  const ref = useRef(null)
  const [bannerSrc, setBannerSrc] = useState(BANNER_IMAGE)

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
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,73,12,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
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
            style={{ fontSize: 'clamp(32px, 9vw, 72px)', lineHeight: 0.95 }}
          >
            WHY JOIN <span style={{ color: '#E8490C' }}>US?</span>
          </h2>
          <p className="anim-init delay-200 font-body text-[15px] text-gray-500 max-w-[500px] mx-auto leading-relaxed">
            Our diverse membership base creates a friendly and supportive atmosphere where you can
            make friends and stay motivated every single day.
          </p>
        </div>

        <div
          className="anim-init delay-300 relative w-full rounded-2xl overflow-hidden mb-16"
          style={{
            height: 'clamp(230px, 35vw, 420px)',
            border: '1px solid rgba(232,73,12,0.18)',
          }}
        >
          <img
            src={bannerSrc}
            alt="Members performing group workout in gym"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => {
              setBannerSrc((prev) => (prev === BANNER_FALLBACK ? prev : BANNER_FALLBACK))
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.74), rgba(8,8,8,0.26), rgba(8,8,8,0.74))' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.88), transparent)' }}
          />

          <div className="absolute left-4 top-4 sm:left-6 sm:top-6 md:left-10 md:top-10">
            <p className="font-display text-white uppercase leading-none" style={{ fontSize: 'clamp(24px, 8vw, 58px)' }}>
              PUSH YOUR
              <span className="block" style={{ color: '#E8490C' }}>
                LIMITS DAILY
              </span>
            </p>
            <p className="font-body text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 max-w-[220px] sm:max-w-[260px]">
              Small daily improvements create a stronger body and a sharper mind.
            </p>
          </div>

          <div className="absolute right-6 bottom-6 hidden sm:grid gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ background: 'rgba(8,8,8,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <Users size={15} style={{ color: '#E8490C' }} />
              <span className="font-body text-xs text-gray-200 uppercase tracking-wide">500+ Members</span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{ background: 'rgba(8,8,8,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <Clock3 size={15} style={{ color: '#E8490C' }} />
              <span className="font-body text-xs text-gray-200 uppercase tracking-wide">Open 6AM - 11PM</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon

            return (
              <div
                key={feat.num}
                className={`anim-init delay-${(i + 1) * 100} card-lift p-5 sm:p-6 rounded-xl`}
                style={{ background: '#0E0E0E', border: '1px solid #1C1C1C' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(232,73,12,0.14)', color: '#E8490C' }}
                >
                  <Icon size={18} />
                </div>
                <div className="font-display text-3xl sm:text-4xl mb-3 select-none" style={{ color: 'rgba(232,73,12,0.2)' }}>
                  {feat.num}
                </div>
                <h3 className="font-heading font-bold text-[18px] uppercase text-white mb-2">
                  {feat.title}
                </h3>
                <p className="font-body text-[13px] text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
