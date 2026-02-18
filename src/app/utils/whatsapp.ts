// WhatsApp configuration and utility functions
export const WHATSAPP_CONFIG = {
  phoneNumber: "50588888888", // Placeholder phone number
  businessName: "Fresinika",
};

export function openWhatsApp(message: string) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

export function createProductOrderMessage(productName: string, price: number) {
  return `¡Hola ${WHATSAPP_CONFIG.businessName}! Me gustaría pedir:\n\n${productName}\nPrecio: C$${price}\n\n¡Gracias! 🍓`;
}

export function createGeneralOrderMessage() {
  return `¡Hola ${WHATSAPP_CONFIG.businessName}! Me gustaría hacer un pedido 🍓`;
}

export function createCustomMessage(message: string) {
  return `¡Hola ${WHATSAPP_CONFIG.businessName}! ${message}`;
}
