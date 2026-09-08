import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/hotelData';

export default function WhyChooseUs() {
  return (
    <section id="why-sharda" className="py-20 lg:py-28 bg-white border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>WHY HOTEL SHARDA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            A Practical Choice for Your Bilaspur Stay
          </h2>

          <p className="text-base text-[#68645D] leading-relaxed">
            Positioned at the center of connectivity with dependable service and guest essentials.
          </p>
        </div>

        {/* 3 Large Benefit Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {WHY_CHOOSE_US.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-[#F8F6F1] border border-[#E5E0D7] flex flex-col justify-between group hover:border-[#B08A4A] transition-colors"
            >
              <div>
                {/* Large Editorial Number */}
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#B08A4A]/25 group-hover:text-[#B08A4A]/40 transition-colors block mb-6">
                  {benefit.number}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D1D1B] uppercase tracking-wide mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm font-medium text-[#1D1D1B] mb-3 leading-relaxed">
                  {benefit.description}
                </p>

                <p className="text-xs text-[#68645D] leading-relaxed">
                  {benefit.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E0D7]">
                <span className="text-[11px] uppercase tracking-wider text-[#B08A4A] font-semibold">
                  Hotel Sharda Guarantee
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
