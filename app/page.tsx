export default function Home() {
  const faqs = [
    {
      q: 'How does the interaction checker work?',
      a: 'We query the FDA and RxNorm drug databases in real time to flag dangerous combinations, contraindications, and timing conflicts across all your medications.'
    },
    {
      q: 'Is my medication data private and secure?',
      a: 'Yes. All data is encrypted at rest and in transit. We never sell your health information and comply fully with HIPAA guidelines.'
    },
    {
      q: 'Can I share my medication list with my doctor?',
      a: 'Absolutely. You can export a clean PDF or share a secure link directly with your healthcare provider at any time.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-4 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Personal Medication Safety
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Dangerous Drug Interactions <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          MedSync tracks all your prescriptions, checks for harmful interactions using FDA data, and builds an optimized daily schedule for maximum effectiveness.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start for $8/mo — Stay Safe
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '💊', title: 'Interaction Alerts', desc: 'Real-time checks against 100k+ drug combinations' },
          { icon: '⏰', title: 'Smart Scheduling', desc: 'AI-optimized timing to maximize drug effectiveness' },
          { icon: '📋', title: 'Doctor Reports', desc: 'Shareable PDF summaries for every appointment' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited medications tracked',
              'Real-time FDA interaction checks',
              'AI-powered timing optimizer',
              'Doctor-ready PDF exports',
              'Caregiver sharing (up to 3)',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        &copy; {new Date().getFullYear()} MedSync. Not a substitute for professional medical advice.
      </footer>
    </main>
  )
}
