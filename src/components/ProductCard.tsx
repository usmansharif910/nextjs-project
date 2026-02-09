import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-base">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative aspect-square w-full rounded-md border bg-muted">
          <Image src={product.image ?? "/window.svg"} alt={product.name} fill className="object-contain p-6 dark:invert" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="font-semibold">${""}{product.price.toFixed(2)}</div>
        <Button size="sm">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}


