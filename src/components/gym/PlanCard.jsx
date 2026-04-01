import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '../common/Button'
import { CheckCircle } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function PlanCard({ plan }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleSelect = () => {
    addToCart(plan)
    navigate('/checkout')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-10 flex flex-col h-full overflow-hidden group transition-all duration-500 border-2 ${
        plan.highlight 
          ? 'bg-crimson/5 border-crimson shadow-[0_0_50px_rgba(220,20,60,0.1)]' 
          : 'bg-charcoal border-white/5 hover:border-white/20'
      }`}
    >
      {plan.highlight && (
        <div className="absolute top-0 right-0 bg-crimson text-white px-4 py-1 text-[8px] font-bold uppercase tracking-[0.2em] -rotate-45 translate-x-6 translate-y-2">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.3em] mb-4">
          {plan.period === 'year' ? 'Annual Plan' : 'Monthly Protocol'}
        </p>
        <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-bone mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-headline font-black text-bone">PKR {plan.price.toLocaleString()}</span>
          <span className="text-ash/40 font-body text-sm lowercase"> / {plan.period}</span>
        </div>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 group/item">
            <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${plan.highlight ? 'text-crimson' : 'text-ash/30 group-hover/item:text-crimson'}`} />
            <span className="text-ash/60 text-sm font-body leading-tight group-hover/item:text-bone transition-colors">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button 
        variant={plan.highlight ? 'primary' : 'outline'} 
        fullWidth 
        className="w-full mt-auto group-hover:scale-[1.02]"
        onClick={handleSelect}
      >
        {plan.cta}
      </Button>
      
      {/* Power Bar Accent */}
      <div className={`absolute bottom-0 left-0 h-1 bg-crimson transition-all duration-700 ${plan.highlight ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </motion.div>
  )
}
