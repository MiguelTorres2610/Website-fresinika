import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ShoppingCart, Share2 } from "lucide-react";
import { products } from "@/app/data/products";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--strawberry-red)' }}>
          Producto no encontrado
        </h1>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-full text-white transition-all hover:scale-105"
          style={{ backgroundColor: 'var(--strawberry-red)' }}
        >
          Volver al Menú
        </Link>
      </div>
    );
  }

  const whatsappOrder = () => {
    const phoneNumber = "50588888888";
    const message = encodeURIComponent(
      `¡Hola! Me gustaría pedir:\n${product.name}\nPrecio: C$${product.price}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `¡Mira este delicioso producto de Fresinika! ${product.description}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[var(--strawberry-red)] transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </button>
      </div>

      {/* Product Details */}
      <section className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="relative">
            {product.badge && (
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full text-sm text-white z-10 shadow-md"
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
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--strawberry-red)' }}
            >
              {product.name}
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {product.flavors && product.flavors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Sabores disponibles:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="px-4 py-2 rounded-full text-sm"
                      style={{ 
                        backgroundColor: 'var(--cream)',
                        color: 'var(--strawberry-red)',
                      }}
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <div className="text-4xl md:text-5xl font-bold price" style={{ color: 'var(--strawberry-red)' }}>
                C${product.price}
              </div>
              <p className="text-sm text-gray-500 mt-1">Precio por unidad</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button
                onClick={whatsappOrder}
                className="flex-1 px-6 py-4 rounded-full text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                style={{ backgroundColor: '#25D366' }}
              >
                <ShoppingCart size={22} />
                <span>Pedir por WhatsApp</span>
              </button>

              <button
                onClick={shareProduct}
                className="px-6 py-4 rounded-full border-2 transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{ 
                  borderColor: 'var(--strawberry-red)',
                  color: 'var(--strawberry-red)',
                }}
              >
                <Share2 size={20} />
                <span className="hidden sm:inline">Compartir</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section 
          className="py-12 md:py-16 px-4"
          style={{ backgroundColor: 'var(--cream-white)' }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
              style={{ color: 'var(--strawberry-red)' }}
            >
              También te puede gustar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/producto/${product.id}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-sm md:text-base mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="text-lg md:text-xl font-bold price" style={{ color: 'var(--strawberry-red)' }}>
                      C${product.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}