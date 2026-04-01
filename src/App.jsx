import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CartSidebar from './components/CartSidebar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Custom from './pages/Custom'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Membership from './pages/Membership'
import Trainers from './pages/Trainers'
import Classes from './pages/Classes'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/Gallery'

export default function App() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-void text-bone">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-crimson origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <CartSidebar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
