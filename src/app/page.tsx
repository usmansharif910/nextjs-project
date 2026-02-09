import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

const demoProducts = [
  { id: "1", name: "Minimal Chair", price: 129, image: "/apple.jpg" },
  { id: "2", name: "Nordic Lamp", price: 89, image: "/apple.jpg" },
  { id: "3", name: "Oak Table", price: 399, image: "/apple.jpg" },
  { id: "4", name: "Soft Sofa", price: 799, image: "/apple.jpg" },
  { id: "5", name: "Wall Clock", price: 59, image: "/apple.jpg" },
  { id: "6", name: "Desk Plant", price: 29, image: "/apple.jpg" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid products={demoProducts} />
    </main>
  );
}
