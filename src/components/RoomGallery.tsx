import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ROOM_GALLERY_IMAGES } from '../data/hotelData';

interface RoomGalleryProps {
  onImageClick: (image: { title: string; caption: string; image: string }) => void;
}

export default function RoomGallery({ onImageClick }: RoomGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="room-gallery" className="py-16 bg-[#F8F6F1] overflow-hidden border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-2">
              <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
              <span>ROOM & INTERIOR HIGHLIGHTS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D1D1B]">
              Refined Interiors & Living Details
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="room-gallery-scroll-left"
              type="button"
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-xl bg-white border border-[#E5E0D7] text-[#1D1D1B] hover:bg-[#B08A4A] hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="room-gallery-scroll-right"
              type="button"
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-xl bg-white border border-[#E5E0D7] text-[#1D1D1B] hover:bg-[#B08A4A] hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ROOM_GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => onImageClick(item)}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer snap-start border border-[#E5E0D7] bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg font-bold mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
