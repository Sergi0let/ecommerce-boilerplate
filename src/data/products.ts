import { ITestimonials, Product } from "@/types/product-types";

export const products: Product[] = [
  {
    id: "1",
    slug: "zvolozhuyuchiy-krem-hydra-boost",
    title: "Зволожуючий крем для обличчя HYDRA BOOST",
    shortDescription: "Легкий крем з гіалуроновою кислотою та алое вера",
    description:
      "Ідеальний для щоденного зволоження сухої та комбінованої шкіри. Миттєво вбирається, не залишає жирного блиску.",
    brand: "EcoSkin",
    category: "Догляд за обличчям",
    subcategory: "Креми",
    tags: ["зволоження", "гіпоалергенний", "eco", "веган"],
    price: 379,
    oldPrice: 499,
    discountPercentage: 24,
    currency: "UAH",
    isDiscounted: true,
    isNew: true,
    isAvailable: true,
    quantity: 34,
    sku: "ES-HB-50",
    barcode: "5901234567890",
    attributes: {
      Обʼєм: "50 мл",
      "Тип шкіри": "Суха, Комбінована",
      "Основні компоненти": "Гіалуронова кислота, Алое вера",
      "Країна виробник": "Польща",
      Веган: "Так",
    },
    pictures: [
      "/products/main/1.jpg",
      "/products/main/2.jpg",
      "/products/main/3.jpg",
      "/products/main/4.jpg",
      "/products/main/5.jpg",
      "/products/main/6.jpg",
      "/products/main/7.jpg",
    ],
    rating: 4.7,
    reviewsCount: 89,
    createdAt: "2024-12-01T12:00:00Z",
    updatedAt: "2025-04-29T10:15:00Z",
  },
  {
    id: "perfume-rose-002",
    slug: "parfum-roza-i-sandal",
    title: "Парфуми Rose & Sandal",
    shortDescription: "Унісекс аромат з нотами троянди, сандалу та мускусу",
    description:
      "Ідеальний для вечірнього виходу або щоденного використання. Елегантність у кожному русі.",
    brand: "Scentology",
    category: "Парфуми",
    subcategory: "Унісекс",
    tags: ["деревні", "східні", "унісекс", "вечірній"],
    price: 1199,
    oldPrice: 1499,
    discountPercentage: 20,
    currency: "UAH",
    isDiscounted: true,
    isNew: false,
    isAvailable: true,
    quantity: 12,
    sku: "SC-RS-100",
    barcode: "5909876543210",
    attributes: {
      Обʼєм: "100 мл",
      Ноти: "Троянда, Сандал, Мускус",
      Концентрація: "Eau de Parfum",
      "Країна виробник": "Франція",
    },
    pictures: [
      "/products/main/1.jpg",
      "/products/main/2.jpg",
      "/products/main/3.jpg",
      "/products/main/4.jpg",
      "/products/main/5.jpg",
      "/products/main/6.jpg",
      "/products/main/7.jpg",
    ],
    rating: 2.9,
    reviewsCount: 143,
    createdAt: "2024-10-10T08:00:00Z",
    updatedAt: "2025-02-14T09:00:00Z",
  },
  {
    id: "hairmask-keratin-003",
    slug: "maska-dlya-volossya-keratin-boost",
    title: "Кератинова маска для волосся KERATIN BOOST",
    shortDescription: "Глибоке відновлення волосся після фарбування та укладки",
    description:
      "Зміцнює структуру волосся, зменшує ламкість та повертає блиск. Професійна формула для домашнього використання.",
    brand: "HairClinic Pro",
    category: "Догляд за волоссям",
    subcategory: "Маски",
    tags: ["кератин", "для сухого волосся", "професійна лінійка"],
    price: 249,
    oldPrice: 299,
    discountPercentage: 16,
    currency: "UAH",
    isDiscounted: true,
    isNew: false,
    isAvailable: false,
    quantity: 0,
    sku: "HCP-KB-250",
    barcode: "5902468135790",
    attributes: {
      Обʼєм: "250 мл",
      "Тип волосся": "Сухе, Пошкоджене",
      "Активні компоненти": "Кератин, Арганова олія",
      "Країна виробник": "Італія",
    },
    pictures: [
      "/products/main/1.jpg",
      "/products/main/2.jpg",
      "/products/main/3.jpg",
      "/products/main/4.jpg",
      "/products/main/5.jpg",
      "/products/main/6.jpg",
      "/products/main/7.jpg",
    ],
    rating: 3.5,
    reviewsCount: 57,
    createdAt: "2024-09-05T11:00:00Z",
    updatedAt: "2025-01-03T15:30:00Z",
  },
];

export const testimonialsData: ITestimonials[] = [
  {
    id: 1,
    name: "Марина Шевченко",
    date: "10 травня 2024",
    respond:
      "Тут придбала збірник віршів мого однофамільця, досить задоволена товаром та сервісом. Все прийло вчасно та охайно запаковано. Рекомендую усім",
    raiting: "5",
  },
  {
    id: 2,
    name: "В'ячеслав Чорновіл",
    date: "24 серпня 1991",
    respond:
      "Тут товари для справжнії Українців. Любіть Україну, як сонце любіть, нашу Україну Єдину... Нумо браття єднаймося",
    raiting: "4",
  },
  {
    id: 3,
    name: "Григорій Сковорада",
    date: "1 січня 2025",
    respond:
      "Маючи 500 гривень на цьому сайті я знайшов для себе що купити, а ще памятаю як за мого товриша Шевченка можна було шапку Адідас придбати. Нажаль часи змінилися почали друковати його без шапки. Бо на теперешній час це пачка Прилук та єдненьке Чернігівсье. Єднаймося, зігріваймося покажемо роду що ми...",
    raiting: "2",
  },
];
