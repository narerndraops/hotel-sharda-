import { useState } from 'react';
import { Phone, MapPin, ArrowUp, X, Shield, FileText } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#171717] text-[#E5E0D7] border-t border-white/10 pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl font-bold tracking-wider text-white mb-2">
              HOTEL SHARDA
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08A4A] font-semibold mb-4">
              3-Star Boutique Hotel • Telipara, Bilaspur
            </p>
            <p className="text-sm text-[#E5E0D7]/70 italic leading-relaxed mb-6 max-w-sm">
              &ldquo;Comfortable stays. Convenient location. Warm hospitality.&rdquo;
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#E5E0D7]/60">
              <span>Google 3.5★</span>
              <span>•</span>
              <span>TripAdvisor 3.3★</span>
              <span>•</span>
              <span>Near Old Bus Stand</span>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#B08A4A] mb-4">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm text-[#E5E0D7]/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B08A4A] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  First Floor, Sharda Complex,<br />
                  Telipara Road, Near Old Bus Stand,<br />
                  Bilaspur, Chhattisgarh 495001
                </address>
              </div>

              <div className="flex items-center space-x-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#B08A4A] shrink-0" />
                <div>
                  <span className="text-xs block text-[#E5E0D7]/60 uppercase font-semibold">Phone</span>
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="text-white hover:text-[#B08A4A] font-medium transition-colors"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#B08A4A]">
                QUICK LINKS
              </h3>
              <button
                type="button"
                onClick={scrollToTop}
                className="text-xs text-[#E5E0D7]/60 hover:text-white flex items-center space-x-1 cursor-pointer"
                title="Scroll to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#E5E0D7]/70 hover:text-[#B08A4A] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E0D7]/60">
          <p>© 2026 Hotel Sharda. All Rights Reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      {modalType && (
        <div
          id="legal-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-[#1D1D1B] text-white border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="legal-modal-close-btn"
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-xs font-semibold text-[#B08A4A] uppercase tracking-wider mb-2">
              {modalType === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span>{modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-4">
              {modalType === 'privacy' ? 'Hotel Sharda Privacy Policy' : 'Hotel Sharda Terms of Stay'}
            </h3>

            <div className="text-xs text-[#E5E0D7]/80 space-y-3 max-h-64 overflow-y-auto pr-2 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>Hotel Sharda respects your personal privacy. When you enquire about room availability via this website, your name, telephone number, and stay dates are utilized solely for responding to your booking inquiry and providing hospitality services in Bilaspur, Chhattisgarh.</p>
                  <p>We do not sell, distribute, or lease personal information to third parties. Contact information is securely handled by Hotel Sharda front office personnel.</p>
                </>
              ) : (
                <>
                  <p>Check-in and check-out times and verification policies apply at Hotel Sharda reception. Government-issued photo identification is required upon arrival for all staying adult guests as per Indian regulations.</p>
                  <p>Room availability and tariffs are confirmed directly by hotel management upon direct enquiry or WhatsApp reservation.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-5 py-2 bg-[#B08A4A] hover:bg-[#9A753B] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
