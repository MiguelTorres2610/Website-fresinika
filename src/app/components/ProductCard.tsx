import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/app/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappOrder = () => {
    const phoneNumber = "50588888888";
    const message = encodeURIComponent(
      `¡Hola! Me gustaría pedir: ${product.name} - C$${product.price}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-strawberry transition-all duration-300 overflow-hidden">
      <Link to={`/producto/${product.id}`} className="block relative">
        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white z-10 shadow-md"
            style={{
              backgroundColor:
                product.badge === 'Promo' ? 'var(--tropical-green)' :
                product.badge === 'Nuevo' ? 'var(--strawberry-pink)' :
                'var(--strawberry-red)',
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/producto/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-[var(--strawberry-red)] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold price" style={{ color: 'var(--strawberry-red)' }}>
            C${product.price}
          </div>
          <button
            onClick={whatsappOrder}
            className="px-4 py-2 rounded-full text-white transition-all hover:scale-105 flex items-center gap-2 text-sm"
            style={{ backgroundColor: 'var(--strawberry-red)' }}
          >
            <ShoppingCart size={16} />
            <span>Pedir</span>
          </button>
        </div>
      </div>
    </div>
  );
}