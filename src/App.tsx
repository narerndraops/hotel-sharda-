import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingBookingBar from './components/FloatingBookingBar';
import QuickInfoStrip from './components/QuickInfoStrip';
import About from './components/About';
import Rooms from './components/Rooms';
import RoomGallery from './components/RoomGallery';
import Dining from './components/Dining';
import Amenities from './components/Amenities';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActionBar from './components/MobileActionBar';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import { Room } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    rooms?: string;
    roomType?: string;
  }>({});

  const handleOpenBooking = (prefillData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    rooms?: string;
    roomType?: string;
  }) => {
    if (prefillData) {
      setBookingPrefill(prefillData);
    } else {
      setBookingPrefill({});
    }
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleEnquireRoom = (room: Room) => {
    setBookingPrefill({ roomType: room.name });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#1D1D1B] relative">
      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onCheckAvailability={() => handleOpenBooking()} />

        {/* 2. Floating Booking Bar immediately below hero */}
        <FloatingBookingBar
          onOpenBookingModal={(prefill) => handleOpenBooking(prefill)}
        />

        {/* 3. Quick Information Strip (4 columns) */}
        <QuickInfoStrip />

        {/* 4. About Section */}
        <About />

        {/* 5. Rooms Section */}
        <Rooms
          onSelectRoom={handleSelectRoom}
          onEnquireRoom={handleEnquireRoom}
        />

        {/* 6. Room Gallery (Horizontal swipeable gallery) */}
        <RoomGallery
          onImageClick={(img) => {
            // Can be previewed or opened in lightbox
          }}
        />

        {/* 7. Dining Section (Dark background) */}
        <Dining />

        {/* 8. Amenities Section (Wi-Fi, Parking, AC, Restaurant, Laundry) */}
        <Amenities />

        {/* 9. Why Choose Us (01, 02, 03 Editorial layout) */}
        <WhyChooseUs />

        {/* 10. Gallery (Masonry style with lightbox) */}
        <Gallery />

        {/* 11. Reviews (Google & TripAdvisor platform cards) */}
        <Reviews />

        {/* 12. Location (Google Maps embed + Directions & Call) */}
        <Location />

        {/* 13. Contact (Dark section with contact form + Call & WhatsApp) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Book Now) */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefill={bookingPrefill}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookNow={(room) => handleEnquireRoom(room)}
      />
    </div>
  );
}
