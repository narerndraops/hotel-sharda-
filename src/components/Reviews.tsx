import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A4A] mb-3">
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
            <span>VERIFIED RATINGS</span>
            <span className="w-5 h-[1.5px] bg-[#B08A4A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1B] tracking-tight mb-4">
            What Guests Are Saying
          </h2>

          <p className="text-base text-[#68645D] leading-relaxed">
            Direct public ratings and guest feedback from verified travel platforms.
          </p>
        </div>

        {/* Platform-Specific Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Google Reviews Card */}
          <div
            id="google-review-card"
            className="bg-[#F8F6F1] rounded-2xl p-8 border border-[#E5E0D7] shadow-sm hover:border-[#B08A4A] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {/* Google G Logo Style */}
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E5E0D7]">
                    <span className="font-bold text-xl text-[#4285F4]">G</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1D1D1B]">
                      Google Reviews
                    </h3>
                    <p className="text-xs text-[#68645D]">Verified Bilaspur listings</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Public Data</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-3 mb-3">
                <span className="font-serif text-5xl font-bold text-[#1D1D1B]">
                  {HOTEL_INFO.googleRating.score}
                </span>
                <span className="text-lg text-[#68645D]">
                  / {HOTEL_INFO.googleRating.max}
                </span>
              </div>

              {/* Star icons */}
              <div className="flex items-center space-x-1 text-amber-500 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                {/* Half star representation */}
                <div className="relative">
                  <Star className="w-5 h-5 text-gray-300" />
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <Star className="w-5 h-5 text-gray-300" />
              </div>

              <p className="text-sm font-semibold text-[#1D1D1B]">
                Based on {HOTEL_INFO.googleRating.totalReviews} guest reviews
              </p>
              <p className="text-xs text-[#68645D] mt-1 leading-relaxed">
                Appreciated by travellers for convenient location near the Old Bus Stand and practical connectivity in Bilaspur.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E0D7]">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Hotel+Sharda+Telipara+Road+Bilaspur`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B08A4A] hover:text-[#9A753B]"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* TripAdvisor Reviews Card */}
          <div
            id="tripadvisor-review-card"
            className="bg-[#F8F6F1] rounded-2xl p-8 border border-[#E5E0D7] shadow-sm hover:border-[#B08A4A] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E5E0D7]">
                    <span className="font-bold text-lg text-[#00AA6C]">TA</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1D1D1B]">
                      TripAdvisor
                    </h3>
                    <p className="text-xs text-[#68645D]">Traveler community rating</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-3 mb-3">
                <span className="font-serif text-5xl font-bold text-[#1D1D1B]">
                  {HOTEL_INFO.tripAdvisorRating.score}
                </span>
                <span className="text-lg text-[#68645D]">
                  / {HOTEL_INFO.tripAdvisorRating.max}
                </span>
              </div>

              {/* Star icons */}
              <div className="flex items-center space-x-1 text-[#00AA6C] mb-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-[#00AA6C]" />
                ))}
                <div className="relative w-4 h-4 rounded-full bg-gray-300 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[30%] bg-[#00AA6C]" />
                </div>
                <div className="w-4 h-4 rounded-full bg-gray-300" />
              </div>

              <p className="text-sm font-semibold text-[#1D1D1B]">
                Based on {HOTEL_INFO.tripAdvisorRating.totalReviews} guest reviews
              </p>
              <p className="text-xs text-[#68645D] mt-1 leading-relaxed">
                Guest ratings highlighting accessibility, practical room amenities, and easy transit to city hubs.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E0D7]">
              <a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B08A4A] hover:text-[#9A753B]"
              >
                <span>Read on TripAdvisor</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* View More Reviews CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Hotel+Sharda+Telipara+Road+Bilaspur"
            target="_blank"
            rel="noopener noreferrer"
            id="reviews-view-more-btn"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#1D1D1B] hover:bg-[#B08A4A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>VIEW MORE REVIEWS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
