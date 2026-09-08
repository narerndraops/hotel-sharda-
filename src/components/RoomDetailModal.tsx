import { X, Check, MessageCircle, Phone, Calendar } from 'lucide-react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { getFullBookingWhatsAppUrl } from '../utils/whatsapp';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (room: Room) => void;
}

export default function RoomDetailModal({ room, onClose, onBookNow }: RoomDetailModalProps) {
  if (!room) return null;

  const handleDirectWhatsApp = () => {
    const today = new Date().toISOString().split('T')[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    const waUrl = getFullBookingWhatsAppUrl({
      name: 'Guest',
      checkIn: today,
      checkOut: tomorrow,
      guests: '2 Adults',
      rooms: '1 Room',
      roomType: room.name,
      message: `I would like to enquire about availability and rates for ${room.name}.`,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="room-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="room-detail-modal-content"
        className="bg-white text-[#1D1D1B] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E5E0D7] relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="room-detail-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Close room details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold block mb-1">
              {room.badge || 'Hotel Sharda Accommodation'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#68645D] mb-2">
              Room Overview
            </h3>
            <p className="text-sm text-[#1D1D1B] leading-relaxed">
              {room.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#68645D] mb-3">
              Included Amenities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#1D1D1B] bg-[#F8F6F1] px-3 py-2 rounded-lg border border-[#E5E0D7]">
                  <Check className="w-4 h-4 text-[#B08A4A] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F8F6F1] p-4 rounded-xl border border-[#E5E0D7] text-xs text-[#68645D] space-y-1">
            <span className="font-bold text-[#1D1D1B] block">Current Direct Tariff:</span>
            <p>Direct tariffs vary by travel season and dates. Please enquire with our front desk for confirmed rates.</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F8F6F1] border-t border-[#E5E0D7] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-bold text-[#1D1D1B] hover:text-[#B08A4A] transition-colors py-2 px-3"
          >
            <Phone className="w-4 h-4 text-[#B08A4A]" />
            <span>Call: {HOTEL_INFO.phone}</span>
          </a>

          <div className="flex w-full sm:w-auto gap-2.5">
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="flex-1 sm:flex-initial px-5 py-3 bg-[#25D366] hover:bg-[#20b859] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="flex-1 sm:flex-initial px-6 py-3 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#B08A4A]" />
              <span>Enquire Stay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
