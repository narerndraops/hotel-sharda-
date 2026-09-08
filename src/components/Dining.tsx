import { useState } from 'react';
import { motion } from 'motion/react';
import { Utensils, UtensilsCrossed, Clock, CheckCircle2, X } from 'lucide-react';
import { DINING_CATEGORIES } from '../data/hotelData';
import { DiningCategory } from '../types';

export default function Dining() {
  const [activeCategory, setActiveCategory] = useState<DiningCategory | null>(null);
  const [diningModalOpen, setDiningModalOpen] = useState(false);

  return (
    <section id="dining" className="py-20 lg:py-28 bg-[#171717] text-white overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B08A4A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B08A4A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>DINING</span>
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Good Food, Conveniently Close
          </h2>

          <p className="text-base text-[#E5E0D7]/80 leading-relaxed max-w-2xl mx-auto">
            Enjoy convenient dining at Hotel Sharda with a selection of Indian and Chinese dishes.
          </p>
        </div>

        {/* Menu Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {DINING_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => {
                setActiveCategory(cat);
                setDiningModalOpen(true);
              }}
              className="bg-[#242424] hover:bg-[#2e2e2e] border border-white/10 hover:border-[#B08A4A] rounded-2xl p-5 sm:p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#B08A4A] group-hover:bg-[#B08A4A] group-hover:text-white transition-colors duration-200 mb-4">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#B08A4A] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#E5E0D7]/70 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#B08A4A]">
                <span className="font-medium">Explore offerings</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#242424] to-[#1f1f1f] rounded-2xl border border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-[#B08A4A] text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              <span>Room Dining & Restaurant Service</span>
            </div>
            <p className="text-white text-lg font-medium">
              Craving fresh Indian or Chinese specialties?
            </p>
            <p className="text-xs text-[#E5E0D7]/70 mt-1">
              Food is prepared fresh upon order by our culinary staff.
            </p>
          </div>

          <button
            id="dining-explore-btn"
            type="button"
            onClick={() => setDiningModalOpen(true)}
            className="px-8 py-4 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer shadow-lg shrink-0 flex items-center space-x-2"
          >
            <Utensils className="w-4 h-4" />
            <span>EXPLORE DINING</span>
          </button>
        </div>
      </div>

      {/* Dining Details Modal */}
      {diningModalOpen && (
        <div
          id="dining-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setDiningModalOpen(false)}
        >
          <div
            className="bg-[#1D1D1B] text-white border border-[#E5E0D7]/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="dining-modal-close-btn"
              type="button"
              onClick={() => setDiningModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#B08A4A] uppercase tracking-wider mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Hotel Sharda Dining</span>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-4">
              {activeCategory ? activeCategory.title : 'Hotel Sharda Restaurant'}
            </h3>

            <p className="text-sm text-[#E5E0D7]/80 leading-relaxed mb-6">
              {activeCategory
                ? activeCategory.description
                : 'Enjoy convenient dining at Hotel Sharda with a selection of Indian and Chinese dishes prepared hot and fresh for in-house guests and visitors.'}
            </p>

            <div className="space-y-3 bg-[#242424] p-4 rounded-xl border border-white/10 mb-6 text-xs text-[#E5E0D7]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>On-site restaurant dining and in-room food delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Vegetarian & dietary preferences accommodated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <span>Full daily menus and prices available at the reception desk</span>
              </div>
            </div>

            <p className="text-xs text-[#E5E0D7]/60 italic mb-6">
              * Note: Exact daily specials and direct rates are provided on site to ensure freshest seasonal ingredients.
            </p>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setDiningModalOpen(false)}
                className="px-6 py-2.5 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
