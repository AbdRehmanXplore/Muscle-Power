import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <section className="relative bg-abyss py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[150px]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.3em] mb-3">The Directive</p>
            <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 max-w-4xl leading-[0.9] italic">
              WE DON'T TRAIN <span className="text-crimson">CLIENTS</span>.
              <br />WE FORGE <span className="text-gradient-crimson">TITANS</span>.
            </h1>
            <p className="text-ash/60 font-body text-base sm:text-lg max-w-2xl leading-relaxed">
              Muscle Power was born from a simple refusal — a refusal to accept biological mediocrity. We operate at the intersection of elite sports science and relentless effort.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-ash/40 font-body text-4xl leading-relaxed max-w-4xl mx-auto italic font-black uppercase tracking-tighter">
            "Your body is a biological machine. Like any machine, it can be <span className="text-crimson">engineered</span>, optimized, and pushed beyond its factory specifications."
          </p>
        </div>
      </section>

      <section className="py-24 bg-void">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-square">
                <div className="absolute inset-4 border border-crimson/20" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop" alt="Lab Origin" className="w-full h-full object-cover grayscale opacity-60" />
                <div className="absolute -left-3 top-8 bottom-8 w-1 bg-crimson" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.3em] mb-3">The Origin</p>
              <h2 className="font-headline font-black text-4xl uppercase tracking-tighter text-bone mb-6">Born in the <span className="text-crimson italic">Steel</span></h2>
              <div className="space-y-6 text-ash/60 font-body text-sm leading-relaxed max-w-xl">
                <p>Founded in the industrial heartbeat of Lahore, Muscle Power emerged from a team of sports scientists and strength masters who believed that traditional fitness was obsolete.</p>
                <p>We started with a single power rack and an unshakeable conviction: that high-performance training shouldn't be reserved for elite professionals. It should be a standard for anyone with the discipline to pursue it.</p>
                <p>Today, the Lab is a multi-sector performance facility where we obsess over every metric, every recovery cycle, and every evolution of our members. This isn't a leisure center. This is a forge.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-abyss py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { tag: 'Mission', title: 'Biological Supremacy', desc: 'To provide the most advanced scientific protocols for physical transformation and mental resilience.' },
            { tag: 'Vision', title: 'Rewrite the Standard', desc: 'To establish Muscle Power as the global definitive name in human performance engineering — synonymous with uncompromising results.' },
          ].map((item, i) => (
            <motion.div key={item.tag} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-charcoal p-12 border border-white/5 relative group">
              <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.3em] mb-4">{item.tag}</p>
              <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-bone mb-4 italic leading-none">{item.title}</h3>
              <p className="text-ash/50 font-body text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-crimson w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
