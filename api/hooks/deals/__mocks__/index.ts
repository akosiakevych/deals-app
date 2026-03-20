const CATEGORIES = [
  "Electronics",
  "Home",
  "Sports",
  "Fashion",
  "Books",
  "Garden",
  "Toys",
  "Automotive",
] as const;

const PRODUCT_NAMES = [
  "Wireless Headphones",
  "Smart Watch",
  "Portable Speaker",
  "USB-C Hub",
  "Desk Lamp",
  "Yoga Mat",
  "Running Shoes",
  "Backpack",
  "Coffee Maker",
  "Air Purifier",
  "Tablet Stand",
  "Mechanical Keyboard",
  "Noise-Canceling Earbuds",
  "Fitness Tracker",
  "Electric Kettle",
  "LED Monitor",
  "Webcam",
  "Phone Case",
  "Power Bank",
  "Bluetooth Mouse",
];

export const mockedDeals = Array.from({ length: 100 }, (_, i) => {
  const n = i + 1;
  const id = String(n);

  return {
    id,
    title: `${PRODUCT_NAMES[i % PRODUCT_NAMES.length]} — bundle ${n}`,
    price: 15 + ((n * 73) % 486),
    discountPercentage: 10 + ((n * 17) % 91),
    refurbedScore: 1 + (i % 10),
    category: CATEGORIES[i % CATEGORIES.length],
    rating: Math.round((1 + ((n * 11) % 41) / 10) * 10) / 10,
    isBestSeller: i % 2 === 0,
    imageUrl: `https://picsum.photos/seed/deal-${id}/200/200`,
  };
});
