import { Room, GalleryItem, DiningCategory, Amenity } from '../types';

export const HOTEL_INFO = {
  name: 'Hotel Sharda',
  tagline: 'A comfortable and convenient stay in Bilaspur.',
  category: '3-Star Hotel',
  address: 'First Floor, Sharda Complex, Telipara Road, Near Old Bus Stand, Bharti Nagar, Telipara, Bilaspur, Chhattisgarh 495001, India',
  phone: '077524 06906',
  phoneRaw: '+917752406906',
  whatsappPhone: '917752406906',
  googleRating: {
    score: '3.5',
    max: '5',
    totalReviews: '1,927',
    platform: 'Google'
  },
  tripAdvisorRating: {
    score: '3.3',
    max: '5',
    totalReviews: '8',
    platform: 'TripAdvisor'
  },
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.551068809477!2d82.1466034!3d22.0863076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1356f96611%3A0xe54497e74fa3c2aa!2sHotel%20Sharda!5e0!3m2!1sen!2sin!4v1709880000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Hotel+Sharda,+Sharda+Complex,+Telipara+Road,+Near+Old+Bus+Stand,+Bilaspur,+Chhattisgarh+495001',
};

export const QUICK_FEATURES = [
  {
    id: 'feat-1',
    title: 'GREAT LOCATION',
    subtitle: 'Near Old Bus Stand, Telipara',
    icon: 'MapPin',
  },
  {
    id: 'feat-2',
    title: 'COMFORTABLE STAY',
    subtitle: 'Air-conditioned accommodation',
    icon: 'AirVent',
  },
  {
    id: 'feat-3',
    title: 'CONNECTED',
    subtitle: 'Wi-Fi available',
    icon: 'Wifi',
  },
  {
    id: 'feat-4',
    title: 'EASY PARKING',
    subtitle: 'Parking available',
    icon: 'Car',
  },
];

export const ROOMS: Room[] = [
  {
    id: 'ac-premium',
    name: 'AC PREMIUM',
    badge: 'Popular Choice',
    description: 'An air-conditioned accommodation option designed for guests looking for a comfortable and convenient stay.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    features: ['Air Conditioning', 'High-Speed Wi-Fi', 'Room Dining Service', 'Attached Bathroom', 'Work Desk & Chair'],
    ctaText: 'VIEW DETAILS',
  },
  {
    id: 'deluxe-suite',
    name: 'DELUXE SUITE',
    badge: 'Spacious Comfort',
    description: 'A spacious accommodation option for guests who prefer additional room to relax.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    features: ['Extra Spacious Living Area', 'Air Conditioning', 'High-Speed Wi-Fi', 'Seating Zone', 'Room Dining Service'],
    ctaText: 'VIEW DETAILS',
  },
  {
    id: 'family-stay',
    name: 'FAMILY STAY',
    badge: 'Group & Family',
    description: 'A practical choice for guests travelling together and looking for comfortable accommodation.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    features: ['Multiple Guest Capacity', 'Air Conditioning', 'High-Speed Wi-Fi', 'Convenient Layout', 'Laundry Service Access'],
    ctaText: 'ENQUIRE NOW',
  },
];

export const ROOM_GALLERY_IMAGES = [
  {
    id: 'rg-1',
    title: 'Comfortable Bedroom Interiors',
    caption: 'Clean, well-maintained linens with calming ambient lighting.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rg-2',
    title: 'Air-Conditioned Suites',
    caption: 'Modern air-conditioning ensuring a restful stay in Bilaspur.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rg-3',
    title: 'Refined Room Detailing',
    caption: 'Practical furnishings crafted for corporate and leisure travellers.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rg-4',
    title: 'Spacious Living Setup',
    caption: 'Ample space to unpack, relax, and unwind after your journey.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rg-5',
    title: 'Clean Ensuite Bathroom Amenities',
    caption: 'Hygienic private bathrooms with running water and essential fittings.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  }
];

export const DINING_CATEGORIES: DiningCategory[] = [
  {
    id: 'north-indian',
    title: 'NORTH INDIAN',
    description: 'Traditional gravies, aromatic curries, and rich vegetarian specialties prepared fresh daily.',
    popularItems: 'Paneer Butter Masala, Dal Makhani, Mixed Vegetable',
    iconName: 'Utensils',
  },
  {
    id: 'chinese',
    title: 'CHINESE',
    description: 'Wok-tossed noodles, fried rice varieties, and flavorful Indo-Chinese delicacies.',
    popularItems: 'Chilli Paneer, Hakka Noodles, Manchurian, Fried Rice',
    iconName: 'Flame',
  },
  {
    id: 'breakfast',
    title: 'BREAKFAST',
    description: 'Wholesome morning options to kickstart your day in Bilaspur.',
    popularItems: 'Hot Poha, Stuffed Parathas, Puri Bhaji, Masala Chai',
    iconName: 'Coffee',
  },
  {
    id: 'starters',
    title: 'STARTERS',
    description: 'Crispy snacks, tandoori treats, and savory appetizers for light dining.',
    popularItems: 'Crispy Corn, Paneer Tikka, Veg Spring Rolls',
    iconName: 'Sparkles',
  },
  {
    id: 'rice-biryani',
    title: 'RICE & BIRYANI',
    description: 'Fragrant Basmati rice preparations infused with traditional spices and herbs.',
    popularItems: 'Hyderabadi Veg Biryani, Jeera Rice, Steamed Basmati Rice',
    iconName: 'Bowl',
  },
  {
    id: 'breads',
    title: 'BREADS',
    description: 'Freshly baked tandoori rotis, naans, and butter parathas straight from the tandoor.',
    popularItems: 'Butter Naan, Garlic Naan, Tandoori Roti, Lachha Paratha',
    iconName: 'Wheat',
  },
  {
    id: 'quick-bites',
    title: 'QUICK BITES',
    description: 'Fast, tasty refreshments, hot snacks, and sandwiches on order.',
    popularItems: 'Grilled Sandwiches, French Fries, Pakoras',
    iconName: 'Clock',
  },
  {
    id: 'desserts-beverages',
    title: 'DESSERTS & BEVERAGES',
    description: 'Sweet finishes, chilled soft drinks, fresh lassi, and hot Bilaspuri masala tea.',
    popularItems: 'Gulab Jamun, Sweet Lassi, Masala Chai, Cold Drinks',
    iconName: 'CupSoda',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    name: 'Wi-Fi',
    description: 'Stay connected during your visit.',
    icon: 'Wifi',
  },
  {
    id: 'parking',
    name: 'Parking',
    description: 'Convenient parking facilities for guests.',
    icon: 'Car',
  },
  {
    id: 'air-conditioning',
    name: 'Air Conditioning',
    description: 'Enjoy a comfortable indoor environment.',
    icon: 'AirVent',
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Convenient on-site dining.',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'laundry-service',
    name: 'Laundry Service',
    description: 'Laundry facilities for added convenience.',
    icon: 'Shirt',
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'PRIME LOCATION',
    description: 'Conveniently situated near the Old Bus Stand in Telipara.',
    detail: 'Located in the heart of commercial and transit routes in Bilaspur, ensuring quick access to business centers, local transport, and city hubs.',
  },
  {
    number: '02',
    title: 'COMFORT & CONVENIENCE',
    description: 'Essential hotel facilities designed around a hassle-free stay.',
    detail: 'Equipped with air conditioning, on-site dining, laundry service, parking, and dedicated staff to make your stay effortless.',
  },
  {
    number: '03',
    title: 'EASY TO REACH',
    description: 'Located in the Telipara area of Bilaspur with easy access to local transport.',
    detail: 'A short walk from the Old Bus Stand with ample auto-rickshaws, cabs, and transit links right outside the complex.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hotel Sharda Complex Entrance',
    category: 'EXTERIOR',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sharda Complex location on Telipara Road, easily accessible from the main transit routes.',
  },
  {
    id: 'gal-2',
    title: 'AC Premium Bedroom',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Air-conditioned premium accommodation with crisp linens and comfortable bed.',
  },
  {
    id: 'gal-3',
    title: 'Deluxe Suite Living Space',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious suite designed for guests desiring extra comfort and work space.',
  },
  {
    id: 'gal-4',
    title: 'On-Site Restaurant & Dining',
    category: 'FOOD & DRINK',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm and inviting dining area serving North Indian and Chinese specialties.',
  },
  {
    id: 'gal-5',
    title: 'Family Room Arrangement',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable family accommodation ideal for group travels and families.',
  },
  {
    id: 'gal-6',
    title: 'Traditional Indian Cuisine',
    category: 'FOOD & DRINK',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly prepared vegetarian curries, rotis, and rice dishes.',
  },
  {
    id: 'gal-7',
    title: 'Guest Reception & Help Desk',
    category: 'GUESTS',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm reception providing smooth check-ins and travel assistance.',
  },
  {
    id: 'gal-8',
    title: 'Convenient Parking & Access',
    category: 'EXTERIOR',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Secure on-premises parking area for guest vehicles.',
  },
];
