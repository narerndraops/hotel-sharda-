import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { Wifi, Car, AirVent, UtensilsCrossed, Shirt } from 'lucide-react';
import { AMENITIES } from '../data/hotelData';

export default function Amenities() {
  const iconMap: Record<string, ElementType> = {
    Wifi,
    Car,
    AirVent,
    UtensilsCrossed,
    Shirt,
  };

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#F8F6F1] border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>HOTEL FACILITIES</span>
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            Everything You Need for a Comfortable Stay
          </h2>

          <p className="text-base text-[#68645D] leading-relaxed">
            Essential hospitality amenities designed to ensure a smooth, worry-free visit in Bilaspur.
          </p>
        </div>

        {/* Verified Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {AMENITIES.map((amenity, index) => {
            const Icon = iconMap[amenity.icon] || Wifi;
            return (
              <motion.div
                key={amenity.id}
                id={`amenity-${amenity.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E5E0D7] shadow-sm hover:shadow-md hover:border-[#B08A4A] transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F8F6F1] flex items-center justify-center text-[#B08A4A] group-hover:bg-[#B08A4A] group-hover:text-white transition-all duration-300 mb-4 shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1D1D1B] mb-2">
                  {amenity.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#68645D] leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Transparency badge */}
        <div className="mt-12 text-center text-xs text-[#68645D]">
          <span>Verified property amenities confirmed for guests at Hotel Sharda, Bilaspur.</span>
        </div>
      </div>
    </section>
  );
}
