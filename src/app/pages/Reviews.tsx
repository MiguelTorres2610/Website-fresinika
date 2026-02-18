import { Star, ThumbsUp, Instagram } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment: "¡Las mejores fresas con crema de Managua! Súper frescas y la porción es generosa. 100% recomendado 🍓❤️",
    date: "Hace 2 días",
    likes: 24,
  },
  {
    id: 2,
    name: "Carlos Martínez",
    rating: 5,
    comment: "El mix tropical es una delicia! Perfecto para estos días calurosos. La entrega fue rápida y todo llegó perfecto.",
    date: "Hace 5 días",
    likes: 18,
  },
  {
    id: 3,
    name: "Andrea López",
    rating: 5,
    comment: "Me encanta que usen fresas frescas y de calidad. El servicio al cliente es excelente, siempre atentos ✨",
    date: "Hace 1 semana",
    likes: 32,
  },
  {
    id: 4,
    name: "Roberto Silva",
    rating: 5,
    comment: "Pedí el combo familiar para una reunión y fue un éxito total. Todos quedaron encantados!",
    date: "Hace 1 semana",
    likes: 15,
  },
  {
    id: 5,
    name: "Valentina Ruiz",
    rating: 5,
    comment: "El chocolate dream es mi favorito! La combinación perfecta de dulce y cremoso 🍫🍓",
    date: "Hace 2 semanas",
    likes: 41,
  },
  {
    id: 6,
    name: "Fernando Morales",
    rating: 5,
    comment: "Excelente relación calidad-precio. Las porciones son grandes y el sabor increíble.",
    date: "Hace 2 semanas",
    likes: 27,
  },
];

export function Reviews() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section 
        className="py-12 md:py-16 px-4 text-center"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="text-5xl md:text-6xl mb-4">⭐</div>
        <h1 
          className="text-3xl md:text-5xl font-bold mb-3"
          style={{ color: 'var(--strawberry-red)' }}
        >
          Opiniones
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Lo que dicen nuestros clientes sobre Fresinika
        </p>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Average Rating */}
            <div 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center"
              style={{ borderTop: '4px solid var(--strawberry-red)' }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--strawberry-red)' }}>
                5.0
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill="var(--strawberry-red)" 
                    style={{ color: 'var(--strawberry-red)' }} 
                  />
                ))}
              </div>
              <p className="text-gray-600">Calificación promedio</p>
            </div>

            {/* Total Reviews */}
            <div 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center"
              style={{ borderTop: '4px solid var(--strawberry-pink)' }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--strawberry-pink)' }}>
                500+
              </div>
              <p className="text-gray-600 text-lg">Opiniones positivas</p>
            </div>

            {/* Social */}
            <div 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center"
              style={{ borderTop: '4px solid var(--tropical-green)' }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'var(--tropical-green)' }}>
                14K+
              </div>
              <p className="text-gray-600 text-lg">Seguidores en Instagram</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{review.name}</h3>
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="var(--strawberry-red)" 
                          style={{ color: 'var(--strawberry-red)' }} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {review.comment}
                </p>

                <div className="flex items-center gap-2 text-gray-500">
                  <button className="flex items-center gap-1 hover:text-[var(--strawberry-red)] transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">{review.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section 
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: 'var(--cream-white)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl md:text-6xl mb-6">📸</div>
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--strawberry-red)' }}
          >
            Síguenos en Instagram
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Únete a nuestra comunidad de más de 14,000 seguidores y descubre las novedades, promociones y mucho más
          </p>
          <a
            href="https://instagram.com/fresinika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            style={{ 
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            <Instagram size={24} />
            <span>@fresinika</span>
          </a>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--strawberry-red)' }}
          >
            ¿Ya probaste Fresinika?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Cuéntanos tu experiencia por WhatsApp
          </p>
          <button
            onClick={() => {
              const phoneNumber = "50588888888";
              const message = encodeURIComponent("¡Hola! Me gustaría compartir mi opinión sobre Fresinika 🍓⭐");
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="px-8 md:px-10 py-3 md:py-4 rounded-full text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: '#25D366' }}
          >
            Dejar mi Opinión
          </button>
        </div>
      </section>
    </div>
  );
}
