import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../common/Button'
import { Input } from '../common/Input'

export default function BmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState('')

  const calculate = (e) => {
    e.preventDefault()
    if (!weight || !height) return

    const hInMeters = height / 100
    const b = weight / (hInMeters * hInMeters)
    setBmi(b.toFixed(1))

    if (b < 18.5) setStatus('Underweight')
    else if (b < 24.9) setStatus('Healthy Weight')
    else if (b < 29.9) setStatus('Overweight')
    else setStatus('Obese')
  }

  return (
    <div className="bg-charcoal p-10 border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/10 -rotate-45 translate-x-12 -translate-y-12" />
      
      <div className="relative z-10">
        <p className="text-crimson text-[10px] font-body font-bold uppercase tracking-[0.3em] mb-4">Metric Analysis</p>
        <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-bone mb-8">
          PERFORMANCE <span className="text-crimson">AUDIT</span> (BMI)
        </h3>

        <form onSubmit={calculate} className="space-y-6">
          <Input 
            label="Weight (kg)" 
            type="number" 
            placeholder="e.g. 85" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <Input 
            label="Height (cm)" 
            type="number" 
            placeholder="e.g. 180" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full">
            Calculate Metrics
          </Button>
        </form>

        {bmi && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-6 bg-void border border-white/5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-ash/40 text-[9px] uppercase font-bold tracking-widest mb-1">Your Index</p>
                <p className="text-4xl font-headline font-black text-bone tracking-tighter leading-none">{bmi}</p>
              </div>
              <div className="text-right">
                <p className="text-ash/40 text-[9px] uppercase font-bold tracking-widest mb-1">Classification</p>
                <p className={`text-sm font-body font-black uppercase tracking-widest ${status === 'Healthy Weight' ? 'text-green-500' : 'text-crimson'}`}>
                  {status}
                </p>
              </div>
            </div>
            <div className="mt-6 w-full h-1 bg-charcoal relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (bmi/40)*100)}%` }}
                className="absolute inset-0 bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.5)]"
              />
            </div>
            <p className="mt-4 text-ash/30 text-[9px] font-body leading-relaxed max-w-[240px]">
              *BMI is a general estimation. For accurate elite performance metrics, consult a Muscle Power specialist.
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute -bottom-4 -left-4 font-headline font-black text-6xl text-white/[0.02] tracking-tighter select-none rotate-3">
        DATA POINT
      </div>
    </div>
  )
}
