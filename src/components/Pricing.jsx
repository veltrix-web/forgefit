import React, { useState, useEffect, useRef } from 'react'

const PLANS = {
  monthly: [
    {
      name: 'Starter',
      price: 999,
      per: '/mo',
      tag: null,
      desc: 'Perfect for beginners',
      features: [
        'Gym floor access',
        'Basic equipment usage',
        'Locker room',
        '1 group class / week',
        'Fitness assessment',
      ],
      hot: false,
    },
    {
      name: 'Pro',
      price: 1999,
      per: '/mo',
      tag: 'Most Popular',
      desc: 'The all-round choice',
      features: [
        'Everything in Starter',
        'Unlimited group classes',
        'Personal trainer 2x/week',
        'Diet consultation',
        'Progress tracking',
        'Sauna & steam access',
      ],
      hot: true,
    },
    {
      name: 'Elite',
      price: 3499,
      per: '/mo',
      tag: null,
      desc: 'For serious athletes',
      features: [
        'Everything in Pro',
        'Daily personal training',
        'Custom meal plans',
        'Supplement guidance',
        'Priority booking',
        'Guest passes 2x/month',
      ],
      hot: false,
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: 8999,
      per: '/yr',
      tag: 'Save 25%',
      desc: 'Great year-round value',
      features: [
        'Gym floor access',
        'Basic equipment usage',
        'Locker room',
        '1 group class / week',
        'Fitness assessment',
      ],
      hot: false,
    },
    {
      name: 'Pro',
      price: 17999,
      per: '/yr',
      tag: 'Best Value',
      desc: 'Most popular — save big',
      features: [
        'Everything in Starter',
        'Unlimited group classes',
        'Personal trainer 2x/week',
        'Diet consultation',
        'Progress tracking',
        'Sauna & steam access',
      ],
      hot: true,
    },
    {
      name: 'Elite',
      price: 29999,
      per: '/yr',
      tag: 'Save 28%',
      desc: 'Maximum performance',
      features: [
        'Everything in Pro',
        'Daily personal training',
        'Custom meal plans',
        'Supplement guidance',
        'Priority booking',
        'Guest passes 2x/month',
      ],
      hot: false,
    },
  ],
}

export default function Pricing() {
  const [tab, setTab] = useState('monthly')
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
      id="pricing"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,73,12,0.07) 0%, transparent 70%)' }}
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
              Membership Plans
            </span>
            <span className="block w-8 h-[2px]" style={{ background: '#E8490C' }} />
          </div>
          <h2
            className="anim-init delay-100 font-display uppercase text-white mb-8"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 0.95 }}
          >
            CHOOSE YOUR <span style={{ color: '#E8490C' }}>PLAN</span>
          </h2>

          {/* Toggle pill */}
          <div
            className="anim-init delay-200 inline-flex rounded-lg p-1"
            style={{ background: '#141414', border: '1px solid #242424' }}
          >
            {['monthly', 'yearly'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="font-body text-[13px] font-semibold px-6 py-2 rounded-md capitalize transition-all duration-300"
                style={
                  tab === t
                    ? { background: '#E8490C', color: '#fff' }
                    : { color: '#555' }
                }
              >
                {t}
                {t === 'yearly' && (
                  <span
                    className="ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={
                      tab === 'yearly'
                        ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
                        : { background: 'rgba(232,73,12,0.15)', color: '#E8490C' }
                    }
                  >
                    -25%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS[tab].map((plan, i) => (
            <div
              key={plan.name}
              className={`anim-init delay-${(i + 1) * 100} card-lift relative rounded-2xl p-8`}
              style={
                plan.hot
                  ? {
                      background: 'linear-gradient(145deg, #1a0800, #120500)',
                      border: '1px solid rgba(232,73,12,0.5)',
                      boxShadow: '0 0 60px rgba(232,73,12,0.15)',
                    }
                  : {
                      background: '#0E0E0E',
                      border: '1px solid #1C1C1C',
                    }
              }
            >
              {/* Tag badge */}
              {plan.tag && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body text-[11px] font-bold tracking-widest uppercase text-white"
                  style={{ background: '#E8490C' }}
                >
                  {plan.tag}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className="font-display text-3xl uppercase text-white leading-none"
                >
                  {plan.name}
                </h3>
                <p className="font-body text-[12px] text-gray-600 mt-1">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-body text-lg text-gray-500">&#8377;</span>
                <span
                  className="font-display text-6xl leading-none"
                  style={{ color: plan.hot ? '#E8490C' : '#fff' }}
                >
                  {plan.price.toLocaleString('en-IN')}
                </span>
                <span className="font-body text-[12px] text-gray-600 ml-1">{plan.per}</span>
              </div>

              {/* Divider */}
              <div
                className="mb-6 h-[1px]"
                style={{ background: plan.hot ? 'rgba(232,73,12,0.2)' : '#1C1C1C' }}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-body text-[13px] text-gray-400"
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                      style={{
                        background: 'rgba(232,73,12,0.15)',
                        color: '#E8490C',
                      }}
                    >
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl font-body font-semibold text-[13px] tracking-wide transition-all duration-300 hover:scale-[1.02]"
                style={
                  plan.hot
                    ? {
                        background: '#E8490C',
                        color: '#fff',
                        boxShadow: '0 10px 30px rgba(232,73,12,0.4)',
                      }
                    : {
                        background: 'transparent',
                        color: '#fff',
                        border: '1px solid #2E2E2E',
                      }
                }
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
