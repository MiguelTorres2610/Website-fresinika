import { Link, useLocation } from "react-router";
import { Home, BookOpen, MapPin, Star, Info } from "lucide-react";

export function MobileNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Inicio" },
    { path: "/menu", icon: BookOpen, label: "Menú" },
    { path: "/ubicacion", icon: MapPin, label: "Ubicación" },
    { path: "/opiniones", icon: Star, label: "Opiniones" },
    { path: "/nosotros", icon: Info, label: "Nosotros" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 transition-colors"
              style={{
                color: active ? 'var(--strawberry-red)' : 'var(--muted-foreground)',
              }}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-xs" style={{ fontWeight: active ? 600 : 400 }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
