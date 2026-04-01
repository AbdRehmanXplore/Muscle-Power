import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

// Custom Brand Icons as SVG components
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-1 1-2 1a4.4 4.4 0 0 0-3-1.3c-2.4 0-4.4 2-4.4 4.4 0 .3 0 .6.1.9C9 8.6 5.1 6.6 2.5 3.5c-.3.5-.5 1.1-.5 1.7 0 1.5.8 2.8 2 3.6a4.3 4.3 0 0 1-2-.6v.1c0 2.1 1.5 3.9 3.5 4.3a4.4 4.4 0 0 1-2 .1c.5 1.7 2.1 3 4 3a8.8 8.8 0 0 1-5.4 1.9c-.3 0-.7 0-1 .1a12.5 12.5 0 0 0 6.8 2c8.2 0 12.6-6.8 12.6-12.6V7a9 9 0 0 0 2.2-2.3z"></path>
  </svg>
)

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-crimson flex items-center justify-center">
                <span className="font-headline font-black text-white text-sm tracking-tighter">MP</span>
              </div>
              <div>
                <span className="font-headline font-black text-lg text-bone">MUSCLE</span>
                <span className="font-headline font-black text-lg text-crimson ml-1">POWER</span>
              </div>
            </div>
            <p className="text-ash/60 text-sm leading-relaxed font-body">
              The ultimate laboratory for human performance. We don't just train — we forge titans through science, discipline, and relentless effort.
            </p>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-crimson mb-6">Training</h3>
            <ul className="space-y-3">
              {['Powerlifting', 'Hypertrophy', 'Functional Elite', 'Combat Prep', 'Recovery Protocol'].map(item => (
                <li key={item} className="text-ash/50 text-xs font-body hover:text-crimson transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-crimson mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { to: '/membership', label: 'Memberships' },
                { to: '/classes', label: 'Class Schedule' },
                { to: '/trainers', label: 'The Coaches' },
                { to: '/shop', label: 'Gear & Supps' },
                { to: '/contact', label: 'Reach the Lab' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ash/50 text-xs font-body hover:text-crimson transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-crimson mb-6">The Lab</h3>
            <div className="space-y-4 text-ash/40 text-[11px] font-body uppercase tracking-[0.05em]">
              <p className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-crimson" />
                Gulberg III, Industrial Area, Lahore, Pakistan
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-crimson" />
                lab@musclepower.pc
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-crimson" />
                +92 300 123 4567
              </p>
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Youtube, label: 'Youtube' }
                ].map(social => (
                  <a 
                    key={social.label} 
                    href="#" 
                    className="w-8 h-8 bg-charcoal border border-white/5 flex items-center justify-center text-ash/30 hover:text-crimson hover:border-crimson/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ash/20 text-[10px] font-body tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} Muscle Power. Built for Titans.
          </p>
          <p className="text-ash/20 text-[10px] font-body tracking-[0.1em] uppercase">
            Developed by <span className="text-crimson/50 font-bold">Pentacore Solution</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
