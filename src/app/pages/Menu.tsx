import { useState } from "react";
import { ProductCard } from "@/app/components/ProductCard";
import { products, categories } from "@/app/data/products";
import { motion } from "motion/react";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section 
        className="py-12 md:py-16 px-4 text-center"
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
          Nuestro Menú
        </motion.h1>
        <motion.p 
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Descubre todas nuestras deliciosas opciones preparadas con amor
        </motion.p>
      </section>

      {/* Categorías */}
      <section className="py-6 md:py-8 px-4 bg-white sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap transition-all flex-shrink-0 border-2"
              style={{
                backgroundColor: selectedCategory === null ? 'var(--strawberry-red)' : 'white',
                borderColor: 'var(--strawberry-red)',
                color: selectedCategory === null ? 'white' : 'var(--strawberry-red)',
              }}
            >
              <span className="mr-2">🍽️</span>
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap transition-all flex-shrink-0 border-2"
                style={{
                  backgroundColor: selectedCategory === category.id ? 'var(--strawberry-red)' : 'white',
                  borderColor: 'var(--strawberry-red)',
                  color: selectedCategory === category.id ? 'white' : 'var(--strawberry-red)',
                }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Productos - Ajustado el gap para móvil */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {selectedCategory && (
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--strawberry-red)' }}>
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <div className="text-6xl mb-4">😕</div>
              <p className="text-lg">No hay productos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--strawberry-red)' }}>
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Contáctanos por WhatsApp y armamos algo especial para ti
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/50582567321')}
            className="px-8 md:px-10 py-3 md:py-4 rounded-full text-white font-semibold shadow-lg transition-all"
            style={{ backgroundColor: '#25D366' }}
          >
            Contactar por WhatsApp
          </motion.button>
        </div>
      </section>
    </div>
  );
}