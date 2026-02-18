import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "50588888888"; // Placeholder
  const message = encodeURIComponent("¡Hola! Me gustaría hacer un pedido de Fresinika 🍓");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  );
}
