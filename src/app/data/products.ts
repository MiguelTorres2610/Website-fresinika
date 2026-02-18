export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'clasicos' | 'tropicales' | 'especiales' | 'combos' | 'promociones';
  badge?: 'Más vendido' | 'Nuevo' | 'Promo';
  flavors?: string[];
  gallery?: string[];
}

export const products: Product[] = [
  // Clásicos
  {
    id: 'fresa-clasica',
    name: 'Fresas con Crema Clásica',
    description: 'Fresas frescas con nuestra deliciosa crema artesanal',
    price: 80,
    image: 'https://images.unsplash.com/photo-1723437496824-a73ed350558b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJpZXMlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzcwMDA4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'clasicos',
    badge: 'Más vendido',
    flavors: ['Natural', 'Con azúcar', 'Sin azúcar'],
  },
  {
    id: 'fresa-premium',
    name: 'Fresas Premium',
    description: 'Fresas extra grandes con crema batida y toppings especiales',
    price: 110,
    image: 'https://images.unsplash.com/photo-1561282236-fb65a135d81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN0cmF3YmVycmllcyUyMGJvd2x8ZW58MXx8fHwxNzcwMDA4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'clasicos',
  },
  {
    id: 'yogurt-fresa',
    name: 'Yogurt con Fresas',
    description: 'Yogurt natural con fresas frescas y granola',
    price: 85,
    image: 'https://images.unsplash.com/photo-1590085345642-cc15c79a9607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlcnJpZXMlMjB5b2d1cnR8ZW58MXx8fHwxNzcwMDA4NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'clasicos',
  },

  // Tropicales
  {
    id: 'tropical-mix',
    name: 'Mix Tropical',
    description: 'Fresas con piña, mango, papaya y crema',
    price: 95,
    image: 'https://images.unsplash.com/photo-1564956213070-84f5a0cb2407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY5OTMwNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tropicales',
    badge: 'Más vendido',
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada con Fresas',
    description: 'Fresas con piña, coco rallado y crema especial',
    price: 100,
    image: 'https://images.unsplash.com/photo-1707588435406-74ef5f056e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHBhcmZhaXQlMjBkZXNzZXJ0fGVufDF8fHx8MTc3MDAwODYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tropicales',
    badge: 'Nuevo',
  },

  // Especiales
  {
    id: 'chocolate-dream',
    name: 'Chocolate Dream',
    description: 'Fresas con crema, chocolate derretido y chispas',
    price: 115,
    image: 'https://images.unsplash.com/photo-1663525572640-ce318c497a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydCUyMGN1cHxlbnwxfHx8fDE3NzAwMDg2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'especiales',
    badge: 'Nuevo',
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Fresas con crema y galletas Oreo trituradas',
    price: 105,
    image: 'https://images.unsplash.com/photo-1723437496824-a73ed350558b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJpZXMlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzcwMDA4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'especiales',
  },

  // Combos
  {
    id: 'combo-duo',
    name: 'Combo Dúo',
    description: '2 vasos clásicos para compartir',
    price: 145,
    image: 'https://images.unsplash.com/photo-1561282236-fb65a135d81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN0cmF3YmVycmllcyUyMGJvd2x8ZW58MXx8fHwxNzcwMDA4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'combos',
    badge: 'Promo',
  },
  {
    id: 'combo-familia',
    name: 'Combo Familiar',
    description: '4 vasos a elegir + 1 litro de jugo natural',
    price: 340,
    image: 'https://images.unsplash.com/photo-1590085345642-cc15c79a9607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlcnJpZXMlMjB5b2d1cnR8ZW58MXx8fHwxNzcwMDA4NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'combos',
    badge: 'Promo',
  },

  // Promociones
  {
    id: 'promo-semana',
    name: 'Promo de la Semana',
    description: 'Fresa tropical con 20% de descuento',
    price: 76,
    image: 'https://images.unsplash.com/photo-1564956213070-84f5a0cb2407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwc21vb3RoaWV8ZW58MXx8fHwxNzY5OTMwNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'promociones',
    badge: 'Promo',
  },
];

export const categories = [
  { id: 'clasicos', name: 'Clásicos', icon: '🍓' },
  { id: 'tropicales', name: 'Tropicales', icon: '🥭' },
  { id: 'especiales', name: 'Especiales', icon: '✨' },
  { id: 'combos', name: 'Combos', icon: '🎁' },
  { id: 'promociones', name: 'Promociones', icon: '🔥' },
];
