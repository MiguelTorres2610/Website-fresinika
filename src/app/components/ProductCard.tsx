import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ product }: { product: Product }) {
  const handleOrder = () => {
    const phoneNumber = "50582567321";
    const message = encodeURIComponent(`¡Hola! Me gustaría pedir: ${product.name} (C$${product.price}) 🍓`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md"
    >
      {/* Imagen del Postre */}
      <div className="relative h-32 md:h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información */}
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[10px] md:text-sm mb-3 line-clamp-2 leading-tight">
          {product.description}
        </p>

        {/* Precio y Botón (Responsivo) */}
        <div className="mt-auto flex items-center justify-between gap-1">
          <span className="font-bold text-sm md:text-lg" style={{ color: 'var(--strawberry-red)' }}>
            C${product.price}
          </span>
          
          <motion.button 
            whileTap={{ scale: 0.85 }} 
            whileHover={{ scale: 1.05 }}
            onClick={handleOrder}
            className="flex items-center justify-center gap-2 text-white p-2 md:px-4 md:py-2 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--strawberry-red)' }}
          >
            <ShoppingCart size={18} />
            {/* Oculto en móvil, visible en escritorio */}
            <span className="hidden md:inline font-semibold text-sm">
              Pedir
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}3