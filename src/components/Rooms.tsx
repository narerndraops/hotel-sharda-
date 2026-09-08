import { motion } from 'motion/react';
import { ArrowRight, Wifi, AirVent, Utensils, Info } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room } from '../types';

interface RoomsProps {
  onSelectRoom: (room: Room) => void;
  onEnquireRoom: (room: Room) => void;
}

export default function Rooms({ onSelectRoom, onEnquireRoom }: RoomsProps) {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>STAY YOUR WAY</span>
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            Comfortable Rooms for Every Stay
          </h2>
          <p className="text-base text-[#68645D] leading-relaxed">
            Choose the accommodation that best suits your travel needs and enjoy a comfortable environment during your stay in Bilaspur.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              id={`room-card-${room.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#F8F6F1] rounded-2xl overflow-hidden border border-[#E5E0D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={`${room.name} at Hotel Sharda Bilaspur`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                  
                  {room.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1D1D1B]/90 backdrop-blur-md text-[#B08A4A] text-[11px] font-bold uppercase tracking-wider rounded-md border border-[#B08A4A]/30">
                        {room.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-center space-x-3 text-white/90 text-xs">
                    <span className="flex items-center space-x-1">
                      <AirVent className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>AC</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Wifi className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Wi-Fi</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Utensils className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Dining</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1D1D1B] mb-3">
                    {room.name}
                  </h3>
                  <p className="text-sm text-[#68645D] leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="pt-4 border-t border-[#E5E0D7] flex items-center justify-between text-xs text-[#68645D]">
                    <span className="inline-flex items-center space-x-1.5">
                      <Info className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Direct Hotel Rates</span>
                    </span>
                    <span className="font-medium text-[#1D1D1B]">Contact hotel</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                {room.ctaText === 'VIEW DETAILS' ? (
                  <button
                    id={`btn-view-${room.id}`}
                    type="button"
                    onClick={() => onSelectRoom(room)}
                    className="w-full py-3.5 px-4 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id={`btn-enquire-${room.id}`}
                    type="button"
                    onClick={() => onEnquireRoom(room)}
                    className="w-full py-3.5 px-4 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 text-center text-xs text-[#68645D] max-w-xl mx-auto bg-[#F8F6F1] p-4 rounded-xl border border-[#E5E0D7]">
          Current direct room tariffs and special seasonal packages are confirmed upon enquiry with our Bilaspur reservations team.
        </div>
      </div>
    </section>
  );
}
