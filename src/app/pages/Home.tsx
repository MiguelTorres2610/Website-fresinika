import { Link } from "react-router";
import { MessageCircle, Clock, MapPin, Star } from "lucide-react";
import { ProductCard } from "@/app/components/ProductCard";
import { SEO } from "@/app/components/SEO";
import { products } from "@/app/data/products";
import { motion } from "motion/react";
import logo from "../../assets/logo_fresanika.webp";

export function Home() {
  const featuredProducts = products.filter(p => p.badge === 'Más vendido').slice(0, 4);

  const orderWhatsApp = () => {
    const phoneNumber = "50588888888";
    const message = encodeURIComponent("¡Hola! Me gustaría hacer un pedido 🍓");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div>
      <SEO />
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1723437496824-a73ed350558b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJpZXMlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzcwMDA4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresas con crema"
            className="w-full h-full object-cover opacity-30"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,245,247,0.8), rgba(255,238,241,0.95))'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            className="text-6xl md:text-8xl mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
          >
            <img src={logo} alt="Fresinika Logo" className="w-40 h-40 mx-auto" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
            style={{ color: 'var(--strawberry-red)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fresinika
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Fresas con crema artesanales en Managua
          </motion.p>
          <motion.p 
            className="text-base md:text-lg mb-8 md:mb-10 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Frescas, deliciosas y preparadas al momento. ¡El antojo perfecto para cualquier ocasión!
          </motion.p>
          <motion.button
            onClick={orderWhatsApp}
            className="px-8 md:px-10 py-4 md:py-5 rounded-full text-white text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
            style={{ backgroundColor: '#25D366' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            <span>Pedir por WhatsApp</span>
          </motion.button>
        </div>
      </section>

      {/* Featured Info */}
      <section className="py-8 md:py-12 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}>
              <Clock size={24} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-1">Entrega Rápida</h3>
              <p className="text-sm text-gray-600">En menos de 30 minutos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}>
              <MapPin size={24} style={{ color: 'var(--strawberry-red)' }} />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-1">Managua</h3>
              <p className="text-sm text-gray-600">Delivery en toda la ciudad</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}>
              <Star size={24} style={{ color: 'var(--strawberry-red)' }} fill="var(--strawberry-red)" />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-1">14,000+ Seguidores</h3>
              <p className="text-sm text-gray-600">Nos respaldan en redes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--strawberry-red)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Los Más Vendidos
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nuestros clientes no pueden resistirse a estos sabores
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-full text-white text-base md:text-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--strawberry-red)' }}
            >
              Ver Menú Completo
            </Link>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section 
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--strawberry-red)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ¿Cómo Hacer tu Pedido?
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Es súper fácil y rápido
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl text-white mx-auto mb-4"
                style={{ backgroundColor: 'var(--strawberry-red)' }}
              >
                1
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2">Elige tu favorito</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Explora nuestro menú y selecciona lo que más te antoje
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl text-white mx-auto mb-4"
                style={{ backgroundColor: 'var(--strawberry-pink)' }}
              >
                2
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2">Ordena por WhatsApp</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Contacta con nosotros y confirma tu pedido
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl text-white mx-auto mb-4"
                style={{ backgroundColor: 'var(--tropical-green)' }}
              >
                3
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2">¡Disfruta!</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Recibe tu pedido fresco y listo para disfrutar
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10 md:mt-12">
            <button
              onClick={orderWhatsApp}
              className="px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={22} />
              <span>Hacer un Pedido</span>
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-5xl md:text-6xl mb-6">❤️</div>
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--strawberry-red)' }}
          >
            Más de 14,000 seguidores disfrutan Fresinika
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Únete a nuestra comunidad y descubre por qué somos los favoritos de Managua
          </p>
          <Link
            to="/opiniones"
            className="inline-block px-6 md:px-8 py-3 rounded-full border-2 transition-all hover:scale-105 text-base md:text-lg"
            style={{ 
              borderColor: 'var(--strawberry-red)',
              color: 'var(--strawberry-red)',
            }}
          >
            Ver Opiniones
          </Link>
        </div>
      </section>
    </div>
  );
}