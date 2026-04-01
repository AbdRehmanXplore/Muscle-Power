import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) {
  const variants = {
    primary: 'bg-crimson text-white hover:bg-crimson-dark shadow-[0_0_20px_rgba(220,20,60,0.3)] hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]',
    secondary: 'border-2 border-crimson text-crimson hover:bg-crimson/10',
    outline: 'border-2 border-white/10 text-bone hover:border-white/30 hover:bg-white/5',
    ghost: 'text-ash hover:text-white transition-colors'
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base'
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={twMerge(
        'font-body font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
