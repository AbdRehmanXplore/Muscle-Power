import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PlanCard from '../components/gym/PlanCard'
import { plans } from '../data/gymData'

export default function Membership() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <section className="bg-void py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,20,60,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-crimson text-xs font-body font-bold uppercase tracking-[0.4em] mb-6">
              Invest in Survival
            </p>
            <h1 className="font-headline font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-bone mb-8 leading-[0.9]">
              CHOOSE YOUR <span className="text-crimson">PROTOCOL</span>
            </h1>
            <p className="text-ash/50 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              No matter your starting point, we have a scientifically engineered path to your next evolution. Pick your tier and forge your future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-abyss border border-white/5 text-center">
            <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-bone mb-4">
              Need a <span className="text-crimson">Custom</span> Plan?
            </h3>
            <p className="text-ash/50 font-body text-sm mb-8 max-w-lg mx-auto">
              For corporate protocols, teams, or long-term transformations, we offer specialized consulting to match your massive goals.
            </p>
            <button className="text-crimson text-[10px] uppercase font-bold tracking-[0.3em] font-body hover:text-white transition-colors duration-300">
              Inquire for Custom Programming &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Grid Mini */}
      <section className="py-24 bg-void">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.3em] mb-4">Depth of Service</p>
            <h2 className="font-headline font-black text-4xl uppercase tracking-tight text-bone">Protocol <span className="text-crimson">Comparison</span></h2>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-6 font-headline font-bold text-ash/40 uppercase text-xs tracking-widest">Protocol Feature</th>
                  <th className="py-6 font-headline font-bold text-bone uppercase text-xs tracking-widest px-4">Basic</th>
                  <th className="py-6 font-headline font-bold text-crimson uppercase text-xs tracking-widest px-4">Pro</th>
                  <th className="py-6 font-headline font-bold text-bone uppercase text-xs tracking-widest px-4">Elite</th>
                </tr>
              </thead>
              <tbody className="text-ash/60 font-body text-xs">
                {[
                  ['Floor Access', 'Unlimited', 'Unlimited', 'Unlimited'],
                  ['Locker Room', 'Standard', 'Premium', 'Private Suite'],
                  ['Groups Classes', '-', 'Unlimited', 'Unlimited'],
                  ['PT Sessions / Month', '-', '1 Session', 'Unlimited'],
                  ['Supplement Stack', '-', 'Discounted', 'Complimentary'],
                  ['Spa & Sauna', '-', 'Access', 'VIP Private'],
                ].map(([label, f1, f2, f3], i) => (
                  <tr key={label} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 font-bold text-bone/60">{label}</td>
                    <td className="py-6 px-4">{f1}</td>
                    <td className="py-6 px-4 text-crimson/50">{f2}</td>
                    <td className="py-6 px-4">{f3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
