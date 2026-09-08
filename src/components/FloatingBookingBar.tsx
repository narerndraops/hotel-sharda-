import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { Calendar, Users, Home, ArrowRight, MessageCircle } from 'lucide-react';
import { getFloatingBarWhatsAppUrl } from '../utils/whatsapp';

interface FloatingBookingBarProps {
  onOpenBookingModal: (prefill: {
    checkIn: string;
    checkOut: string;
    guests: string;
    rooms: string;
  }) => void;
}

export default function FloatingBookingBar({ onOpenBookingModal }: FloatingBookingBarProps) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const roomsId = useId();

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('2 Adults');
  const [rooms, setRooms] = useState('1 Room');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDateValidation = () => {
    if (!checkIn) {
      setErrorMessage('Please select a check-in date.');
      return false;
    }
    if (!checkOut) {
      setErrorMessage('Please select a check-out date.');
      return false;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMessage('Check-out date must be after check-in date.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleWhatsAppEnquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!handleDateValidation()) return;

    const whatsappUrl = getFloatingBarWhatsAppUrl({
      checkIn,
      checkOut,
      guests,
      rooms,
    });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWebsiteEnquiry = () => {
    if (!handleDateValidation()) return;
    onOpenBookingModal({
      checkIn,
      checkOut,
      guests,
      rooms,
    });
  };

  return (
    <div id="booking-bar" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16">
      <div className="bg-white rounded-2xl shadow-xl border border-[#E5E0D7] p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-[#E5E0D7]/70 gap-2">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B08A4A]">
              DIRECT ENQUIRY & RESERVATIONS
            </span>
            <p className="text-sm text-[#68645D]">
              Check room availability directly with Hotel Sharda front desk.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#68645D]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fast response via WhatsApp & Phone</span>
          </div>
        </div>

        <form onSubmit={handleWhatsAppEnquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Check-In */}
          <div className="bg-[#F8F6F1] rounded-xl p-3 border border-[#E5E0D7] focus-within:border-[#B08A4A] transition-colors">
            <label htmlFor={checkInId} className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#68645D] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Check-In</span>
            </label>
            <input
              id={checkInId}
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (new Date(e.target.value) >= new Date(checkOut)) {
                  const nextDay = new Date(e.target.value);
                  nextDay.setDate(nextDay.getDate() + 1);
                  setCheckOut(nextDay.toISOString().split('T')[0]);
                }
              }}
              className="w-full bg-transparent text-sm font-semibold text-[#1D1D1B] focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="bg-[#F8F6F1] rounded-xl p-3 border border-[#E5E0D7] focus-within:border-[#B08A4A] transition-colors">
            <label htmlFor={checkOutId} className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#68645D] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Check-Out</span>
            </label>
            <input
              id={checkOutId}
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-[#1D1D1B] focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Guests */}
          <div className="bg-[#F8F6F1] rounded-xl p-3 border border-[#E5E0D7] focus-within:border-[#B08A4A] transition-colors">
            <label htmlFor={guestsId} className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#68645D] mb-1">
              <Users className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Guests</span>
            </label>
            <select
              id={guestsId}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-[#1D1D1B] focus:outline-none cursor-pointer"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4+ Guests / Family">4+ Guests / Family</option>
            </select>
          </div>

          {/* Rooms */}
          <div className="bg-[#F8F6F1] rounded-xl p-3 border border-[#E5E0D7] focus-within:border-[#B08A4A] transition-colors">
            <label htmlFor={roomsId} className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#68645D] mb-1">
              <Home className="w-3.5 h-3.5 text-[#B08A4A]" />
              <span>Rooms</span>
            </label>
            <select
              id={roomsId}
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-[#1D1D1B] focus:outline-none cursor-pointer"
            >
              <option value="1 Room">1 Room</option>
              <option value="2 Rooms">2 Rooms</option>
              <option value="3+ Rooms">3+ Rooms (Group)</option>
            </select>
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="sm:col-span-2 lg:col-span-4 text-rose-600 text-xs font-medium px-1">
              {errorMessage}
            </div>
          )}

          {/* CTAs */}
          <div className="sm:col-span-2 lg:col-span-4 pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              id="booking-bar-enquiry-form-btn"
              type="button"
              onClick={handleWebsiteEnquiry}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#F8F6F1] hover:bg-[#E5E0D7] text-[#1D1D1B] text-xs font-bold uppercase tracking-wider rounded-xl transition-all inline-flex items-center justify-center space-x-2 border border-[#E5E0D7]"
            >
              <span>Custom Form Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="booking-bar-check-avail-btn"
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-[#B08A4A] fill-[#B08A4A]/20" />
              <span>Check Availability via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
