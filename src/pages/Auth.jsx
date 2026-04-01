import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Input } from '../components/common/Input'
import { Link, useNavigate } from 'react-router-dom'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock Auth
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1549476464-37392f717541?w=1920&h=1080&fit=crop" 
          alt="Auth BG" 
          className="w-full h-full object-cover grayscale opacity-20 scale-110"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline font-black text-[25vw] text-crimson/[0.03] select-none uppercase tracking-tighter">
          MEMBERSHIP
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-charcoal p-10 border border-white/5 relative z-10 shadow-2xl group overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/10 -rotate-45 translate-x-12 -translate-y-12" />
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h1 className="font-headline font-black text-4xl uppercase tracking-tighter text-bone mb-2">
              THE <span className="text-crimson">PROTOCOL</span> ACCESS
            </h1>
            <p className="text-ash/40 text-[10px] font-body font-bold uppercase tracking-[0.3em]">
              {isLogin ? 'Enter Credentials' : 'Initialize Evolution'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <Input label="Full Name" type="text" placeholder="Goliath Titan" required />
            )}
            <Input label="Email Address" type="email" placeholder="titans@musclepower.pc" required />
            <Input label="Password" type="password" placeholder="••••••••" required />
            
            <Button type="submit" variant="primary" className="w-full">
              {isLogin ? 'Access the Lab' : 'Register Protocol'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-ash/40 hover:text-crimson transition-colors text-[10px] font-body font-bold uppercase tracking-[0.2em]"
            >
              {isLogin ? "Don't have a protocol ID? Sign up" : "Already registered? Log in"}
            </button>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/5">
            <p className="text-ash/20 text-[9px] font-body text-center leading-relaxed">
              By accessing the lab, you agree to our <span className="text-crimson/40 italic">Performance Directives</span> and <span className="text-crimson/40 italic">Biological Recovery Policies</span>.
            </p>
          </div>
        </div>
        
        {/* Hover bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-crimson w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </motion.div>
    </div>
  )
}
