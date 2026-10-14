// Fake data for Phase 1.
// In Phase 2, this moves to Firebase Firestore.

const products = [
  {
    id: "1",
    name: "Samsung Galaxy A15",
    price: 22000,
    image: "https://picsum.photos/seed/phone1/400/400",
    specs: "6GB RAM · 128GB · 50MP Camera",
    description: "Brand new sealed. 1 year warranty. Free screen protector.",
  },
  {
    id: "2",
    name: "HP Pavilion 15",
    price: 65000,
    image: "https://picsum.photos/seed/laptop1/400/400",
    specs: "Core i5 · 8GB RAM · 512GB SSD",
    description: "Slightly used, excellent condition. Charger included.",
  },
  {
    id: "3",
    name: "iPhone 13",
    price: 78000,
    image: "https://picsum.photos/seed/phone2/400/400",
    specs: "128GB · 4GB RAM · A15 Bionic",
    description: "UK used, battery health 92%. Comes with cable.",
  },
  {
    id: "4",
    name: "Dell Latitude 5420",
    price: 48000,
    image: "https://picsum.photos/seed/laptop2/400/400",
    specs: "Core i7 · 16GB RAM · 256GB SSD",
    description: "Ex-UK, clean. Perfect for students and office work.",
  },
  {
    id: "5",
    name: "Tecno Spark 20",
    price: 15500,
    image: "https://picsum.photos/seed/phone3/400/400",
    specs: "8GB RAM · 256GB · 50MP",
    description: "Brand new. Sealed box. 1 year warranty.",
  },
  {
    id: "6",
    name: "MacBook Air M1",
    price: 95000,
    image: "https://picsum.photos/seed/laptop3/400/400",
    specs: "M1 chip · 8GB RAM · 256GB SSD",
    description: "Barely used. Battery cycle count under 100.",
  },
];

// Seller info — the single seller for this shop.
const seller = {
  name: "TechHub Nairobi",
  phone: "+254712345678",
  whatsapp: "+254712345678",
  location: "Ronald Ngala Street, Nairobi",
  lat: -1.2841,
  lng: 36.8233,
};