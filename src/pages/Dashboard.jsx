import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/common/Button'
import { Activity, Beaker, Calendar, CreditCard, Droplets, Target, TrendingUp, User } from 'lucide-react'

export default function Dashboard() {
  useEffect(() => { 
    window.scrollTo(0, 0)
    document.title = 'Dashboard | Muscle Power Control Center'
  }, [])

  const stats = [
    { label: "Current Weight", val: "84.2 kg", trend: "0.8 kg down", icon: Activity },
    { label: "Target Physique", val: "92.0 kg", trend: "Hypertrophy", icon: Target },
    { label: "Metabolic Rate", val: "2,840 kcal", trend: "Optimal", icon: Beaker },
    { label: "Lifting Total", val: "540 kg", trend: "+15 kg/mo", icon: TrendingUp },
  ]

  const upcomingClasses = [
    { title: "The Titan Protocol", time: "06:00 AM", trainer: "Vikram Singh", intensity: "Extreme" },
    { title: "Steel Core", time: "05:00 PM", trainer: "Sarah Chen", intensity: "Medium" },
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-void">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.4em] mb-4">Athlete ID: #MP-7782</p>
            <h1 className="font-headline font-black text-4xl sm:text-5xl uppercase tracking-tighter text-bone">
              WELCOME BACK, <span className="text-crimson">GOLIATH</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4">
            <Button variant="outline" size="sm">Edit Protocol</Button>
            <Button size="sm">Book Session</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-charcoal p-6 border border-white/5 relative overflow-hidden group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <s.icon className="w-5 h-5 text-crimson" />
                    <p className="text-ash/30 text-[9px] uppercase font-bold tracking-widest">{s.label}</p>
                  </div>
                  <h3 className="text-2xl font-headline font-black text-bone mb-2 uppercase tracking-tighter">{s.val}</h3>
                  <p className="text-[10px] text-crimson font-body italic">{s.trend}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-crimson w-0 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </div>

            {/* Performance Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-abyss p-8 border border-white/5 h-[400px] flex flex-col items-center justify-center relative group"
            >
              <Activity className="w-12 h-12 text-crimson/20 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-ash/40 font-headline font-black text-xl uppercase tracking-widest">Hydration Performance Sync</p>
              <p className="text-ash/20 text-[10px] font-body uppercase mt-2">Connecting to Biosensors...</p>
              {/* Decorative chart pattern */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            </motion.div>

            {/* Upcoming Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-bone flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-crimson" /> Upcoming Protocols
                </h3>
                {upcomingClasses.map((c, i) => (
                  <div key={i} className="bg-charcoal p-5 border-l-4 border-crimson flex justify-between items-center group">
                    <div>
                      <p className="text-bone font-headline font-bold text-lg uppercase leading-none">{c.title}</p>
                      <p className="text-ash/40 text-[10px] uppercase font-bold tracking-widest mt-2">{c.time} • Master: {c.trainer}</p>
                    </div>
                    <span className="text-crimson/40 text-[9px] uppercase font-bold group-hover:text-crimson transition-colors">Reserved</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                   <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-bone flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-crimson" /> Recovery Status
                </h3>
                <div className="bg-charcoal p-5 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-ash/40">
                    <span>Muscle Fatigue</span>
                    <span className="text-crimson">Critical (84%)</span>
                  </div>
                  <div className="w-full h-1 bg-void relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-crimson w-[84%]" />
                  </div>
                  <p className="text-ash/40 text-[10px] italic leading-relaxed pt-2">
                    System suggests immediate Nitrogen infusion and Cryo-recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area (1 col) */}
          <div className="space-y-8">
            {/* Membership Status */}
            <div className="bg-charcoal p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <User className="w-20 h-20" />
              </div>
              <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-bone mb-6">Current Tier</h3>
              <div className="p-4 bg-crimson text-white inline-block mb-6 font-headline font-black text-2xl skew-x-[-12deg] tracking-tighter">
                TITAN PROTOCOL
              </div>
              <p className="text-ash/40 text-[11px] font-body leading-relaxed mb-8 uppercase tracking-widest">
                Renewal: 12 April 2026
              </p>
              <Link to="/checkout">
                <Button variant="outline" size="sm" className="w-full border-crimson text-crimson font-black">Manage Billing</Button>
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="font-headline font-black text-xs uppercase tracking-[0.2em] text-ash/40 px-2">Lab Controls</h3>
              {[
                { icon: Beaker, label: "Supplement Log" },
                { icon: Droplets, label: "Hydration Sync" },
                { icon: CreditCard, label: "Payment History" },
              ].map(action => (
                <button key={action.label} className="w-full p-4 bg-abyss hover:bg-charcoal border border-white/5 flex items-center gap-4 transition-all group">
                  <action.icon className="w-4 h-4 text-ash/30 group-hover:text-crimson transition-colors" />
                  <span className="text-bone font-body text-[10px] font-bold uppercase tracking-widest">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
