import { Heart, Award, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section 
        className="py-12 md:py-16 px-4 text-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <motion.div 
          className="text-5xl md:text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          🍓
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ color: 'var(--strawberry-red)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sobre Fresinika
        </motion.h1>
        <motion.p 
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nuestra historia de pasión por las fresas
        </motion.p>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--strawberry-red)' }}
              >
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Fresinika nació del amor por las fresas frescas y la pasión por crear momentos dulces en la vida de las personas.
                </p>
                <p>
                  Somos un emprendimiento 100% nicaragüense que inició en Managua con una misión simple: 
                  llevar las mejores fresas con crema artesanales a cada rincón de la ciudad.
                </p>
                <p>
                  Lo que comenzó como un proyecto pequeño, hoy es el favorito de más de 14,000 seguidores 
                  que confían en nosotros para esos antojos dulces e irresistibles.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1760445528720-d112720c1e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2OTkzMDUwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Preparación artesanal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: 'var(--strawberry-red)' }}
          >
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Freshness */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--cream-white)' }}
              >
                <Sparkles size={32} style={{ color: 'var(--strawberry-red)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
                Frescura
              </h3>
              <p className="text-gray-600">
                Usamos solo las fresas más frescas y de mejor calidad
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--cream-white)' }}
              >
                <Award size={32} style={{ color: 'var(--strawberry-red)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
                Calidad
              </h3>
              <p className="text-gray-600">
                Preparamos todo de forma artesanal con los mejores ingredientes
              </p>
            </div>

            {/* Love */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--cream-white)' }}
              >
                <Heart size={32} style={{ color: 'var(--strawberry-red)' }} fill="var(--strawberry-red)" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
                Pasión
              </h3>
              <p className="text-gray-600">
                Cada producto lo hacemos con amor y dedicación
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--cream-white)' }}
              >
                <Users size={32} style={{ color: 'var(--strawberry-red)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--strawberry-red)' }}>
                Comunidad
              </h3>
              <p className="text-gray-600">
                Somos parte de la familia de miles de nicaragüenses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            style={{ color: 'var(--strawberry-red)' }}
          >
            ¿Por Qué Elegir Fresinika?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                ✓
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">100% Artesanal</h3>
                <p className="text-gray-600 text-base">
                  Cada porción es preparada al momento con ingredientes frescos y de calidad premium
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                ✓
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">Marca Nicaragüense</h3>
                <p className="text-gray-600 text-base">
                  Somos un emprendimiento local que apoya la economía y talento de Nicaragua
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                ✓
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">Entrega Rápida</h3>
                <p className="text-gray-600 text-base">
                  Tu pedido llega fresco en menos de 30 minutos en toda Managua
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                ✓
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">Variedad Única</h3>
                <p className="text-gray-600 text-base">
                  Desde lo clásico hasta combinaciones tropicales innovadoras que solo encuentras aquí
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl md:text-6xl mb-6">❤️</div>
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--strawberry-red)' }}
          >
            ¿Listo para probar?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Únete a los miles de nicaragüenses que ya disfrutan Fresinika
          </p>
          <button
            onClick={() => {
              const phoneNumber = "50588888888";
              const message = encodeURIComponent("¡Hola! Me gustaría hacer mi primer pedido 🍓");
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: '#25D366' }}
          >
            Hacer mi Primer Pedido
          </button>
        </div>
      </section>
    </div>
  );
}