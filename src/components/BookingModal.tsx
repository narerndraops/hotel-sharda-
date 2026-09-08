import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { X, Calendar, Users, Home, Phone, User, MessageCircle, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { getFullBookingWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    rooms?: string;
    roomType?: string;
  };
}

export default function BookingModal({ isOpen, onClose, prefill }: BookingModalProps) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const nameId = useId();
  const phoneId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const roomsId = useId();
  const roomTypeId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    checkIn: prefill?.checkIn || today,
    checkOut: prefill?.checkOut || tomorrow,
    guests: prefill?.guests || '2 Adults',
    rooms: prefill?.rooms || '1 Room',
    roomType: prefill?.roomType || 'AC Premium',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleValidation = () => {
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return false;
    }
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      setErrorMsg('Check-out date must be after check-in date.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleWhatsAppBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    const waUrl = getFullBookingWhatsAppUrl({
      name: formData.fullName,
      phone: formData.phone,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      rooms: formData.rooms,
      roomType: formData.roomType,
      message: formData.message,
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSuccess(true);
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="bg-white text-[#1D1D1B] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E0D7] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="booking-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#68645D] hover:text-[#1D1D1B] rounded-lg hover:bg-gray-100"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1D1D1B] mb-2">
              Enquiry Forwarded
            </h3>
            <p className="text-sm text-[#68645D] max-w-md leading-relaxed mb-6">
              Thank you, {formData.fullName}! Your reservation details have been formatted for Hotel Sharda front office in Bilaspur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="px-6 py-3 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Front Desk Directly</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-[#F8F6F1] border border-[#E5E0D7] text-[#1D1D1B] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#E5E0D7] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-[#E5E0D7]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08A4A]">
                HOTEL SHARDA • BILASPUR
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D1D1B] mt-1">
                Book Your Stay
              </h2>
              <p className="text-xs text-[#68645D] mt-1">
                Direct booking enquiry with instant WhatsApp verification or phone assistance.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={nameId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <User className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  />
                </div>

                <div>
                  <label htmlFor={phoneId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <Phone className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="e.g. 077524 06906"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  />
                </div>
              </div>

              {/* Room Preference */}
              <div>
                <label htmlFor={roomTypeId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                  <Home className="w-3.5 h-3.5 text-[#B08A4A]" />
                  <span>Room Category</span>
                </label>
                <select
                  id={roomTypeId}
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                >
                  <option value="AC Premium">AC Premium (Air-conditioned comfort)</option>
                  <option value="Deluxe Suite">Deluxe Suite (Spacious accommodation)</option>
                  <option value="Family Stay">Family Stay (Practical choice for groups)</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={checkInId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Check-In *</span>
                  </label>
                  <input
                    id={checkInId}
                    type="date"
                    min={today}
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  />
                </div>

                <div>
                  <label htmlFor={checkOutId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Check-Out *</span>
                  </label>
                  <input
                    id={checkOutId}
                    type="date"
                    min={formData.checkIn || today}
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  />
                </div>
              </div>

              {/* Guests & Rooms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={guestsId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <Users className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Guests</span>
                  </label>
                  <select
                    id={guestsId}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="3 Adults">3 Adults</option>
                    <option value="4+ Guests / Family">4+ Guests / Family</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={roomsId} className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                    <Home className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Rooms</span>
                  </label>
                  <select
                    id={roomsId}
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                    className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A]"
                  >
                    <option value="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="3+ Rooms">3+ Rooms</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor={messageId} className="block text-xs font-bold uppercase tracking-wider text-[#68645D] mb-1">
                  Special Notes (Optional)
                </label>
                <textarea
                  id={messageId}
                  rows={2}
                  placeholder="Estimated arrival time or special request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F8F6F1] border border-[#E5E0D7] rounded-xl px-3.5 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A4A] resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  id="booking-modal-submit-whatsapp-btn"
                  type="submit"
                  className="w-full py-4 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#B08A4A]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#68645D] text-center mt-2">
                  No instant charge. Hotel Sharda will confirm availability and tariff directly.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
