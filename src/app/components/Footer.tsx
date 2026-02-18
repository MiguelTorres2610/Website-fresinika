import { Link } from "react-router";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";
import logo from "../../assets/logo_fresanika.webp";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Fresinika Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Fresas con crema artesanales en Managua, Nicaragua
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link to="/ubicacion" className="text-gray-400 hover:text-white transition-colors">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Managua, Nicaragua</li>
              <li>+505 8888 8888</li>
              <li>info@fresinika.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/fresinika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/fresinika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/fresinika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart size={16} fill="var(--strawberry-red)" style={{ color: 'var(--strawberry-red)' }} /> en Nicaragua
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Fresinika. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}