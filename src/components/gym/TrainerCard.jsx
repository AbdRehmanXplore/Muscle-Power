import { motion } from 'framer-motion'

export default function TrainerCard({ trainer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-charcoal overflow-hidden border border-white/5 hover:border-crimson/30 transition-all duration-700"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void to-transparent z-10" />
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        
        {/* Social Overlay */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
          <a href={trainer.socials.instagram} className="w-8 h-8 bg-crimson text-white flex items-center justify-center hover:bg-white hover:text-crimson transition-all">
            <span className="text-[10px] uppercase font-bold">IG</span>
          </a>
          <a href={trainer.socials.twitter} className="w-8 h-8 bg-crimson text-white flex items-center justify-center hover:bg-white hover:text-crimson transition-all">
            <span className="text-[10px] uppercase font-bold">TW</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-20">
        <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.3em] mb-2 transform -skew-x-12 inline-block">
          {trainer.role}
        </p>
        <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-bone mb-4 transition-colors group-hover:text-crimson">
          {trainer.name}
        </h3>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-body font-bold uppercase tracking-widest text-ash/60">
              {trainer.specialty}
            </span>
          </div>
          <p className="text-ash/40 text-[11px] font-body leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100 italic">
            "{trainer.bio}"
          </p>
        </div>
      </div>

      {/* Power Bar Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-crimson transition-all duration-700 group-hover:w-full" />
    </motion.div>
  )
}
