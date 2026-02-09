import ProductCard, { type Product } from "@/components/ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Featured products</h2>
        <a href="/shop" className="text-sm text-muted-foreground hover:text-foreground">View all</a>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


