import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/membership', label: 'Membership' },
    { to: '/classes', label: 'Classes' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/shop', label: 'Shop' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-crimson flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(220,20,60,0.5)]">
              <span className="font-headline font-black text-white text-sm tracking-tighter">MP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-headline font-black text-lg tracking-tight text-bone">MUSCLE</span>
              <span className="font-headline font-black text-lg tracking-tight text-crimson ml-1">POWER</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-body text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location.pathname === link.to ? 'text-crimson' : 'text-ash hover:text-bone'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-crimson"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-ash hover:text-crimson transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-crimson text-white text-[9px] font-bold flex items-center justify-center rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <Link
              to="/membership"
              className="hidden sm:block px-5 py-2.5 bg-crimson text-white font-body text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-crimson-dark transition-all duration-300"
            >
              Join the Lab
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ash hover:text-crimson transition-colors"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] bg-current transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[2px] bg-current transition-colors"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] bg-current transition-colors"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center gap-6 pt-20"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  className={`font-headline text-4xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === link.to ? 'text-crimson' : 'text-bone hover:text-crimson'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/membership"
                className="mt-6 px-10 py-4 bg-crimson text-white font-body text-xs font-bold uppercase tracking-[0.2em]"
              >
                Join the Protocol
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
