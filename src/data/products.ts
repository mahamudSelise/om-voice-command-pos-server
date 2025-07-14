import { IProduct } from '@interfaces';

export const products: IProduct[] = [
  {
    id: 'prod001',
    name: 'Grilled Steak',
    img: {
      src: '/images/grilled-steak.jpg',
    },
    description:
      'Succulent, perfectly grilled steak, seasoned to perfection and cooked to your liking. A classic choice for meat lovers seeking a rich, savory experience.',
    addOns: [
      {
        id: 'addon001',
        name: 'Mashed Potatoes',
      },
      {
        id: 'addon002',
        name: 'Creamy Gravy',
      },
      {
        id: 'addon003',
        name: 'Steamed Asparagus',
      },
    ],
  },
  {
    id: 'prod002',
    name: 'Classic Burger',
    img: {
      src: '/images/classic-burger.jpg',
    },
    description:
      'A juicy beef patty topped with fresh lettuce, tomato, onion, and a special sauce, all nestled in a soft bun. The quintessential burger experience.',
    addOns: [
      {
        id: 'addon004',
        name: 'French Fries',
      },
      {
        id: 'addon005',
        name: 'Coleslaw',
      },
      {
        id: 'addon006',
        name: 'Extra Cheese',
      },
    ],
  },
  {
    id: 'prod003',
    name: 'Spicy Chicken Wings',
    img: {
      src: '/images/spicy-chicken-wings.jpg',
    },
    description:
      'Crispy, fiery chicken wings tossed in our signature hot sauce. Perfect for those who love a bold kick with every bite. Served fresh and hot.',
    addOns: [
      {
        id: 'addon007',
        name: 'Blue Cheese Dip',
      },
      {
        id: 'addon008',
        name: 'Ranch Dip',
      },
      {
        id: 'addon009',
        name: 'Celery Sticks',
      },
    ],
  },
  {
    id: 'prod004',
    name: 'Caesar Salad',
    img: {
      src: '/images/caesar-salad.jpg',
    },
    description:
      "Crisp romaine lettuce, crunchy croutons, shaved Parmesan cheese, and a tangy Caesar dressing. A timeless salad that's both light and satisfying.",
    addOns: [
      {
        id: 'addon010',
        name: 'Grilled Chicken',
      },
      {
        id: 'addon011',
        name: 'Croutons',
      },
      {
        id: 'addon012',
        name: 'Extra Dressing',
      },
    ],
  },
  {
    id: 'prod005',
    name: 'Vegetable Pizza',
    img: {
      src: '/images/vegetable-pizza.jpg',
    },
    description:
      'A delicious pizza loaded with fresh bell peppers, onions, mushrooms, olives, and mozzarella cheese on a crispy crust. A vibrant and flavorful vegetarian option.',
    addOns: [
      {
        id: 'addon013',
        name: 'Garlic Bread',
      },
      {
        id: 'addon014',
        name: 'Red Pepper Flakes',
      },
      {
        id: 'addon015',
        name: 'Parmesan Cheese',
      },
    ],
  },
  {
    id: 'prod006',
    name: 'Fish & Chips',
    img: {
      src: '/images/fish-chips.jpg',
    },
    description:
      'Golden-fried, flaky cod served with a generous portion of thick-cut, crispy chips. A beloved British classic, perfect with a squeeze of lemon.',
    addOns: [
      {
        id: 'addon016',
        name: 'Tartar Sauce',
      },
      {
        id: 'addon017',
        name: 'Malt Vinegar',
      },
      {
        id: 'addon018',
        name: 'Lemon Wedge',
      },
    ],
  },
  {
    id: 'prod007',
    name: 'Beef Tacos',
    img: {
      src: '/images/beef-tacos.jpg',
    },
    description:
      'Two soft flour tortillas filled with seasoned ground beef, crisp lettuce, shredded cheese, and diced tomatoes. A festive and customizable Mexican delight.',
    addOns: [
      {
        id: 'addon019',
        name: 'Guacamole',
      },
      {
        id: 'addon020',
        name: 'Sour Cream',
      },
      {
        id: 'addon021',
        name: 'Salsa',
      },
    ],
  },
  {
    id: 'prod008',
    name: 'Vegetable Soup',
    img: {
      src: '/images/vegetable-soup.jpg',
    },
    description:
      'Warm, comforting, and rich tomato soup, made with ripe tomatoes and savory herbs. A perfect starter or light meal, especially on a chilly day.',
    addOns: [
      {
        id: 'addon022',
        name: 'Croutons',
      },
      {
        id: 'addon023',
        name: 'Grilled Cheese',
      },
      {
        id: 'addon024',
        name: 'Fresh Basil',
      },
    ],
  },
  {
    id: 'prod009',
    name: 'Chicken Pasta',
    img: {
      src: '/images/chicken-pasta.jpg',
    },
    description:
      'Creamy fettuccine Alfredo tossed with tender grilled chicken breast and a rich, cheesy sauce. A comforting Italian classic that satisfies every time.',
    addOns: [
      {
        id: 'addon025',
        name: 'Garlic Bread',
      },
      {
        id: 'addon026',
        name: 'Side Salad',
      },
      {
        id: 'addon027',
        name: 'Extra Alfredo Sauce',
      },
    ],
  },
  {
    id: 'prod010',
    name: 'Chocolate Lava Cake',
    img: {
      src: '/images/chocolate-lava-cake.jpg',
    },
    description:
      "A decadent chocolate cake with a molten, gooey center, served warm. A rich, indulgent dessert that's a perfect ending to any meal.",
    addOns: [
      {
        id: 'addon028',
        name: 'Vanilla Ice Cream',
      },
      {
        id: 'addon029',
        name: 'Whipped Cream',
      },
      {
        id: 'addon030',
        name: 'Fresh Berries',
      },
    ],
  },
];
