import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-4">🍓</div>
      <h1 className="text-3xl mb-4" style={{ color: 'var(--strawberry-red)' }}>
        Página no encontrada
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Lo sentimos, no pudimos encontrar lo que buscabas
      </p>
      <Link
        to="/"
        className="px-8 py-3 rounded-full text-white transition-all hover:scale-105"
        style={{ backgroundColor: 'var(--strawberry-red)' }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
