import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Input, TextArea } from '../components/common/Input'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-void px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 bg-crimson/10 flex items-center justify-center mx-auto mb-8 border border-crimson/30">
            <Mail className="w-10 h-10 text-crimson" />
          </div>
          <h2 className="font-headline font-black text-4xl text-bone uppercase mb-4 tracking-tighter italic">DIRECTIVE <span className="text-crimson">SENT</span></h2>
          <p className="text-ash/50 font-body text-sm mb-10 leading-relaxed uppercase tracking-widest font-bold">The Lab will synchronize with your frequency within 12 hours.</p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Reset Protocol</Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-void overflow-hidden">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.5em] mb-6 font-primary">Open Communication</p>
              <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 leading-[0.9] italic">
                REACH THE <span className="text-crimson">LAB</span>
              </h1>
              <p className="text-ash/60 font-body text-sm sm:text-base max-w-lg mb-12 leading-relaxed uppercase tracking-widest font-bold">
                Operational status: UNLIMITED. Force your inquiry through our secure channels.
              </p>

              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Sector 7 Area', detail: 'Gulberg III, Lahore, PC' },
                  { icon: Phone, title: 'Secure Line', detail: '+92 300 1234567' },
                  { icon: Mail, title: 'Directive Email', detail: 'lab@musclepower.pc' },
                  { icon: Clock, title: 'Lab Hours', detail: '24/7 Access (Elite Tier only)' },
                ].map(item => (
                  <div key={item.title} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-charcoal border border-white/5 flex items-center justify-center transition-colors group-hover:border-crimson">
                      <item.icon className="w-5 h-5 text-crimson" />
                    </div>
                    <div>
                      <p className="text-ash/30 text-[10px] font-bold uppercase tracking-widest mb-1">{item.title}</p>
                      <p className="text-bone font-headline font-black text-xl uppercase tracking-tighter leading-none">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="bg-charcoal p-10 border border-white/5 relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 -rotate-45 translate-x-12 -translate-y-12" />
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <Input label="Protocol ID Name" placeholder="Goliath Titan" required />
                <Input label="Secure Email" type="email" placeholder="titans@musclepower.pc" required />
                <Input label="Subject Protocol" placeholder="Hypertrophy Audit Request" required />
                <TextArea label="Transmission Data" placeholder="State your mission protocol..." rows={4} required />
                <Button type="submit" className="w-full h-16 text-lg">Transmit Data</Button>
              </form>
              <div className="absolute bottom-0 left-0 h-1 bg-crimson w-0 group-hover:w-full transition-all duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Visual background text */}
      <div className="absolute bottom-10 left-10 font-headline font-black text-[15vw] text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none rotate-3">
        CONTACT PROTOCOL
      </div>
    </div>
  )
}
