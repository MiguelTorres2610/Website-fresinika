import fresinikaClasica from '../../assets/fresanika_original.jpeg';
import fresinikaHawaiano from '../../assets/hawai.jpeg';
import fresasChocolate from '../../assets/fresas_chocolate.jpeg';
import fresasCrema from '../../assets/fresas_crema.webp';

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
    name: 'Fresinika original(s/toppings)',
    description: 'Fresas, crema, leche condensada o chocolate',
    price: 200,
    image: fresinikaClasica,
    category: 'clasicos',
    badge: 'Más vendido',
    flavors: ['Natural', 'Con azúcar', 'Sin azúcar'],
  },
  {
    id: 'fresa-premium',
    name: 'Fresa/crema de vainilla +3 toppings',
    description: 'Fresas extra grandes con crema batida y toppings especiales',
    price: 240,
    image: fresasCrema,
    category: 'clasicos',
  },
  {
    id: 'Chocofresas',
    name: 'Yogurt con Fresas',
    description: 'Nutella, crema de chocolate, fresas frescas, chocolate chips, leche en polvo.',
    price: 345,
    image: fresasChocolate,
    category: 'clasicos',
  },

  // Tropicales
  {
    id: 'tropical-mix',
    name: 'Mixto de fresas y duraznos + 2 toppings',
    description: 'Con dos toppings de su elección',
    price: 259,
    image: fresinikaHawaiano,
    category: 'tropicales',
    badge: 'Más vendido',
  },
  {
    id: 'pina-colada',
    name: 'Fresinika Hawaiano',
    description: 'Fresinika Hawaiano con piña, coco, crema de vainilla y leche condensada',
    price: 259,
    image: fresinikaHawaiano,
    category: 'tropicales',
    badge: 'Nuevo',
  },

  // Especiales
  {
    id: 'chocolate-dream',
    name: 'Fresa con crema de vainilla + 5 toppings',
    description: 'Fresa con crema de vainilla + 5 toppings',
    price: 259,
    image: fresasChocolate,
    category: 'especiales',
    badge: 'Nuevo',
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Fresas con crema y galletas Oreo trituradas',
    price: 105,
    image: fresasCrema,
    category: 'especiales',
  },

  // Combos
  {
    id: 'combo-duo',
    name: 'Combo Dúo',
    description: '2 vasos clásicos para compartir',
    price: 145,
    image: fresinikaClasica,
    category: 'combos',
    badge: 'Promo',
  },
  {
    id: 'combo-familia',
    name: 'Combo Familiar',
    description: '4 vasos a elegir + 1 litro de jugo natural',
    price: 340,
    image: fresinikaClasica,
    category: 'combos',
    badge: 'Promo',
  },

  // Promociones
  {
    id: 'promo-semana',
    name: 'Promo de la Semana',
    description: 'Fresa tropical con 20% de descuento',
    price: 76,
    image: fresinikaHawaiano,
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