import { motion } from 'motion/react';
import { Phone, ArrowDown, MapPin, Star } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onCheckAvailability: () => void;
}

export default function Hero({ onCheckAvailability }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#171717]"
    >
      {/* Background Image with Slow Scale Animation */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Hotel Sharda in Bilaspur"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.05]"
          fetchPriority="high"
        />
        {/* Subtle Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 text-center text-white">
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#B08A4A]/40 backdrop-blur-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B08A4A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#E5E0D7] font-medium">
            WELCOME TO HOTEL SHARDA
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white mb-6"
        >
          Your Comfortable Stay <br className="hidden sm:inline" />
          <span className="text-[#F8F6F1] italic font-normal">in Bilaspur</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10"
        >
          Discover a convenient and comfortable stay at Hotel Sharda, ideally located near the Old Bus Stand in Telipara, Bilaspur.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            id="hero-check-availability-btn"
            type="button"
            onClick={onCheckAvailability}
            className="w-full sm:w-auto px-8 py-4 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-sm font-semibold tracking-wider uppercase rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            Check Availability
          </button>

          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            id="hero-call-hotel-btn"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wider uppercase rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-200 inline-flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#B08A4A]" />
            <span>Call Hotel</span>
          </a>
        </motion.div>

        {/* Below CTA Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium tracking-wide text-white/80 border-t border-white/15 pt-6"
        >
          <div className="flex items-center space-x-1.5 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-white font-medium">3-Star Hotel</span>
          </div>

          <div className="hidden sm:block text-white/30">•</div>

          <div className="flex items-center space-x-1.5 text-white/90">
            <MapPin className="w-4 h-4 text-[#B08A4A]" />
            <span>Telipara, Bilaspur</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#booking-bar"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 flex flex-col items-center space-y-1 z-10"
        aria-label="Scroll to booking bar"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/70">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
