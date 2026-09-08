import { MapPin, AirVent, Wifi, Car } from 'lucide-react';

export default function QuickInfoStrip() {
  const features = [
    {
      id: 'info-location',
      title: 'GREAT LOCATION',
      description: 'Near Old Bus Stand, Telipara',
      icon: MapPin,
    },
    {
      id: 'info-ac',
      title: 'COMFORTABLE STAY',
      description: 'Air-conditioned accommodation',
      icon: AirVent,
    },
    {
      id: 'info-wifi',
      title: 'CONNECTED',
      description: 'Wi-Fi available',
      icon: Wifi,
    },
    {
      id: 'info-parking',
      title: 'EASY PARKING',
      description: 'Parking available',
      icon: Car,
    },
  ];

  return (
    <section id="quick-info" className="py-12 bg-[#F8F6F1] border-b border-[#E5E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E0D7] shadow-sm hover:border-[#B08A4A] transition-all duration-200 group flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F8F6F1] flex items-center justify-center text-[#B08A4A] group-hover:bg-[#B08A4A] group-hover:text-white transition-colors duration-200 mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold tracking-wider text-[#1D1D1B] uppercase mb-1">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#68645D]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
