import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DesignCard from '../components/DesignCard'
import { products } from '../data/products'

const categories = ['all', 'Supplements', 'Gear', 'Programs']

export default function Shop() {
  const [active, setActive] = useState('all')
  useEffect(() => { 
    window.scrollTo(0, 0)
    document.title = 'Elite Gear & Supplements | Muscle Power'
  }, [])

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active)

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-abyss py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.3em] mb-4">
              Premium Performance
            </p>
            <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-bone mb-8 leading-[0.9]">
              The <span className="text-crimson">Gym</span> Shop
            </h1>
            <p className="text-ash/50 font-body text-base sm:text-lg max-w-xl leading-relaxed">
              Fuel your ambition with science-backed supplements and elite-grade training gear. Built for those who refuse to settle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-30 bg-void/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-8 py-3 text-[10px] font-body font-bold uppercase tracking-[0.2em] transition-all duration-300 border-b-2 ${
                  active === c
                    ? 'border-crimson text-crimson'
                    : 'border-transparent text-ash/40 hover:text-bone hover:border-white/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filtered.map(item => (
                <DesignCard key={item.id} item={item} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-32 border-2 border-dashed border-white/5">
              <p className="text-ash/30 font-body text-xl uppercase tracking-widest font-bold">More Inventory Arriving Soon</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
