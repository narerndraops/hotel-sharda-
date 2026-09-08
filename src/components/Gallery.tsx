import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'ROOMS' | 'EXTERIOR' | 'FOOD & DRINK' | 'GUESTS'>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: Array<'ALL' | 'ROOMS' | 'EXTERIOR' | 'FOOD & DRINK' | 'GUESTS'> = [
    'ALL',
    'ROOMS',
    'EXTERIOR',
    'FOOD & DRINK',
    'GUESTS',
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8F6F1] border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>PHOTO TOUR</span>
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            Experience Hotel Sharda
          </h2>

          <p className="text-base text-[#68645D] leading-relaxed">
            Take a visual tour through our guest accommodation, exterior complex, and dining spaces.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1D1D1B] text-white shadow-sm'
                  : 'bg-white text-[#68645D] hover:bg-[#E5E0D7] hover:text-[#1D1D1B] border border-[#E5E0D7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid (Asymmetrical Desktop / 2-column Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-[#E5E0D7] ${
                index === 0 ? 'col-span-2 row-span-2 h-[340px] sm:h-[460px]' : 'h-48 sm:h-56'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#B08A4A] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="gallery-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              id="lightbox-close-btn"
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              id="lightbox-prev-btn"
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              id="lightbox-next-btn"
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center text-white max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B08A4A]">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl font-bold mt-1">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {filteredItems[activeLightboxIndex].caption}
                </p>
                <span className="text-[11px] text-white/50 mt-2 block">
                  {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
