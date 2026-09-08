export interface Room {
  id: string;
  name: string;
  badge?: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ROOMS' | 'EXTERIOR' | 'FOOD & DRINK' | 'GUESTS';
  image: string;
  caption: string;
}

export interface DiningCategory {
  id: string;
  title: string;
  description: string;
  popularItems: string;
  iconName: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface BookingEnquiry {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  roomType?: string;
  message?: string;
}
