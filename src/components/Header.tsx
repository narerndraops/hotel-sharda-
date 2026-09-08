import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#E5E0D7]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          id="header-brand-logo"
          className="group flex flex-col items-start focus:outline-none focus:ring-2 focus:ring-[#B08A4A] rounded-md px-1"
        >
          <span
            className={`font-serif text-2xl sm:text-2xl tracking-wider font-semibold transition-colors ${
              isScrolled ? 'text-[#1D1D1B] group-hover:text-[#B08A4A]' : 'text-white'
            }`}
          >
            HOTEL SHARDA
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.25em] font-medium ${
              isScrolled ? 'text-[#B08A4A]' : 'text-[#B08A4A]'
            }`}
          >
            Telipara • Bilaspur
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          id="desktop-navigation"
          aria-label="Main Navigation"
          className="hidden lg:flex items-center space-x-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#B08A4A] relative py-1 focus:outline-none focus:ring-1 focus:ring-[#B08A4A] rounded ${
                isScrolled ? 'text-[#1D1D1B]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            id="header-phone-quicklink"
            className={`flex items-center space-x-2 text-xs font-medium tracking-wider px-3 py-2 rounded-md transition-colors ${
              isScrolled ? 'text-[#68645D] hover:text-[#1D1D1B]' : 'text-white/80 hover:text-white'
            }`}
            title="Call Hotel Sharda"
          >
            <Phone className="w-3.5 h-3.5 text-[#B08A4A]" />
            <span>{HOTEL_INFO.phone}</span>
          </a>

          <button
            id="header-book-stay-btn"
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-semibold uppercase tracking-widest rounded-lg shadow-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B08A4A] focus:ring-offset-2"
          >
            Book Your Stay
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            id="mobile-quick-book-btn"
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 bg-[#B08A4A] text-white text-xs font-semibold uppercase tracking-wider rounded-md sm:hidden"
          >
            Book
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors ${
              isScrolled ? 'text-[#1D1D1B] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white text-[#1D1D1B] border-b border-[#E5E0D7] shadow-xl px-5 py-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#E5E0D7] flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-lg text-[#1D1D1B]">Hotel Sharda</p>
                <p className="text-xs text-[#68645D]">Telipara, Bilaspur, Chhattisgarh</p>
              </div>
              <span className="text-xs px-2 py-0.5 bg-[#B08A4A]/10 text-[#B08A4A] font-medium rounded">
                ★ 3-Star
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-sm font-medium text-[#1D1D1B] hover:bg-[#F8F6F1] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E0D7] flex flex-col space-y-2.5">
              <button
                id="mobile-drawer-book-stay-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-sm font-semibold tracking-wider rounded-lg transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>BOOK YOUR STAY</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                id="mobile-drawer-call-btn"
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#F8F6F1] border border-[#E5E0D7] text-[#1D1D1B] text-sm font-medium rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#B08A4A]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
