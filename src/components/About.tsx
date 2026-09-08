import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image + Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E0D7]">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel Sharda Complex exterior in Bilaspur"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#B08A4A] font-semibold">
                  Sharda Complex • First Floor
                </span>
                <p className="text-sm font-medium text-white/90">
                  Telipara Road, Near Old Bus Stand, Bilaspur
                </p>
              </div>
            </div>

            {/* Small Floating Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl border border-[#E5E0D7] max-w-[240px] sm:max-w-[270px]"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#B08A4A]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#1D1D1B] block">
                    3-Star Hotel
                  </span>
                  <span className="text-[11px] text-[#68645D]">
                    Central Bilaspur
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#68645D] leading-relaxed">
                A dependable and practical stay tailored for comfort and easy connectivity.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
              <span className="w-6 h-[1.5px] bg-[#B08A4A]" />
              <span>ABOUT HOTEL SHARDA</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] leading-tight mb-6">
              A Convenient Stay <br className="hidden sm:inline" />
              in Bilaspur
            </h2>

            {/* Copy */}
            <p className="text-base text-[#68645D] leading-relaxed mb-4">
              Hotel Sharda welcomes travellers looking for a comfortable and convenient stay in Bilaspur. Located on Telipara Road near the Old Bus Stand, the hotel offers easy access to the surrounding city while providing essential facilities for a relaxed stay.
            </p>

            <p className="text-base text-[#68645D] leading-relaxed mb-8">
              Whether you are visiting Bilaspur for business, travel or a short city stay, Hotel Sharda offers a practical base with air-conditioned accommodation, Wi-Fi, parking and dining facilities.
            </p>

            {/* Key Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-2 border-t border-[#E5E0D7]">
              <div className="flex items-center space-x-2 text-sm text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Air-Conditioned Comfort</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Wi-Fi & In-House Dining</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Guest Parking Available</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Laundry Service for Guests</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#rooms"
                id="about-explore-hotel-btn"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm transition-all duration-200"
              >
                <span>EXPLORE HOTEL</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
