import { MapPin, Phone, Navigation, Clock, Building } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F8F6F1] border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>FIND US IN BILASPUR</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            Prime Central Location
          </h2>

          <p className="text-base text-[#68645D] leading-relaxed">
            Conveniently situated in Telipara near the Old Bus Stand with straightforward connectivity to Bilaspur Junction and city landmarks.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Responsive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-[#E5E0D7] bg-white min-h-[380px] sm:min-h-[460px] flex flex-col">
            <div className="p-4 bg-white border-b border-[#E5E0D7] flex items-center justify-between text-xs text-[#68645D]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#B08A4A]" />
                <span className="font-semibold text-[#1D1D1B]">Hotel Sharda, Telipara, Bilaspur</span>
              </div>
              <span className="text-[11px] bg-[#F8F6F1] px-2 py-0.5 rounded text-[#68645D]">
                Interactive Map
              </span>
            </div>

            <div className="relative w-full flex-1 min-h-[320px]">
              <iframe
                title="Hotel Sharda Bilaspur Google Maps Location"
                src="https://maps.google.com/maps?q=Hotel+Sharda+Sharda+Complex+Telipara+Road+Bilaspur+Chhattisgarh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Getting Here & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D7] shadow-sm">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B08A4A] font-bold mb-3">
                <Navigation className="w-3.5 h-3.5" />
                <span>GETTING HERE</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D1D1B] mb-6">
                HOTEL SHARDA
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-sm text-[#1D1D1B]">
                  <Building className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Address</span>
                    <p className="text-[#68645D] text-xs sm:text-sm leading-relaxed mt-0.5">
                      First Floor, Sharda Complex,<br />
                      Telipara Road, Near Old Bus Stand,<br />
                      Bharti Nagar, Telipara,<br />
                      Bilaspur, Chhattisgarh 495001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm text-[#1D1D1B]">
                  <Phone className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Telephone</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-[#1D1D1B] hover:text-[#B08A4A] font-semibold text-base transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-sm text-[#1D1D1B]">
                  <Clock className="w-5 h-5 text-[#B08A4A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Front Desk Hours</span>
                    <p className="text-[#68645D] text-xs mt-0.5">
                      24-Hour Reception & Guest Assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Transit Reference Points */}
              <div className="bg-[#F8F6F1] p-4 rounded-xl border border-[#E5E0D7] mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B] block">
                  Nearby Key Landmarks:
                </span>
                <ul className="text-xs text-[#68645D] space-y-1.5 list-disc list-inside">
                  <li>Directly adjacent to Old Bus Stand, Telipara</li>
                  <li>Easy access to Bilaspur Railway Junction via auto/cab</li>
                  <li>Close to Telipara commercial markets & banks</li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E5E0D7]">
              <a
                href={HOTEL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions-btn"
                className="py-3.5 px-4 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B08A4A]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                id="location-call-hotel-btn"
                className="py-3.5 px-4 bg-[#F8F6F1] hover:bg-[#E5E0D7] text-[#1D1D1B] text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 text-center flex items-center justify-center space-x-2 border border-[#E5E0D7]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08A4A]" />
                <span>CALL HOTEL</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
