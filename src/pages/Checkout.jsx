import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../services/stripe'
import CheckoutForm from '../components/CheckoutForm'
import { Input, TextArea } from '../components/common/Input'
import { CheckCircle, ShieldCheck, Truck } from 'lucide-react'

export default function Checkout() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { cartItems, removeFromCart, updateQty, totalPrice, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', notes: ''
  })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Protocol ID Name required'
    if (!form.email.trim()) e.email = 'Secure Email required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid encrypted format'
    if (!form.phone.trim()) e.phone = 'Contact line required'
    if (!form.address.trim()) e.address = 'Primary location required'
    if (!form.city.trim()) e.city = 'Sector/City required'
    return e
  }

  const handlePaymentSuccess = (paymentId) => {
    const id = 'MP-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    setOrderId(id)
    setOrderPlaced(true)
    clearCart()
    console.log('Payment Successful:', paymentId)
  }

  if (orderPlaced) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-24 h-24 bg-crimson/10 flex items-center justify-center mx-auto mb-8 border border-crimson/20">
            <CheckCircle className="w-12 h-12 text-crimson" />
          </div>
          <h2 className="font-headline font-black text-4xl text-bone uppercase mb-4 tracking-tighter">
            PROTOCOL <span className="text-crimson text-gradient-crimson italic">INITIALIZED</span>
          </h2>
          <div className="bg-charcoal p-6 border-l-4 border-crimson mb-8 inline-block text-left w-full">
            <p className="text-ash/40 text-[10px] uppercase tracking-widest mb-1 font-bold">Transaction Hash / Order ID</p>
            <p className="text-bone font-headline font-black text-2xl tracking-tighter uppercase">{orderId}</p>
          </div>
          <p className="text-ash/50 font-body text-sm mb-10 leading-relaxed">
            Your credentials and inventory are being synchronized. A master coach will contact your secure line within 24 hours.
          </p>
          <a href="/dashboard" className="inline-block px-10 py-4 bg-crimson text-white font-body text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-crimson-dark transition-all">
            Enter Dashboard
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-void">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.4em] mb-4">Finalizing Directive</p>
            <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone leading-none">
              SECURE <span className="text-crimson italic">CHECKOUT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form & Items (Left) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Inventory Summary */}
            <div className="space-y-6">
              <h2 className="font-headline font-black text-xl text-bone uppercase tracking-tighter flex items-center gap-3">
                <Truck className="w-5 h-5 text-crimson" /> Active Inventory ({cartItems.length})
              </h2>
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-6 bg-charcoal p-5 border border-white/5 group">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-headline font-bold text-bone text-base uppercase tracking-tight">{item.name}</h3>
                        <p className="text-crimson font-headline font-black text-lg">PKR {item.price.toLocaleString()}</p>
                      </div>
                      <p className="text-ash/40 text-[10px] uppercase font-bold tracking-widest mt-1">{item.category} • Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Details */}
            <div className="space-y-8 bg-charcoal/50 p-8 border border-white/5">
              <h2 className="font-headline font-black text-xl text-bone uppercase tracking-tighter flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-crimson" /> Secure Identity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Master Goliath" />
                <Input label="Secure Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="lab@musclepower.pc" />
                <Input label="Encrypted Line" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+92 300 123 4567" />
                <Input label="Primary Sector (City)" value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="Lahore" />
              </div>
              <Input label="Geographic Coordinates (Address)" value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="Industrial Area, Sector 7" />
              <TextArea label="Special Directives (Notes)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Any deployment instructions..." rows={3} />
            </div>
          </div>

          {/* Checkout (Right) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div className="bg-charcoal p-8 border-2 border-crimson shadow-[0_0_50px_rgba(220,20,60,0.1)]">
                <h2 className="font-headline font-black text-2xl text-bone uppercase tracking-tighter mb-8 italic">
                  FINALIZE <span className="text-crimson">TRANSACTION</span>
                </h2>
                
                <div className="space-y-4 mb-10 pb-10 border-b border-white/10">
                  <div className="flex justify-between text-xs font-body uppercase tracking-[0.1em]">
                    <span className="text-ash/50">Baseline Cost</span>
                    <span className="text-bone">PKR {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-body uppercase tracking-[0.1em]">
                    <span className="text-ash/50">Logistics Deployment</span>
                    <span className="text-crimson font-black italic">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between pt-6">
                    <span className="font-headline font-black text-sm text-bone uppercase tracking-widest">Total Directive</span>
                    <span className="font-headline font-black text-3xl text-crimson tracking-tighter leading-none">
                      PKR {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Stripe Elements Provider */}
                {cartItems.length > 0 ? (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm 
                      amount={totalPrice} 
                      onSuccess={handlePaymentSuccess} 
                    />
                  </Elements>
                ) : (
                  <div className="text-center py-10 opacity-30">
                    <p className="font-headline font-bold text-ash uppercase tracking-widest">Awaiting Inventory Input</p>
                  </div>
                )}
              </div>

              <div className="p-6 bg-void border border-white/5 text-center">
                <p className="text-ash/30 text-[9px] font-body uppercase tracking-widest leading-relaxed">
                  🔒 All biological and financial data is encrypted using military-grade protocols. Muscle Power never stores raw card data on local servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
