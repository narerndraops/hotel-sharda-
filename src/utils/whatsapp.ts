import { HOTEL_INFO } from '../data/hotelData';

export function getGeneralWhatsAppUrl(): string {
  const message = 'Hello Hotel Sharda, I would like to enquire about room availability.';
  return `https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function getFloatingBarWhatsAppUrl(details: {
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
}): string {
  const message = `Hello Hotel Sharda, I would like to check room availability.

Check-in: ${details.checkIn || 'To be decided'}
Check-out: ${details.checkOut || 'To be decided'}
Guests: ${details.guests || '2 Adults'}
Rooms: ${details.rooms || '1 Room'}`;

  return `https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function getFullBookingWhatsAppUrl(details: {
  name: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  roomType?: string;
  message?: string;
}): string {
  let msg = `Hello Hotel Sharda,

I would like to enquire about a stay.

Name: ${details.name || 'Guest'}
Phone: ${details.phone || 'Provided via form'}
Check-in: ${details.checkIn || 'To be decided'}
Check-out: ${details.checkOut || 'To be decided'}
Guests: ${details.guests || '2 Adults'}
Rooms: ${details.rooms || '1 Room'}`;

  if (details.roomType) {
    msg += `\nRoom Preference: ${details.roomType}`;
  }
  if (details.message) {
    msg += `\nNote: ${details.message}`;
  }

  msg += `\n\nPlease share availability and booking details.`;

  return `https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodeURIComponent(msg)}`;
}
