import { motion } from 'framer-motion'
import { Clock, User, Zap } from 'lucide-react'

export default function ClassCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-charcoal p-8 border border-white/5 hover:border-crimson/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-1 text-[9px] font-body font-bold uppercase tracking-widest border transition-colors ${
            item.intensity === 'Extreme' ? 'border-crimson text-crimson bg-crimson/5' : 'border-white/10 text-ash/40'
          }`}>
            {item.intensity} Intensity
          </span>
          <span className="text-ash/20 font-headline font-black text-xs uppercase tracking-tighter group-hover:text-crimson/40 transition-colors">
            #{item.id}
          </span>
        </div>

        <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-bone mb-6 leading-none group-hover:text-crimson transition-colors">
          {item.title}
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-crimson" />
            <span className="text-ash/60 text-xs font-body font-bold uppercase tracking-widest">{item.time} ({item.duration})</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-crimson" />
            <span className="text-ash/60 text-xs font-body font-bold uppercase tracking-widest">Master: {item.trainer}</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-crimson" />
            <span className="text-ash/60 text-xs font-body font-bold uppercase tracking-widest">Type: {item.category}</span>
          </div>
        </div>
      </div>

      <button className="w-full py-4 border-t border-white/10 font-body text-[10px] font-bold uppercase tracking-[0.3em] text-ash/40 group-hover:text-bone group-hover:bg-crimson/10 transition-all">
        Reserve Session
      </button>

      {/* Decorative Power Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-crimson w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}
