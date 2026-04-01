import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { X, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQty, totalPrice, isCartOpen, setIsCartOpen } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 350 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-void border-l border-white/5 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-charcoal/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-crimson flex items-center justify-center">
                  <span className="font-headline font-black text-white text-[10px] tracking-tighter">MP</span>
                </div>
                <h2 className="font-headline font-black text-xl text-bone uppercase tracking-tight italic">
                  THE <span className="text-crimson">INVENTORY</span>
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-ash/40 hover:text-crimson transition-all hover:rotate-90 duration-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-8 h-8 text-ash/20" />
                  </div>
                  <p className="text-ash/40 font-body text-sm uppercase tracking-widest font-bold mb-6">Inventory Void</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-crimson text-[10px] font-bold uppercase tracking-[0.2em] font-body hover:text-white transition-colors"
                  >
                    Load New Assets &rarr;
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-24 h-28 bg-charcoal relative overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline font-black text-base text-bone uppercase tracking-tight truncate group-hover:text-crimson transition-colors">{item.name}</h4>
                      <p className="text-crimson font-headline font-black text-sm mt-1 uppercase italic">
                        PKR {item.price.toLocaleString()}
                      </p>
                      
                      <div className="flex items-center gap-4 mt-6">
                        <div className="flex items-center bg-charcoal border border-white/10">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-8 h-8 text-ash/40 hover:text-crimson text-sm flex items-center justify-center transition-colors"
                          >−</button>
                          <span className="text-bone text-[10px] font-body font-black w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-8 h-8 text-ash/40 hover:text-crimson text-sm flex items-center justify-center transition-colors"
                          >+</button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-ash/20 hover:text-crimson transition-colors uppercase text-[9px] font-bold tracking-widest"
                        >
                          Eject
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-charcoal/30 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-ash/40 text-[9px] uppercase font-bold tracking-widest mb-1">Estimated Directives</p>
                    <p className="text-ash/60 font-body text-xs uppercase tracking-tight italic">Complimentary Logistics Deployment</p>
                  </div>
                  <div className="text-right">
                    <p className="text-ash/40 text-[9px] uppercase font-bold tracking-widest mb-1">Total Payload</p>
                    <p className="font-headline font-black text-3xl text-crimson tracking-tighter leading-none">
                      PKR {totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="group block w-full py-5 bg-crimson text-white text-center font-body text-xs font-bold uppercase tracking-[0.2em] hover:bg-crimson-dark transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Finalize Checkout <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 w-0 group-hover:w-full transition-all duration-700" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
