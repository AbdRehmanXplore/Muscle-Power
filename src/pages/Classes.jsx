import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ClassCard from '../components/gym/ClassCard'
import { classes } from '../data/gymData'

const filterCategories = ['Strength', 'Cardio', 'Functional', 'Fat Loss']

export default function Classes() {
  useEffect(() => { 
    window.scrollTo(0, 0)
    document.title = 'Titan Protocols | Classes'
  }, [])

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <section className="bg-void py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,20,60,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.4em] mb-6 font-primary">
              The Evolution Calendar
            </p>
            <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 leading-[0.9] max-w-4xl">
              MASTER THE <span className="text-crimson text-gradient-crimson italic">SESSIONS</span>
            </h1>
            <p className="text-ash/50 font-body text-base sm:text-lg max-w-2xl leading-relaxed">
              From explosive HIIT protocols to strategic strength development, our world-class coaches have engineered every session for maximum physical and mental development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
            {classes.map(item => (
              <ClassCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Disclaimer */}
      <section className="py-24 bg-abyss">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-charcoal transform rotate-2 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=1000&fit=crop" 
                alt="Intense Session" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-crimson/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <div className="absolute -bottom-10 -right-10 bg-crimson p-10 font-headline font-black text-white text-3xl sm:text-4xl text-right leading-none max-w-[200px]">
                NO WEAKNESS. <br />ONLY EFFORT.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.4em] mb-4">Commitment Mandatory</p>
              <h2 className="font-headline font-black text-4xl sm:text-5xl uppercase tracking-tighter text-bone mb-8 leading-[0.95]">
                BEFORE YOU <span className="text-crimson">BEGIN</span>
              </h2>
              <div className="space-y-6 text-ash/60 font-body text-sm leading-relaxed max-w-xl">
                <p>Most programs focus on maintenance. At Muscle Power, we focus on evolution. Every session is designed to disrupt your homeostasis and force progress.</p>
                <p>We require all new members to undergo a Physical Performance Audit (PPA) before enrolling in Extreme Intensity protocols. Your safety and progress are our absolute mission.</p>
                <p>Registration for sessions opens 48 hours in advance for Elite members. Ensure you reserve your position early as session sizes are limited to maintain coach-to-athlete precision.</p>
              </div>
              <button className="mt-12 px-10 py-4 bg-crimson text-white font-body font-bold uppercase tracking-[0.2em] hover:bg-crimson-dark transition-all">
                Audit Your Performance
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
