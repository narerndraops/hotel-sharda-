import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center bg-[#25D366] hover:bg-[#20b859] text-white shadow-2xl rounded-full p-3 sm:px-5 sm:py-3.5 transition-all duration-300 hover:scale-105 border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Hotel Sharda on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
        <span className="hidden sm:inline ml-2.5 text-xs font-bold uppercase tracking-wider">
          Chat with us
        </span>
      </a>
    </aside>
  );
}
