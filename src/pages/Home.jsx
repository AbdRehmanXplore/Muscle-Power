import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import BmiCalculator from '../components/gym/BmiCalculator'
import TestimonialCarousel from '../components/common/TestimonialCarousel'
import { trainers } from '../data/gymData'

export default function Home() {
  useEffect(() => { 
    window.scrollTo(0, 0)
    document.title = 'Muscle Power | Forge Your Evolution'
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop" 
            alt="Gym Hero" 
            className="w-full h-full object-cover grayscale opacity-40 scale-105 active:scale-110 transition-transform duration-[10s]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.5em] mb-6">
              The Evolution Laboratory
            </p>
            <h1 className="font-headline font-black text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-bone uppercase tracking-tight mb-8">
              FORGE YOUR <br />
              <span className="text-crimson italic">PHYSIQUE</span>
            </h1>
            <p className="text-ash/60 font-body text-base sm:text-xl max-w-xl leading-relaxed mb-10">
              Muscle Power isn't just a gym. It's a high-performance protocol where science meets sweat to create the next generation of human potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/membership">
                <Button size="lg">Join the Protocol</Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" size="lg">Explore the Shop</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-10 right-10 z-20 hidden lg:flex gap-16 backdrop-blur-xl bg-white/5 p-8 border-l border-crimson">
          {[
            { val: "20+", label: "Elite Coaches" },
            { val: "15K+", label: "Evolution Cycles" },
            { val: "100%", label: "Total Commitment" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-headline font-black text-3xl text-bone mb-1">{stat.val}</p>
              <p className="text-crimson text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section: The Protocol */}
      <section className="py-24 bg-void">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute -inset-4 border border-crimson/20 -rotate-3" />
              <div className="absolute -inset-4 border border-white/5 rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=800&fit=crop" 
                alt="Intense" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 p-6 bg-crimson font-headline font-black text-white text-3xl leading-none italic uppercase">
                SCIENTIFIC <br />BRUTALITY
              </div>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-headline font-black text-4xl sm:text-5xl uppercase tracking-tighter text-bone mb-8 leading-[0.9]">
                  WHY <span className="text-crimson">MUSCLE</span> POWER?
                </h2>
                <p className="text-ash/50 font-body text-base leading-relaxed mb-6">
                  Unlike traditional fitness centers, Muscle Power operates on a three-core physical directive: Pure Strength, Metabolic Capacity, and Neurological Precision.
                </p>
                <ul className="space-y-4">
                  {[
                    "Elite Specialist Coaching",
                    "Scientific Recovery Protocols",
                    "High-Frequency Metabolic Tracks",
                    "Custom Performance Supplements"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-bone font-body font-bold text-sm tracking-widest uppercase">
                      <div className="w-2 h-2 bg-crimson" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Tools Section */}
      <section className="py-24 bg-abyss">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <BmiCalculator />
            <div className="flex flex-col justify-center gap-10 p-10 border border-white/5 bg-charcoal">
              <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.4em]">Proprietary Formula</p>
              <h2 className="font-headline font-black text-4xl uppercase tracking-tight text-bone">
                KNOWLEDGE IS <span className="text-crimson">POWER</span>
              </h2>
              <p className="text-ash/50 font-body text-sm leading-relaxed">
                We believe that transformation without data is a gamble. Use our basic metric audit tool to find your baseline, then join the Lab to unlock elite performance tracking and neurological analysis.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn the Science</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-headline font-black text-4xl uppercase tracking-tight text-bone">
              PROVEN <span className="text-crimson">EVOLUTION</span>
            </h2>
            <p className="text-ash/40 font-body text-[10px] font-bold uppercase tracking-[0.3em] mt-4">Verified Protocol Results</p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-crimson relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl leading-none text-white uppercase tracking-tighter mb-10">
            TIME FOR <br />ADAPTATION
          </h2>
          <Link to="/membership">
            <Button variant="outline" className="bg-white/10 border-white hover:bg-white text-white hover:text-crimson p-10">
              Initialize Your Protocol
            </Button>
          </Link>
        </div>
        {/* Large Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline font-black text-[30vw] text-black/[0.05] tracking-tighter select-none pointer-events-none">
          EVOLVE
        </div>
      </section>
    </div>
  )
}
