import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function Location() {
  const contactWhatsApp = () => {
    const phoneNumber = "50588888888";
    const message = encodeURIComponent("¡Hola! Quisiera información sobre ubicación y horarios 🍓");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section 
        className="py-12 md:py-16 px-4 text-center"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="text-5xl md:text-6xl mb-4">📍</div>
        <h1 
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ color: 'var(--strawberry-red)' }}
        >
          Encuéntranos
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Estamos en Managua para servirte
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <MapPin size={28} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
              Dirección
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Managua, Nicaragua
            </p>
            <p className="text-sm text-gray-600">
              Hacemos delivery en toda la ciudad
            </p>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <Clock size={28} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
              Horarios
            </h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span className="font-semibold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-semibold">10:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-semibold">10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <Phone size={28} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
              Teléfono
            </h3>
            <p className="text-gray-700 text-lg md:text-xl mb-4">
              +505 8888 8888
            </p>
            <button
              onClick={contactWhatsApp}
              className="px-6 py-2 rounded-full text-white text-sm transition-all hover:scale-105"
              style={{ backgroundColor: '#25D366' }}
            >
              Contactar por WhatsApp
            </button>
          </div>

          {/* Delivery */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <Navigation size={28} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
              Delivery
            </h3>
            <p className="text-gray-700 text-base mb-2">
              Entrega a domicilio en toda Managua
            </p>
            <p className="text-sm text-gray-600">
              Tiempo estimado: 20-30 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
            style={{ color: 'var(--strawberry-red)' }}
          >
            Nuestra Ubicación
          </h2>
          <div 
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            style={{ backgroundColor: 'var(--cream)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125033.04932346828!2d-86.35087854999999!3d12.114992899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73f87cb2d177a1%3A0x4e1e2faa718c4aa0!2sManagua%2C%20Nicaragua!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Managua, Nicaragua"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Mapa de referencia de Managua, Nicaragua
          </p>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl md:text-6xl mb-6">🍓</div>
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--strawberry-red)' }}
          >
            ¿Listo para tu pedido?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Contáctanos por WhatsApp y recibe tu pedido en minutos
          </p>
          <button
            onClick={contactWhatsApp}
            className="px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: '#25D366' }}
          >
            Hacer un Pedido Ahora
          </button>
        </div>
      </section>
    </div>
  );
}
