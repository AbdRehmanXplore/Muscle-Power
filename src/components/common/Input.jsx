import { twMerge } from 'tailwind-merge'

export function Input({ label, error, className, ...props }) {
  return (
    <div className={twMerge('space-y-2', className)}>
      {label && (
        <label className="block text-crimson text-[10px] font-body font-bold uppercase tracking-[0.2em] mb-2">
          {label}
        </label>
      )}
      <input
        className={twMerge(
          'w-full bg-charcoal text-bone font-body text-sm px-5 py-4 border-b-2 border-iron focus:border-crimson outline-none transition-colors placeholder:text-ash/30',
          error && 'border-crimson-glow'
        )}
        {...props}
      />
      {error && (
        <p className="text-crimson-glow text-[10px] font-body mt-1 uppercase tracking-wider">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextArea({ label, error, className, ...props }) {
  return (
    <div className={twMerge('space-y-2', className)}>
      {label && (
        <label className="block text-crimson text-[10px] font-body font-bold uppercase tracking-[0.2em] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={twMerge(
          'w-full bg-charcoal text-bone font-body text-sm px-5 py-4 border-b-2 border-iron focus:border-crimson outline-none transition-colors placeholder:text-ash/30 resize-none',
          error && 'border-crimson-glow'
        )}
        {...props}
      />
      {error && (
        <p className="text-crimson-glow text-[10px] font-body mt-1 uppercase tracking-wider">
          {error}
        </p>
      )}
    </div>
  )
}
