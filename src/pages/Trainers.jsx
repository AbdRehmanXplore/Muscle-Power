import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TrainerCard from '../components/gym/TrainerCard'
import { trainers } from '../data/gymData'

const specialties = ['all', 'Strength', 'Functional', 'Endurance', 'Body Composition']

export default function Trainers() {
  const [filter, setFilter] = useState('all')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = filter === 'all'
    ? trainers
    : trainers.filter(t => t.specialty.toLowerCase().includes(filter.toLowerCase()) || t.role.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <section className="bg-void py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,20,60,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.4em] mb-6">
              The Architecture of Power
            </p>
            <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 leading-[0.9] max-w-4xl">
              ELITE <span className="text-crimson text-gradient-crimson italic">MASTERS</span> OF THE LAB
            </h1>
            <p className="text-ash/50 font-body text-base sm:text-lg max-w-2xl leading-relaxed">
              Our coaches are more than trainers — they are elite specialized operators dedicated to your physical evolution. Science-led, discipline-forged, results-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-void/90 backdrop-blur-3xl border-b border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-wrap gap-4 items-center">
          <span className="text-ash/30 font-body text-[10px] font-bold uppercase tracking-[0.2em] mr-4">Filter by Specialty</span>
          {specialties.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-6 py-2 text-[10px] font-bold transition-all duration-300 border ${
                filter === s 
                  ? 'border-crimson text-crimson bg-crimson/5' 
                  : 'border-white/5 text-ash/40 hover:border-white/20 hover:text-bone'
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filtered.map(trainer => (
                <TrainerCard key={trainer.id} trainer={trainer} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-40 border border-dashed border-white/5">
              <p className="text-ash/20 font-headline font-black text-3xl uppercase tracking-widest italic opacity-50">
                Searching for Next Master...
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Section */}
      <section className="py-32 bg-abyss relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-headline font-black text-4xl sm:text-5xl uppercase tracking-tighter text-bone mb-8">
            WANT TO JOIN THE <span className="text-crimson">ELITE</span>?
          </h2>
          <p className="text-ash/60 font-body text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            We're always looking for master level coaches with a passion for high-performance and scientific transformation. Reach out to the lab headquarters.
          </p>
          <a href="/contact" className="inline-block px-12 py-5 bg-crimson text-white font-body font-bold uppercase tracking-[0.15em] hover:bg-crimson-dark transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,20,60,0.4)]">
            Apply as Master
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline font-black text-[20vw] text-white/[0.02] tracking-tighter whitespace-nowrap select-none">
          MUSCLE POWER
        </div>
      </section>
    </div>
  )
}
