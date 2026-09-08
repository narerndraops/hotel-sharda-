import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export default function MobileActionBar({ onOpenBooking }: MobileActionBarProps) {
  return (
    <nav
      id="mobile-sticky-action-bar"
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1D1D1B] border-t border-[#E5E0D7]/20 p-2 shadow-2xl backdrop-blur-lg bg-opacity-95"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          id="mobile-bar-call-btn"
          className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#242424] active:bg-[#B08A4A] text-white rounded-xl transition-colors min-h-[48px]"
        >
          <Phone className="w-4 h-4 text-[#B08A4A] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp-btn"
          className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#25D366]/20 active:bg-[#25D366] text-white border border-[#25D366]/40 rounded-xl transition-colors min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* BOOK NOW */}
        <button
          id="mobile-bar-book-btn"
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#B08A4A] active:bg-[#9A753B] text-white rounded-xl transition-colors min-h-[48px] shadow-sm"
        >
          <CalendarCheck className="w-4 h-4 text-white mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">BOOK NOW</span>
        </button>
      </div>
    </nav>
  );
}
