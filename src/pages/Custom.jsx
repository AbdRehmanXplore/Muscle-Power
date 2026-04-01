import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Input, TextArea } from '../components/common/Input'
import { CheckCircle, Zap, Activity, TrendingUp } from 'lucide-react'

export default function Custom() {
  const [submitted, setSubmitted] = useState(false)
  const [requestId, setRequestId] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = 'REQ-' + Math.random().toString(36).substr(2, 6).toUpperCase()
    setRequestId(id)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-void px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 bg-crimson/10 flex items-center justify-center mx-auto mb-8 border border-crimson/30">
            <Zap className="w-10 h-10 text-crimson" />
          </div>
          <h2 className="font-headline font-black text-4xl text-bone uppercase mb-4 tracking-tighter italic">PROTOCOL <span className="text-crimson">RESERVED</span></h2>
          <div className="bg-charcoal p-4 border-l-4 border-crimson mb-6 inline-block text-left w-full">
            <p className="text-ash/40 text-[10px] uppercase tracking-widest mb-1 font-bold">Request ID</p>
            <p className="text-bone font-headline font-black text-2xl tracking-tighter uppercase">{requestId}</p>
          </div>
          <p className="text-ash/50 font-body text-sm mb-10 leading-relaxed uppercase tracking-widest font-bold">A Master coach will analyze your performance data and contact you within 24 hours.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">New Request</Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-void overflow-hidden">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[150px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Context */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.5em] mb-6 font-primary">Experimental Protocols</p>
              <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 leading-[0.9] italic">
                CUSTOM <span className="text-crimson text-gradient-crimson">COACHING</span>
              </h1>
              <p className="text-ash/50 font-body text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
                For when your vision exceeds our standard protocols. Request a custom athletic program engineered specifically for your biological blueprints and massive goals.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Activity, label: 'Biosync Analysis', desc: 'Full physical audit' },
                  { icon: TrendingUp, label: 'Hyper-Scaling', desc: 'Rapid adaptation paths' },
                ].map(item => (
                  <div key={item.label} className="p-6 bg-charcoal border border-white/5">
                    <item.icon className="w-6 h-6 text-crimson mb-4" />
                    <p className="text-bone font-headline font-black text-sm uppercase tracking-tight mb-1">{item.label}</p>
                    <p className="text-ash/40 text-[10px] font-body uppercase font-bold tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  'Bespoke Competition Prep',
                  'Injury Rehabilitation Directives',
                  'High-Performance Lifestyle Coaching',
                  'Corporate Athletic Seminars'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-ash/60 font-body text-xs uppercase tracking-widest font-bold">
                    <CheckCircle className="w-4 h-4 text-crimson" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="bg-charcoal p-10 border border-white/5 relative group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 -rotate-45 translate-x-12 -translate-y-12" />
               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Protocol ID Name" placeholder="Goliath Titan" required />
                  <Input label="Secure Email" type="email" placeholder="titans@musclepower.pc" required />
                </div>
                <Input label="Goal Focus" placeholder="Competitive Bodybuilding / Pro Endurance" required />
                <TextArea label="Biological & Performance Background" placeholder="Provide current metrics, injury history, and target evolution cycle..." rows={5} required />
                <Button type="submit" className="w-full h-16 text-lg">Initialize Custom Audit</Button>
               </form>
               <div className="absolute bottom-0 left-0 h-1 bg-crimson w-0 group-hover:w-full transition-all duration-1000" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-headline font-black text-[20vw] text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none -rotate-12">
        ELITE CUSTOM
      </div>
    </div>
  )
}
