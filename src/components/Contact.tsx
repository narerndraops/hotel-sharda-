import { useState, useId } from 'react';
import type { FormEvent } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Calendar, User, Mail, Users, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { getFullBookingWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function Contact() {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: today,
    checkOut: tomorrow,
    guests: '2 Adults',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please provide a valid phone number for contact.');
      return;
    }
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      setFormError('Check-out date must be after check-in date.');
      return;
    }

    setFormError('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const waUrl = getFullBookingWhatsAppUrl({
      name: formData.fullName,
      phone: formData.phone,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      rooms: '1 Room',
      message: formData.message,
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#171717] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call & WhatsApp Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
              <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
              <span>DIRECT CONTACT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Planning Your Stay in Bilaspur?
            </h2>

            <p className="text-base text-[#E5E0D7]/80 leading-relaxed mb-8">
              Get in touch with Hotel Sharda for room availability, booking enquiries and general information.
            </p>

            {/* Immediate Action Buttons */}
            <div className="space-y-4 mb-10">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                id="contact-call-btn"
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {HOTEL_INFO.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-[#242424] hover:bg-[#2e2e2e] border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Note & Location Reminder */}
            <div className="bg-[#242424] p-5 rounded-xl border border-white/10 text-xs text-[#E5E0D7]/80 space-y-2">
              <p className="font-semibold text-white">Hotel Sharda Reception</p>
              <p>First Floor, Sharda Complex, Telipara Road, Near Old Bus Stand, Bilaspur, Chhattisgarh 495001</p>
              <p className="text-[#B08A4A]">Fastest response via Phone call and WhatsApp.</p>
            </div>
          </div>

          {/* Right Column: Contact & Booking Enquiry Form */}
          <div className="lg:col-span-7 bg-[#242424] rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#B08A4A]/20 flex items-center justify-center text-[#B08A4A] mb-5">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#E5E0D7]/80 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you! Your enquiry has been received. Hotel Sharda will get back to you shortly.
                </p>

                <div className="bg-[#1D1D1B] p-4 rounded-xl border border-white/10 text-xs text-left max-w-md w-full mb-6 space-y-1">
                  <p><span className="text-[#B08A4A] font-medium">Guest:</span> {formData.fullName}</p>
                  <p><span className="text-[#B08A4A] font-medium">Dates:</span> {formData.checkIn} to {formData.checkOut}</p>
                  <p><span className="text-[#B08A4A] font-medium">Guests:</span> {formData.guests}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppForward}
                    className="px-6 py-3 bg-[#25D366] hover:bg-[#20b859] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp For Instant Reply</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        checkIn: today,
                        checkOut: tomorrow,
                        guests: '2 Adults',
                        message: '',
                      });
                    }}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-2 border-b border-white/10 mb-4">
                  <h3 className="font-serif text-xl font-bold text-white">
                    Send Direct Booking Enquiry
                  </h3>
                  <p className="text-xs text-[#E5E0D7]/70 mt-1">
                    Fill in your stay dates to check availability and rates.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-lg text-xs text-red-200">
                    {formError}
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={nameId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                      <User className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      placeholder="e.g. 098765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor={emailId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    placeholder="e.g. guest@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                  />
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor={checkInId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Check-in Date *</span>
                    </label>
                    <input
                      id={checkInId}
                      type="date"
                      min={today}
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={checkOutId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Check-out Date *</span>
                    </label>
                    <input
                      id={checkOutId}
                      type="date"
                      min={formData.checkIn || today}
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor={guestsId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B08A4A]" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      id={guestsId}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#B08A4A] transition-colors"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3 Adults">3 Adults</option>
                      <option value="4+ Guests / Family">4+ Guests / Family</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor={messageId} className="flex items-center space-x-1.5 text-xs text-[#E5E0D7]/80 font-medium mb-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#B08A4A]" />
                    <span>Special Requirements or Message (Optional)</span>
                  </label>
                  <textarea
                    id={messageId}
                    rows={3}
                    placeholder="Any specific room preference or arrival timing note..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1D1D1B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B08A4A] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-send-enquiry-btn"
                    type="submit"
                    className="w-full py-4 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </button>
                  <p className="text-[11px] text-[#E5E0D7]/60 text-center mt-2.5">
                    Submitting this form sends an availability enquiry to Hotel Sharda. Confirmation is provided directly by hotel staff.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
