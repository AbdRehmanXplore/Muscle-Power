import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/common/Button'
import { LayoutGrid, Camera, Zap, Activity } from 'lucide-react'

const categories = ['All', 'The Lab', 'Titan Athletes', 'Training']

const galleryItems = [
  { id: 1, category: 'The Lab', title: 'Cryo-Recovery Zone', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop' },
  { id: 2, category: 'Titan Athletes', title: 'High-Performance Squat', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop' },
  { id: 3, category: 'Training', title: 'Neurological Sync', image: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=600&fit=crop' },
  { id: 4, category: 'The Lab', title: 'Bio-Metric Analysis', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&h=600&fit=crop' },
  { id: 5, category: 'Titan Athletes', title: 'Endurance Protocol', image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?w=800&h=600&fit=crop' },
  { id: 6, category: 'Training', title: 'Compound Mechanics', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop' },
  { id: 7, category: 'The Lab', title: 'Main Server Hall', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&h=600&fit=crop' },
  { id: 8, category: 'Titan Athletes', title: 'Deadlift Mastery', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop' },
  { id: 9, category: 'Training', title: 'Kinesis Track', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => { 
    window.scrollTo(0, 0)
    document.title = 'Visual Archives | Muscle Power'
  }, [])

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="pt-24 pb-32 min-h-screen bg-void">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[120px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.5em] mb-4">Visual Archives</p>
            <h1 className="font-headline font-black text-5xl sm:text-7xl lg:text-9xl uppercase tracking-tighter text-bone leading-none mb-12">
              THE <span className="text-crimson italic">SIGHTS</span> <br />OF POWER
            </h1>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-12">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 font-headline font-black text-xs uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-crimson border-crimson text-white skew-x-[-10deg]' 
                    : 'border-white/10 text-ash/40 hover:border-crimson/50 hover:text-bone'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] bg-charcoal cursor-pointer overflow-hidden border border-white/5"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-crimson text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.category}</p>
                    <h3 className="text-xl font-headline font-black text-bone uppercase tracking-tighter">{item.title}</h3>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap className="w-5 h-5 text-crimson" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/98 backdrop-blur-2xl flex items-center justify-center p-6 lg:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full aspect-video bg-charcoal border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover border-b-4 border-crimson"
              />
              <div className="absolute -top-12 right-0 flex gap-4">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 bg-crimson flex items-center justify-center text-white"
                >
                  <Activity className="w-5 h-5 rotate-45" />
                </button>
              </div>
              <div className="p-8">
                 <p className="text-crimson text-xs font-bold uppercase tracking-[0.4em] mb-2">{selectedImage.category}</p>
                 <h2 className="text-3xl font-headline font-black text-bone uppercase tracking-tighter">{selectedImage.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
