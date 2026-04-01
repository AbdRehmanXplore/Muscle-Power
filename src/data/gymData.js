export const plans = [
  {
    id: 'basic',
    name: "Iron Initiate",
    price: 3500,
    period: "month",
    category: "Membership",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: ["Access to Gym Floor", "Locker Room Access", "Basic Fitness Assessment", "Mobile App Tracking"],
    highlight: false,
    cta: "Join Basic"
  },
  {
    id: 'pro',
    name: "Muscle Master",
    price: 7500,
    period: "month",
    category: "Membership",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    features: ["All Basic Features", "Unlimited Group Classes", "1 PT Session / Month", "Nutrition Guide", "Sauna & Steam"],
    highlight: true,
    cta: "Go Pro"
  },
  {
    id: 'elite',
    name: "Titan Protocol",
    price: 15000,
    period: "month",
    category: "Membership",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    features: ["All Pro Features", "Unlimited PT Sessions", "Custom Supplement Stack", "Private Recovery Suite", "24/7 Priority Support"],
    highlight: false,
    cta: "Become a Titan"
  }
]

export const trainers = [
  {
    id: 1,
    name: "Vikram 'The Tank' Singh",
    role: "Head Strength Coach",
    specialty: "Powerlifting & Hypertrophy",
    bio: "Former national heavyweight champion with 15+ years of experience forging elite athletes.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop",
    socials: { instagram: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Sarah 'Steel' Chen",
    role: "Functional Elite Coach",
    specialty: "Cross-Training & Mobility",
    bio: "Expert in metabolic conditioning and injury prevention. She'll find your limits and break them.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?w=600&h=800&fit=crop",
    socials: { instagram: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Nutrition & Physique",
    specialty: "Body Composition",
    bio: "Certified nutritionist and bodybuilding specialist. Science-backed transformation results.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?w=600&h=800&fit=crop",
    socials: { instagram: "#", twitter: "#" }
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Cardio & HIIT Lead",
    specialty: "Fat Loss & Endurance",
    bio: "High-energy specialist who turns sweat into success through relentless metabolic work.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=800&fit=crop",
    socials: { instagram: "#", twitter: "#" }
  }
]

export const classes = [
  {
    id: 1,
    title: "The Titan Protocol",
    time: "06:00 AM",
    duration: "60 min",
    intensity: "Extreme",
    category: "Strength",
    trainer: "Vikram Singh"
  },
  {
    id: 2,
    title: "Meta-Burn HIIT",
    time: "09:00 AM",
    duration: "45 min",
    intensity: "High",
    category: "Cardio",
    trainer: "Elena Rodriguez"
  },
  {
    id: 3,
    title: "Steel Core",
    time: "05:00 PM",
    duration: "45 min",
    intensity: "Medium",
    category: "Functional",
    trainer: "Sarah Chen"
  },
  {
    id: 4,
    title: "Night-Shift Shred",
    time: "08:00 PM",
    duration: "60 min",
    intensity: "High",
    category: "Fat Loss",
    trainer: "Marcus Thorne"
  }
]
