import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Alex 'The Mountain' Vance",
    role: "Powerlifter",
    text: "Muscle Power transformed my approach to lifting. The Masters here don't just count reps — they understand the physics of power. I've broken every PR in 6 months.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Jessica Rivers",
    role: "Elite Triathlete",
    text: "The precision of their recovery protocols is unmatched. As an endurance athlete, I needed a lab that understands metabolic efficiency. This is it.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Omar Khattak",
    role: "Body Composition Client",
    text: "From 20% body fat to 10% in a single Titan Protocol cycle. The science-led nutrition and supplement stacks gave me the edge I couldn't find anywhere else.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?w=100&h=100&fit=crop"
  }
]

export default function TestimonialCarousel() {
  return (
    <div className="bg-void py-20 px-8 border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/5 rounded-full blur-[100px]" />
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-crimson p-1 overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full grayscale" />
              </div>
              <p className="font-body text-xl sm:text-2xl text-bone italic leading-relaxed mb-10">
                "{t.text}"
              </p>
              <h4 className="font-headline font-black text-lg text-crimson uppercase tracking-tighter">
                {t.name}
              </h4>
              <p className="text-ash/40 text-[10px] font-body font-bold uppercase tracking-[0.3em] mt-2">
                {t.role}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.1);
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #DC143C;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}
