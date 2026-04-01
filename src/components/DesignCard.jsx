import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function DesignCard({ item }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative bg-charcoal overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tag */}
        {item.tag && (
          <span className="absolute top-4 left-0 px-3 py-1 bg-crimson text-white text-[10px] font-bold uppercase tracking-[0.2em] font-body">
            {item.tag}
          </span>
        )}

        {/* Quick Add Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(item)}
          className="absolute bottom-4 left-4 right-4 py-3 bg-crimson text-white text-xs font-bold uppercase tracking-[0.15em] font-body translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-crimson-dark"
        >
          Add to Cart
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-ash/40 text-[10px] font-body uppercase tracking-[0.2em] mb-1">
          {item.category}
        </p>
        <h3 className="font-headline font-bold text-bone text-base mb-2 group-hover:text-crimson transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-ash/50 text-xs font-body leading-relaxed mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-headline font-black text-crimson text-lg">
            Rs. {item.price.toLocaleString()}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="text-ash/40 hover:text-crimson transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
